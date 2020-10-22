import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  name: string;
  size: number;
  ext: string;
  type: string;
  path: string;
  chunkPath: string;
}

export const initialState: InitialState = {
  name: "",
  size: 0,
  ext: "",
  type: "",
  path: "",
  chunkPath: "",
};

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
