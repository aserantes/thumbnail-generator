import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  name?: string;
  size?: number;
  type?: string;
  image?: File;
}

export const initialState: InitialState = {};

export const slice = createSlice({
  name: "fileToUpload",
  initialState,
  reducers: {
    setFileToUploadData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFileToUploadData } = slice.actions;

export const fileToUploadReducer = slice.reducer;
