export const MAX_FILE_SIZE = 5242880;

export const MAX_FILE_SIZE_ERROR = `Max image size is ${
  MAX_FILE_SIZE / 1024 / 1024
} Mb.`;

export const VALID_FILE_TYPES = [".jpg", ".png"];

export const VALID_FILE_TYPES_ERROR = `Valid file types are: ${VALID_FILE_TYPES.join(
  " | "
)}.`;
