import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { ImagePreview, imagePreviewReducer, changeTest } from "./";
import { renderWithRedux, rootInitialState } from "../../utils/test-helpers";

describe("<ImagePreview />", () => {
  test("shows reduxStringInitialState", () => {
    renderWithRedux(<ImagePreview />);

    expect(screen.getByText("reduxStringInitialState")).toBeVisible();
  });

  test("calls changeTest on click", () => {
    const { mockStore } = renderWithRedux(<ImagePreview />);

    fireEvent.click(screen.getByText("change test"));

    expect(mockStore.getActions()).toEqual([
      { type: changeTest.type, payload: "" },
    ]);
  });
});

describe("ImagePreviewSlice", () => {
  test("changes test string", () => {
    expect(
      imagePreviewReducer(
        { ...rootInitialState.imagePreview, test: "" },
        changeTest("hola")
      )
    ).toEqual({ ...rootInitialState.imagePreview, test: "hola" });
  });
});
