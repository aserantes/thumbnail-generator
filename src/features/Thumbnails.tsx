import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: yellow;
`;

export function Thumbnails() {
  return (
    <Container data-testid="Thumbnails-wrapper">
      <div>Thumbnails Component</div>
    </Container>
  );
}
