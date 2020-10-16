import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// TODO import the initial state of all slices, not just this example:
import { initialState as imagePreviewInitialState } from "features/ImagePreview";
import { RootState } from "store";

export const rootInitialState = {
  imagePreview: imagePreviewInitialState,
};

const mockStore = configureStore([thunk]);

export const renderWithRedux = (
  ui: JSX.Element,
  initialState: RootState = rootInitialState
) => {
  const store = mockStore(initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    mockStore: store,
  };
};
