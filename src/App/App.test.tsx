import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders component name", () => {
  render(<App />);
  const componentName = screen.getByText("App Component");

  expect(componentName).toBeInTheDocument();
});
