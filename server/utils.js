const config = require("./config");

exports.hasValidSize = function (fileSize) {
  return fileSize !== 0 && fileSize < config.maxFileSize;
};

exports.hasValidType = function (fileType) {
  return config.validFileTypes.some((validFileType) =>
    validFileType.includes(fileType)
  );
};

exports.hasTypeMismatch = function (fileExt, fileType) {
  return !fileExt.includes(fileType);
};

exports.hasValidThumbSizes = function (array) {
  if (!Array.isArray(array)) {
    return false;
  } else {
    return array.every(
      (item) =>
        item.w &&
        typeof item.w === "number" &&
        item.h &&
        typeof item.h === "number"
    );
  }
};

exports.hasValidImageFitMode = function (imageFitMode) {
  return config.imageFitModes.includes(imageFitMode);
};

exports.colorLog = function (text, color) {
  let selectedColor = config.logColor[color];
  console.log(selectedColor + "%s\x1b[0m", text);
};
