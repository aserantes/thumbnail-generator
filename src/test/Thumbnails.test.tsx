import React from "react";
import { Thumbnails } from "../features";
import { render, screen } from "../helpers";

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
