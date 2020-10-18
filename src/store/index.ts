import { configureStore } from "@reduxjs/toolkit";
import { Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { imagePreviewReducer as imagePreview } from "store/ImagePreviewSlice";

export const rootReducer = combineReducers({
  imagePreview,
});

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type AppDispatch = typeof store.dispatch;
