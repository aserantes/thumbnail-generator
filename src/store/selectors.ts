import { DefaultRootState } from "./";
import { checkSizeValidity, checkTypeValidity } from "Utils/fileHelpers";
import { createSelector } from "@reduxjs/toolkit";

export const getTheme = (state: DefaultRootState) => state.theme;

export const getName = (state: DefaultRootState) => state.fileToUpload.name;

export const getSize = (state: DefaultRootState) => state.fileToUpload.size;

export const getExt = (state: DefaultRootState) => state.fileToUpload.ext;

export const getType = (state: DefaultRootState) => state.fileToUpload.type;

export const getPath = (state: DefaultRootState) => state.fileToUpload.path;

export const getChunkPath = (state: DefaultRootState) =>
  state.fileToUpload.chunkPath;

export const getTypeIsValid = createSelector(getType, (type) =>
  checkTypeValidity(type)
);

export const getSizeIsValid = createSelector(getSize, (size) =>
  checkSizeValidity(size)
);

export const getFileIsValid = createSelector(
  getTypeIsValid,
  getSizeIsValid,
  (typeIsValid, sizeIsValid) => typeIsValid && sizeIsValid
);
