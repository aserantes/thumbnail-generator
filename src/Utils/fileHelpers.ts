import { MAX_FILE_SIZE, VALID_FILE_TYPES } from "Constants";

export const checkTypeValidity = (fileType: string): boolean =>
  fileType !== "" &&
  VALID_FILE_TYPES.some((validFileType) => validFileType.includes(fileType));

export const checkSizeValidity = (fileSize: number): boolean =>
  fileSize !== 0 && fileSize < MAX_FILE_SIZE;
