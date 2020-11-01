import { createGlobalStyle, css } from "styled-components";

export const darkTheme = {
  colors: {
    text: "#fff",
    highlight: "#fb4", // hover effects
    primary: "#f80", // main cta. cancel is same color but outlined, no fill
    secondary: "#08f", // secondary cta.
    foreground: "#bbb", // border color and such
    neutral: "#888", // cancel
    background: "#444", // app background color}
  },
};

/*
  The hook should be at App, and send the resulting theme as prop to features.
  Then on each feature, deconstruct the theme prop to make it available for components
  (send as prop also, just the specific attribute)
*/

export const lightTheme = {
  colors: {
    text: "#000",
    highlight: "#4bf",
    primary: "#08f",
    secondary: "#f80",
    foreground: "#444",
    neutral: "#888",
    background: "#bbb",
  },
};

export type ThemeType = typeof lightTheme;

/*
All these following attributes will be determined in the hook
const constants = {
// non-responsive attributes
};
const mobileAttributes = {
// attributes specific for mobile view ( ~ 360 | < 480 )
};
const tabletAttributes = {
// attributes specific for mobile view ( > 480 | < 1024 )
};
const desktopAttributes = {
// attributes specific for mobile view ( > 1024 )
};
*/

export const common = css`
  html,
  body {
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding: 0;
    margin: 0;
    background: #888;
    box-sizing: border-box;
  }
  #root {
    height: 100vh;
    justify-content: center;
  }
  div {
    display: flex;
    box-sizing: border-box;
  }
`;

export const normalize = css`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;

const baseCss = css`
  ${normalize};
  ${common};
  font-size: 50px;
`;

export const GlobalStyle = createGlobalStyle`${baseCss}`;
