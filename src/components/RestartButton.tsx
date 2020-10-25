import React from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "Components";
import { initialState, setFileToUploadData } from "Store/fileToUploadSlice";
import { selectors } from "Store";
import { useDispatch, useSelector } from "react-redux";

export function RestartButton() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFileToUploadData(initialState));
  };
  const theme = useSelector(selectors.getTheme);

  return (
    <Button
      buttonColor={theme.colors.primary}
      role="button"
      onClick={handleClick}
    >
      <Icon className="fas fa-step-backward" iconBoxSize={44} iconSize={32} />
      <ButtonText>Restart</ButtonText>
    </Button>
  );
}
