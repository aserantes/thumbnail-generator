const atDevEnv = process.env.NODE_ENV !== "production";

atDevEnv && require("dotenv").config();

const express = require("express");
const FileType = require("file-type");
const sharp = require("sharp");
const path = require("path");
const multer = require("multer");
const { performance } = require("perf_hooks");

const utils = require("./utils");
const config = require("./config");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.post(
  "/generateThumbnails",
  upload.single("image"),
  async (req, res, next) => {
    try {
      console.clear();

      // Validations Started
      utils.colorLog("***Validation Started***", "bgBlue");
      const validationTimerStart = performance.now();
      const file = req.file;
      const body = req.body;
      let thumbSizes = config.defaultThumbSizes;
      let options = config.defaultOptions;

      // first make sure the form has a file
      if (!file) {
        throw {
          status: "400",
          message: "uploaded form is missing a file to process",
        };
      }

      const fileExt = file.mimetype;
      utils.colorLog(
        `received a new file with extension "${fileExt}"`,
        "fgCyan"
      );

      // check if an optional thumbSizes array exists in the form, if it does, check its syntax validity or throw an error
      if (body && body.thumbSizes) {
        utils.colorLog(`received an optional item thumbSizes`, "fgCyan");
        const parsedThumbSizes = JSON.parse(body.thumbSizes);
        const thumbSizesIsValid = utils.hasValidThumbSizes(parsedThumbSizes);
        if (!thumbSizesIsValid) {
          throw {
            status: 400,
            message:
              "included thumbSizes array has an invalid syntax. It must be [{w: number, h:number},{w: number, h:number}...]",
          };
        } else {
          utils.colorLog(`thumbSizes array is valid`, "fgGreen");
          thumbSizes = parsedThumbSizes;
        }
      } else {
        utils.colorLog(
          `optional array thumbSizes was not found, defaults will be used`,
          "fgYellow"
        );
      }

      // check if an optional imageFitMode array exists in the form, if it does, check its syntax validity or throw an error
      if (body && body.imageFitMode) {
        utils.colorLog(`received an optional item imageFitMode`, "fgCyan");
        const { imageFitMode } = body;
        const imageFitModeIsValid = utils.hasValidImageFitMode(imageFitMode);
        if (!imageFitModeIsValid) {
          throw {
            status: 400,
            message:
              "included imageFitMode is invalid. It must be one of ['cover', 'contain', 'fill', 'inside']",
          };
        } else {
          utils.colorLog(`imageFitMode is valid`, "fgGreen");
          options = { ...options, fit: imageFitMode };
        }
      } else {
        utils.colorLog(
          `optional imageFitMode was not found, default will be used`,
          "fgYellow"
        );
      }

      // get the file signature from the first few bytes of the blob and get the real file extension from it
      const buffer = file.buffer.slice(0, 32);
      const fileInfo = await FileType.fromBuffer(buffer);
      const fileType = fileInfo.ext;
      utils.colorLog(`real file type is "${fileType}"`, "fgCyan");

      // validate real type and send error if it fails
      const hasValidType = utils.hasValidType(fileType);
      if (hasValidType) {
        utils.colorLog(`type validation succeeded`, "fgGreen");
      } else {
        throw {
          status: 415,
          message: "type validation failed, file must be either jpg or png",
        };
      }

      // validate file size and send error if it fails
      const fileSize = file.size;
      const hasValidSize = utils.hasValidSize(fileSize);
      if (hasValidSize) {
        utils.colorLog(`size validation succeeded`, "fgGreen");
      } else {
        utils.colorLog(
          `size validation failed, file must be smaller than 5mb`,
          "fgRed"
        );
        throw {
          status: "413",
          message: "size validation failed, file must be smaller than 5mb",
        };
      }

      // Validations Finished
      const validationTimerEnd = performance.now();
      utils.colorLog(
        `*** Validation Finished in ${
          validationTimerEnd - validationTimerStart
        }ms ***`,
        "bgBlue"
      );

      // Thumbnails Generation Started
      utils.colorLog("***Thumbnails Generation Started***", "bgMagenta");
      const thumbsnailGenerationTimerStart = performance.now();

      const promises = {};
      const results = {};
      async function parallelThumbsProcess() {
        thumbSizes.forEach((item) => {
          const { fit } = options;
          if (
            // horrible forced typeguard... I'm missing typescript already
            fit === "cover" ||
            fit === "fill" ||
            fit === "contain" ||
            fit === "inside"
          )
            promises[`thumb-${item.w}x${item.h}`] = sharp(file.buffer)
              .resize(item.w, item.h, { fit })
              .toFile(`server/thumbnails/thumb-${item.w}x${item.h}.png`);
        });

        for (const [key, value] of Object.entries(promises)) {
          results[key] = await value;
        }

        return results;
      }

      await parallelThumbsProcess();

      const thumbsnailGenerationTimerEnd = performance.now();
      utils.colorLog(
        `*** thumbsnailGeneration Finished in ${
          thumbsnailGenerationTimerEnd - thumbsnailGenerationTimerStart
        }ms ***`,
        "bgBlue"
      );

      res.send(true);
    } catch (err) {
      next(err);
    }
  }
);

// serve the client build folder
app.use(express.static(path.join(__dirname, "build")));

// serve the thumbnails folder
app.use(express.static(path.join(__dirname, "thumbnails")));

// on requests at root, points at index.html of client build
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((err, req, res, next) => {
  utils.colorLog(err.message || err, "fgRed");
  res.status(err.status || 500).send(err.message || err);
});

app.listen(parseInt(process.env.PORT || "4000"), "0.0.0.0", () => {
  console.log(`node listening on port ${process.env.PORT || "4000"}`);
});
