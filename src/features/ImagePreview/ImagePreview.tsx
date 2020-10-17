import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTest } from "./";
import { RootState } from "store";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: green;
  padding: 20px;
`;

const Input = styled.input`
  color: black;
`;

const Button = styled.button`
  color: gray;
`;

export const ImagePreview = () => {
  const dispatch = useDispatch();
  const test = useSelector((state: RootState) => state.imagePreview.test);
  const [textInput, setTextInput] = useState("");

  const handleClick = (): void => {
    dispatch(changeTest(textInput));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTextInput(event.target.value);
  };

  return (
    <Container>
      <Button data-testid="button" onClick={handleClick}>
        change test
      </Button>
      <Input data-testid="input" value={textInput} onChange={handleChange} />
      <div>ImagePreview Component</div>
      <div data-testid="div">{test}</div>
    </Container>
  );
};
