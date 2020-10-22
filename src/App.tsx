import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { Header } from "Components/Header";
import { ImagePreview } from "Features/ImagePreview";
import { ImageSelector } from "Features/ImageSelector";
import { Provider } from "react-redux";
import { Thumbnails } from "Features/Thumbnails";
import { common, normalize } from "Components/Common";
import { store } from "Store/index";

const Container = styled.section`
  background-color: gray;
  flex-direction: column;
`;

export function App() {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          ${normalize};
          ${common};
          font-size: 50px;
        `}
      />
      <Container data-testid="App-wrapper">
        <div>App Component</div>
        <Header />
        <ImageSelector />
        <ImagePreview />
        <Thumbnails />
      </Container>
    </Provider>
  );
}
