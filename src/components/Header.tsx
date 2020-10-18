import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: pink;
  padding: 20px;
`;

export const Header = () => {
  return (
    <Container>
      <div>Header Component</div>
    </Container>
  );
};
