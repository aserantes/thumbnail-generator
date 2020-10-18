import React from "react";
import { Provider } from "react-redux";
import { ImageSelector } from "features/ImageSelector";
import { ImagePreview } from "features/ImagePreview";
import { Thumbnails } from "features/Thumbnails";

import { store } from "store/index";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: gray;
  padding: 20p;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Container data-testid="App">
        <div>App Component</div>
        <ImagePreview />
        <ImageSelector />
        <Thumbnails />
      </Container>
    </Provider>
  );
};
