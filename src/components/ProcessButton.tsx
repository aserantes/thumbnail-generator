import React from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "../components";
import { getTheme } from "../store/selectors";
import { useSelector } from "react-redux";

interface ProcessButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export function ProcessButton(props: ProcessButtonProps) {
  const { isLoading, onClick } = props;
  const theme = useSelector(getTheme);

  return (
    <>
      <Button
        buttonColor={!isLoading ? theme.colors.primary : theme.colors.secondary}
        isLoading={!!isLoading}
        role="button"
        onClick={onClick}
      >
        <Icon className="fas fa-thumbs-up" iconBoxSize={44} iconSize={32} />
        <ButtonText>{!isLoading ? "Process" : "Processing"}</ButtonText>
      </Button>
    </>
  );
}
