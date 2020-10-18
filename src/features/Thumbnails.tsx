import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: yellow;
  padding: 20px;
`;

export const Thumbnails = () => {
  return (
    <Container data-testid="Thumbnails">
      <div>Thumbnails Component</div>
    </Container>
  );
};
