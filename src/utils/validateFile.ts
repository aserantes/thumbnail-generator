import {
  MAX_FILE_SIZE,
  MAX_FILE_SIZE_ERROR,
  VALID_FILE_TYPES,
  VALID_FILE_TYPES_ERROR,
} from "Constants";

interface FileInfo {
  size: number;
  type: string;
}

export const validateFile = (fileInfo: FileInfo) => {
  const { size, type } = fileInfo;
  let isValidType = false;
  const errors: string[] = [];

  VALID_FILE_TYPES.forEach((validType) => {
    if (!isValidType) {
      if (validType.includes(type)) {
        isValidType = true;
      }
    }
  });

  const lala = "lala".includes("la");

  console.log(lala);

  if (size > MAX_FILE_SIZE) errors.push(MAX_FILE_SIZE_ERROR);

  if (VALID_FILE_TYPES.includes(type)) errors.push(VALID_FILE_TYPES_ERROR);

  return errors;
};
