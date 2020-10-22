import { Action, combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { fileToUploadReducer as fileToUpload } from "./fileToUploadSlice";

export const rootReducer = combineReducers({
  fileToUpload,
});

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
});

export type DefaultRootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<
  void,
  DefaultRootState,
  null,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export * as selectors from "./selectors";
