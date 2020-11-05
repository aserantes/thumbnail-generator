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
      utils.colorLog(`request received at /generateThumbnails`, "bright");

      // validation start
      utils.colorLog(`validation started`, "bgBlue");
      const validationTimerStart = performance.now();
      const file = req.file;
      const body = req.body;
      let thumbSizes = config.defaultThumbSizes;
      let options = config.defaultOptions;

      // check for file existence
      if (!file) {
        throw {
          status: 400,
          message: `request does not contain a file to process`,
        };
      }

      utils.colorLog(`request contains a file to process`, "fgGreen");

      // check for optional thumbSizes parameter existence and validity
      if (body && body.thumbSizes) {
        utils.colorLog(
          `request contains optional parameter "thumbSizes"`,
          "fgCyan"
        );
        const parsedThumbSizes = JSON.parse(body.thumbSizes);
        const thumbSizesIsValid = utils.hasValidThumbSizes(parsedThumbSizes);
        if (!thumbSizesIsValid) {
          throw {
            status: 400,
            message: `"thumbSizes" is invalid, must be of type {w: number, h: number}[]`,
          };
        } else {
          utils.colorLog(`"thumbSizes" is valid.`, "fgGreen");
          thumbSizes = parsedThumbSizes;
        }
      } else {
        utils.colorLog(
          `request does not contain optional parameter "thumbSizes", default will be used`,
          "fgYellow"
        );
      }

      // check for optional imageFitMode parameter's existence and validity
      if (body && body.imageFitMode) {
        utils.colorLog(
          `request contains optional parameter "imageFitMode"`,
          "fgCyan"
        );
        const { imageFitMode } = body;
        const imageFitModeIsValid = utils.hasValidImageFitMode(imageFitMode);
        if (!imageFitModeIsValid) {
          throw {
            status: 400,
            message: `"imageFitMode" is invalid, must be one of "cover", "contain", "fill" or "inside"`,
          };
        } else {
          utils.colorLog(`"imageFitMode" is valid`, "fgGreen");
          options = { ...options, fit: imageFitMode };
        }
      } else {
        utils.colorLog(
          `request does not contain optional parameter "imageFitMode", default will be used`,
          "fgYellow"
        );
      }

      const fileExt = file.mimetype;
      utils.colorLog(`file extension is "${fileExt}"`, "fgCyan");

      // get the file signature from the first few bytes of its blob and get the real file extension from it
      const buffer = file.buffer.slice(0, 32);
      const fileInfo = await FileType.fromBuffer(buffer);
      const fileType = fileInfo.ext;
      utils.colorLog(`real file type is "${fileType}"`, "fgCyan");

      // validate real type and throw error if it fails
      const hasValidType = utils.hasValidType(fileType);
      if (hasValidType) {
        utils.colorLog(`file type is valid`, "fgGreen");
      } else {
        throw {
          status: 415,
          message: "file type is invalid, must be either jpg or png",
        };
      }

      // validate file size and throw error if it fails
      const fileSize = file.size;
      const hasValidSize = utils.hasValidSize(fileSize);
      if (hasValidSize) {
        utils.colorLog(`size is valid`, "fgGreen");
      } else {
        throw {
          status: 413,
          message: "size validation failed, file must be smaller than 5mb",
        };
      }

      // validation finish
      const validationTimerEnd = performance.now();
      utils.colorLog(
        `validation finished in ${validationTimerEnd - validationTimerStart}ms`,
        "bgBlue"
      );

      // thumbnails generation start
      utils.colorLog("thumbnails generation started", "bgMagenta");
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
              .rotate()
              .resize(item.w, item.h, { fit })
              .toFile(`thumbnails/thumb-${item.w}x${item.h}.png`)
              .catch((err) => next(err));
        });

        for (const [key, value] of Object.entries(promises)) {
          results[key] = await value;
        }

        return results;
      }
      await parallelThumbsProcess();

      // thumbnails generation finish
      const thumbsnailGenerationTimerEnd = performance.now();
      utils.colorLog(
        `thumbsnail generation finished in ${
          thumbsnailGenerationTimerEnd - thumbsnailGenerationTimerStart
        }ms`,
        "bgMagenta"
      );

      res.send(true);
    } catch (err) {
      next(err);
    }
  }
);

// serve thumbnails folder
app.use("/thumbnails", express.static(path.join(__dirname, "thumbnails")));

// serve react build
app.use(express.static(path.join(__dirname, "build")));

// direct root get calls to index.html at build folder
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((err, req, res, next) => {
  // catch all errors, log in red, and send to client
  utils.colorLog(err.message || err, "fgRed");
  res.status(err.status || 500).send(err.message || err);
});

app.listen(parseInt(process.env.PORT || "4000"), "0.0.0.0", () => {
  console.log(`node listening on port ${process.env.PORT || "4000"}`);
});
