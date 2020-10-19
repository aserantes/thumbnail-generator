import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  background-color: yellow;
  padding: 20px;
`;

export const Thumbnails = () => {
  return (
    <Container data-testid="Thumbnails-wrapper">
      <div>Thumbnails Component</div>
    </Container>
  );
};
