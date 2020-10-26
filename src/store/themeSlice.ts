import { createSlice } from "@reduxjs/toolkit";
import { /* darkTheme,*/ lightTheme } from "../styles";

export const initialState = lightTheme;

export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setTheme } = slice.actions;

export const themeReducer = slice.reducer;
