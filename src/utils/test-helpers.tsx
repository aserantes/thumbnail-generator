import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// TODO import the initial state of all slices, not just this example:
import { initialState as imagePreviewInitialState } from "store/ImagePreviewSlice";
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

// https://png-pixel.com/
export const greenPixelBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==";

export const redPixelBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

/* export default function({ name = 'file.txt', size = 1024, type = 'plain/txt', lastModified = new Date() }) {
    const blob = new Blob(['a'.repeat(size)], { type });

    blob.lastModifiedDate = lastModified;

    return new File([blob], name);
}

const testFile = MockFile({
     type: 'image/png',
     size: 50000,
}); */

export * from "@testing-library/react";
