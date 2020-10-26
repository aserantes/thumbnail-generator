import React, { useRef } from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "../components";
import { getTheme } from "../store/selectors";
import { useSelector } from "react-redux";

interface CameraButtonProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CameraButton(props: CameraButtonProps) {
  const { onFileChange } = props;
  const theme = useSelector(getTheme);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  return (
    <Button
      buttonColor={theme.colors.primary}
      role="button"
      onClick={handleClick}
    >
      <Icon className="fas fa-camera" iconBoxSize={44} iconSize={32} />
      <ButtonText>Camera</ButtonText>
      <input
        hidden
        accept="image/*"
        capture="user"
        data-testid="file-input"
        id="inputFile"
        ref={hiddenFileInput}
        type="file"
        onChange={onFileChange}
      />
    </Button>
  );
}
