import React from "react";
import { render, screen } from "utils/test-helpers";
import { Thumbnails } from "features/Thumbnails";

describe("<Thumbnails>", () => {
  it("should render", () => {
    render(<Thumbnails />);
    const component = screen.getByTestId("Thumbnails");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(render(<Thumbnails />).asFragment()).toMatchSnapshot();
  });
});
