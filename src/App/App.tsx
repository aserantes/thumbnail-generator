import React from "react";
import { Provider } from "react-redux";
import { ImagePreview } from "features/ImagePreview";
import { ImageSelector } from "features/ImageSelector";
import { Thumbnails } from "features/Thumbnails";

import store from "../store";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: gray;
  padding: 20p;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <div>App Component</div>
        <ImagePreview />
        <ImageSelector />
        <Thumbnails />
      </Container>
    </Provider>
  );
};
