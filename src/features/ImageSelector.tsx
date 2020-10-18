import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: orange;
  padding: 20px;
`;

export const ImageSelector = () => {
  return (
    <Container data-testid="ImageSelector">
      <div>ImageSelector Component</div>
    </Container>
  );
};
