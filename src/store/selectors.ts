import { DefaultRootState } from "./";
import { checkSizeValidity, checkTypeValidity } from "../helpers";
import { createSelector } from "@reduxjs/toolkit";

export const getState = (state: DefaultRootState) => state;

export const getTheme = (state: DefaultRootState) => state.theme;

export const getName = (state: DefaultRootState) => state.fileToUpload.name;

export const getSize = (state: DefaultRootState) => state.fileToUpload.size;

export const getExt = (state: DefaultRootState) => state.fileToUpload.ext;

export const getType = (state: DefaultRootState) => state.fileToUpload.type;

export const getPath = (state: DefaultRootState) => state.fileToUpload.path;

export const getImagesReadyOnServer = (state: DefaultRootState) =>
  state.fileToUpload.imagesReadyOnServer;

export const getUserWantsToUpload = (state: DefaultRootState) =>
  state.fileToUpload.userWantsToUpload;

export const getIsFirstLoad = (state: DefaultRootState) =>
  state.fileToUpload.isFirstLoad;

export const getChunkPath = (state: DefaultRootState) =>
  state.fileToUpload.chunkPath;

export const getBypassValidation = (state: DefaultRootState) =>
  state.fileToUpload.bypassValidation;

export const getImageFitMode = (state: DefaultRootState) =>
  state.fileToUpload.imageFitMode;

export const getThumbSizes = (state: DefaultRootState) =>
  state.fileToUpload.thumbSizes;

export const getTypeIsValid = createSelector(getType, (type) =>
  checkTypeValidity(type)
);

export const getSizeIsValid = createSelector(getSize, (size) =>
  checkSizeValidity(size)
);

export const getFileIsValid = createSelector(
  getTypeIsValid,
  getSizeIsValid,
  getBypassValidation,
  getPath,
  (typeIsValid, sizeIsValid, bypassValidation, path) =>
    path && ((typeIsValid && sizeIsValid) || bypassValidation)
);

export const getFileIsReadyToUpload = createSelector(
  getUserWantsToUpload,
  getFileIsValid,
  (userWantsToUpload, fileIsValid) => userWantsToUpload && fileIsValid
);
