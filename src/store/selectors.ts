import { DefaultRootState } from "./";
import { checkSizeValidity, checkTypeValidity } from "Utils/fileHelpers";
import { createSelector } from "@reduxjs/toolkit";

export const getName = (state: DefaultRootState) => {
  return state.fileToUpload.name;
};

export const getSize = (state: DefaultRootState) => {
  return state.fileToUpload.size;
};

export const getExt = (state: DefaultRootState) => {
  return state.fileToUpload.ext;
};

export const getType = (state: DefaultRootState) => {
  return state.fileToUpload.type;
};

export const getPath = (state: DefaultRootState) => {
  return state.fileToUpload.path;
};

export const getChunkPath = (state: DefaultRootState) => {
  return state.fileToUpload.chunkPath;
};

export const getTypeIsValid = createSelector(getType, (type) => {
  return checkTypeValidity(type);
});

export const getSizeIsValid = createSelector(getSize, (size) => {
  return checkSizeValidity(size);
});

export const getFileIsValid = createSelector(
  getTypeIsValid,
  getSizeIsValid,
  (typeIsValid, sizeIsValid) => {
    return typeIsValid && sizeIsValid;
  }
);
