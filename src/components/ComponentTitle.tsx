import React from "react";
import { ComponentTitleWrapper, Title } from "Components/Common";
import { Icon } from "Components";
import { initialState, setFileToUploadData } from "Store/fileToUploadSlice";
import { useDispatch } from "react-redux";

interface ComponentTitleProps {
  title: string;
}

export function ComponentTitle(props: ComponentTitleProps) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFileToUploadData(initialState));
  };
  const { title } = props;

  return (
    <ComponentTitleWrapper>
      <Icon
        className="fas fa-step-backward"
        iconBoxSize={44}
        iconSize={32}
        onClick={handleClick}
      />
      <Title>{title}</Title>
      <div style={{ width: "32px" }} />
    </ComponentTitleWrapper>
  );
}
