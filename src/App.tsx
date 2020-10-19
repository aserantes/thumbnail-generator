import React from "react";
import styled from "@emotion/styled";
import { Header } from "Components/Header";
import { ImagePreview } from "Features/ImagePreview";
import { ImageSelector } from "Features/ImageSelector";
import { Provider } from "react-redux";
import { Thumbnails } from "Features/Thumbnails";
import { store } from "Store/index";

const Container = styled.section`
  background-color: gray;
  padding: 20p;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Container data-testid="App-wrapper">
        <Header />
        <div>App Component</div>
        <ImagePreview />
        <ImageSelector />
        <Thumbnails />
      </Container>
    </Provider>
  );
};
