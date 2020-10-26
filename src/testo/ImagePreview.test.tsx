import React from "react";
import { ImagePreview } from "../features";
import { renderWithRedux, screen } from "../helpers";

describe("<ImagePreview />", () => {
  it("should render", () => {
    renderWithRedux(<ImagePreview />);

    const component = screen.getByTestId("ImagePreview-wrapper");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(renderWithRedux(<ImagePreview />).asFragment()).toMatchSnapshot();
  });

  it("should show the image preview", () => {});

  it("should show the filename", () => {});

  it("should show the filesize", () => {});

  it("should show the filetype", () => {});

  it("should show a button with text 'Process'", () => {});

  it("should call 'processFile' with file info on 'Process' button click", () => {}); // In my case, 'processFile' will be a redux action creator which will dispatch an async thunked redux action, but I want this TDD approach test cases description to be as agnostic of implementation as possible

  it("should show a disabled button with text 'Processing...' after calling 'processFile'", () => {});

  it("should show error on status rejected", () => {});
});

/*  
  it("should match snapshot and div contain reduxStringInitialState", () => {
    const { asFragment } = renderWithRedux(<ImagePreview />);
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();

    expect(screen.getByText("reduxStringInitialState")).toBeInTheDocument();
  });

  it("REDUX:should call setFileToUploadData action on click //// UI:and change div value", () => {
    const { mockStore } = renderWithRedux(<ImagePreview />);

    fireEvent.click(screen.getByText("change test"));

    expect(mockStore.getActions()).toEqual([
      { type: setFileToUploadData.type, payload: "" },
    ]);

    // SEPARAR REDUX ACTION REDUCER TESTING FROM UI USER BEHAVIOUR
    expect(screen.getByText("reduxStringInitialState")).not.toBeInTheDocument();
  });

  it("should call setFileToUploadData on click", () => {
    const { mockStore } = renderWithRedux(<ImagePreview />);

    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "123" } });

    fireEvent.click(screen.getByTestId("button"));

    expect(mockStore.getActions()).toEqual([
      { type: setFileToUploadData.type, payload: "123" },
    ]);
  });

  test("fileToUploadReducer should change test value", () => {
    expect(
      fileToUploadReducer(
        { ...rootInitialState.imagePreview, test: "" },
        setFileToUploadData("hola")
      )
    ).toEqual({ ...rootInitialState.imagePreview, test: "hola" });
  });

*/
