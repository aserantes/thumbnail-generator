import { MAX_FILE_SIZE, VALID_FILE_TYPES } from "const";

export const checkTypeValidity = (fileType: string): boolean =>
  fileType !== "" &&
  VALID_FILE_TYPES.some((validFileType) => validFileType.includes(fileType));

export const checkSizeValidity = (fileSize: number): boolean =>
  fileSize !== 0 && fileSize < MAX_FILE_SIZE;

interface FileInfo {
  name: string;
  size: number;
  ext: string;
  path: string;
  chunkPath: string;
  isFirstLoad: boolean;
  type: string;
}

export const getFileInfo = (file: File | null): FileInfo | null => {
  if (file) {
    const { name, size, type: ext } = file;
    const path = URL.createObjectURL(file);
    const chunkPath = URL.createObjectURL(file.slice(0, 32));

    return {
      name,
      size,
      ext,
      path,
      chunkPath,
      type: "",
      isFirstLoad: false,
    };
  }

  return null;
};
