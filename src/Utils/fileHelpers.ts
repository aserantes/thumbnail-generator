import { MAX_FILE_SIZE, VALID_FILE_TYPES } from "Constants";

export const checkTypeValidity = (fileType: string): boolean => {
  console.log(`checkTypeValidityCalled with fileType: [${fileType}]`);

  return (
    fileType !== "" &&
    VALID_FILE_TYPES.some((validFileType) => {
      console.log(
        `iterating valid types [${VALID_FILE_TYPES}]against [${fileType}]`
      );
      console.log(
        `validFileType [${fileType}] includes [${validFileType}?] [${fileType.includes(
          validFileType
        )}]`
      );

      return fileType.includes(validFileType);
    })
  );
};

export const checkSizeValidity = (fileSize: number): boolean => {
  return fileSize !== 0 && fileSize < MAX_FILE_SIZE;
};
