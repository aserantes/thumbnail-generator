import React from "react";
import { Thumbnails } from "Features/Thumbnails";
import { render, screen } from "Utils/testHelpers";

describe("<Thumbnails>", () => {
  it("should render", () => {
    render(<Thumbnails />);

    const component = screen.getByTestId("Thumbnails-wrapper");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(render(<Thumbnails />).asFragment()).toMatchSnapshot();
  });
});
