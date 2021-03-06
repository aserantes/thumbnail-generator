import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
  size: 0,
  ext: "",
  type: "",
  path: "",
  chunkPath: "",
  thumbSizes: [
    { w: 120, h: 120 },
    { w: 160, h: 120 },
    { w: 400, h: 300 },
  ],
  imageFitMode: "cover",
  isFirstLoad: true,
  bypassValidation: false,
  userWantsToUpload: false,
  imagesReadyOnServer: false,
};

export const slice = createSlice({
  name: "fileToUpload",
  initialState,
  reducers: {
    setFileToUploadData: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setFileToUploadData } = slice.actions;

export const fileToUploadReducer = slice.reducer;
