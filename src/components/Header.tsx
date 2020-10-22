import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: pink;
`;

export function Header() {
  return (
    <Container>
      <div>Header Component</div>
    </Container>
  );
}
