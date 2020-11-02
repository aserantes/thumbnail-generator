import React from "react";
import { Thumbnails } from "../features";
import { renderWithRedux, screen } from "../helpers";

describe("<Thumbnails>", () => {
  Date.now = jest.fn(() => 1482363367071);

  it("should render", () => {
    renderWithRedux(<Thumbnails />);

    const component = screen.getByTestId("Thumbnails-wrapper");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(renderWithRedux(<Thumbnails />).asFragment()).toMatchSnapshot();
  });
});
