import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: blue;
  padding: 20px;
`;

export const Button = () => {
  return (
    <Container>
      <div>Button Component</div>
    </Container>
  );
};
