import React from "react";
import { App } from "App";
import { render, screen } from "Utils/testHelpers";

describe("<App />", () => {
  it("should render", () => {
    render(<App />);

    const component = screen.getByTestId("App-wrapper");

    expect(component).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    expect(render(<App />).asFragment()).toMatchSnapshot();
  });

  it("should show ImageSelector if no valid file is selected", () => {});

  it("should show ImagePreview if valid file is selected", () => {});

  it("should show Thumbails if fetch is fulfilled", () => {});

  /*    */
});

/*
https://redux.js.org/recipes/writing-tests
https://www.robinwieruch.de/react-testing-library
https://www.robinwieruch.de/react-connected-component-test
*/
