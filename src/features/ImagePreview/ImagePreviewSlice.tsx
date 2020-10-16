import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  test: string;
}

interface InitialState {
  test: string;
}

export const initialState: InitialState = {
  test: "reduxStringInitialState",
};

export const slice = createSlice({
  name: "imagePreview",
  initialState,
  reducers: {
    changeTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { changeTest } = slice.actions;

export const imagePreviewReducer = slice.reducer;
