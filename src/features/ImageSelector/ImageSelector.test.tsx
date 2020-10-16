import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageSelector } from "./";

test("renders component name", () => {
  render(<ImageSelector />);
  const componentName = screen.getByText("ImageSelector Component");

  expect(componentName).toBeInTheDocument();
});
