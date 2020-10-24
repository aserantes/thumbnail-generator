import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: brown;
`;

export function Notification() {
  return (
    <Container>
      <div>Notification Component</div>
    </Container>
  );
}
