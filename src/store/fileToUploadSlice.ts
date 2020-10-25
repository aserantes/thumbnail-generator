import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
  size: 0,
  ext: "",
  type: "",
  path: "",
  chunkPath: "",
  isFirstLoad: true,
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
