import React from "react";
import { ImageSelector } from "../features";
import { render, screen } from "../utils/testHelpers";

describe("<ImageSelector />", () => {
  it("should render", () => {
    render(<ImageSelector />);

    const component = screen.getByTestId("ImageSelector-wrapper");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(render(<ImageSelector />).asFragment()).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/expect-expect
  it("should show validation error if selected file > 5Mb", () => {});

  it("should show validation error if selected file type is not png|jpg", () => {});

  it("should call stageFile with input.file info if a valid file is selected", () => {});
});

/*

**************************************************
Works OK BUT it's not usefull. Keep with paradigm of testing-library, just test as a user story
**************************************************
it("should match snapshot", () => {});

  test("should upload the file", () => {
    const file = new File(["hello"], "hello.png", { type: "image/png" });

    render(<input data-testid="element" type="file" />);

    const input = screen.getByTestId("element") as HTMLInputElement;

    user.upload(input, file);

    if (input.files) {
      expect(input.files[0]).toEqual(file);
    }

    expect(input.files).toHaveLength(1);
  });

*/
