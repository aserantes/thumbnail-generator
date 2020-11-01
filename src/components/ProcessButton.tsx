import React from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "../components";
import { getImagesReadyOnServer, getTheme } from "../store/selectors";
import { setFileToUploadData } from "../store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpload } from "../hooks/useUpload";

export function ProcessButton() {
  const ready = useSelector(getImagesReadyOnServer);
  const [result, isLoading, errorMsg] = useUpload();
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  const handleClick = () => {
    if (!isLoading) dispatch(setFileToUploadData({ userWantsToUpload: true }));
  };

  return (
    <>
      <span>{`ready: ${ready ? "yes" : "no"}`}</span>
      <span>{`loading: ${isLoading ? "yes" : "no"}`}</span>
      <span>{`result: ${result ? "yes" : "no"}`}</span>
      <span>{`errorMsg: ${errorMsg ? "yes" : "no"}`}</span>
      <Button
        buttonColor={theme.colors.primary}
        isLoading={!!isLoading}
        role="button"
        onClick={handleClick}
      >
        <Icon className="fas fa-thumbs-up" iconBoxSize={44} iconSize={32} />
        <ButtonText>
          {result}
          Process
        </ButtonText>
      </Button>
    </>
  );
}
