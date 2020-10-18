import React from "react";
import { render, screen } from "@testing-library/react";
import { Thumbnails } from "features/Thumbnails";

test("renders component name", () => {
  render(<Thumbnails />);
  const componentName = screen.getByText("Thumbnails Component");

  expect(componentName).toBeInTheDocument();
});
