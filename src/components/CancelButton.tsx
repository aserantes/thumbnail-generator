import React from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "Components";
import { selectors } from "Store";
import { useSelector } from "react-redux";

interface CancelButtonProps {
  onClick?: () => void;
}

export function CancelButton(props: CancelButtonProps) {
  const { onClick } = props;
  const theme = useSelector(selectors.getTheme);

  return (
    <Button buttonColor={theme.colors.primary} role="button" onClick={onClick}>
      <Icon className="fas fa-window-close" iconBoxSize={44} iconSize={32} />
      <ButtonText>Cancel</ButtonText>
    </Button>
  );
}
