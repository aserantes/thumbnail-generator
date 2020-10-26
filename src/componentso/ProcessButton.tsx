import React from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "../components";
import { getTheme } from "../store/selectors";
import { useSelector } from "react-redux";

interface ProcessButtonProps {
  onClick?: () => void;
}

export function ProcessButton(props: ProcessButtonProps) {
  const { onClick } = props;
  const theme = useSelector(getTheme);

  return (
    <Button buttonColor={theme.colors.primary} role="button" onClick={onClick}>
      <Icon className="fas fa-thumbs-up" iconBoxSize={44} iconSize={32} />
      <ButtonText>Process</ButtonText>
    </Button>
  );
}