import React from "react";
import { render } from "@testing-library/react";
import { App } from "./";

export {};

describe("<App />", () => {
  it("should show ImageSelector if no valid file is selected", () => {});

  it("should show ImagePreview if valid file is selected", () => {});

  it("should show Thumbails if fetch is fulfilled", () => {});

  it("renders", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});

/*
https://redux.js.org/recipes/writing-tests
https://www.robinwieruch.de/react-testing-library
https://www.robinwieruch.de/react-connected-component-test

import { render, cleanup } from "@testing-library/react";
import { App } from "./App";

afterEach(cleanup);

describe("<App/>", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<App />);
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});


*/
