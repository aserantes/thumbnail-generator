import React, { useRef } from "react";
import { Button, ButtonText } from "./Common";
import { Icon } from "Components";
import { VALID_FILE_TYPES } from "Constants";
import { selectors } from "Store";
import { useSelector } from "react-redux";

interface BrowseButtonProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BrowseButton(props: BrowseButtonProps) {
  const { onFileChange } = props;
  const theme = useSelector(selectors.getTheme);
  const validFileTypes = VALID_FILE_TYPES.join(",");
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
      <Icon className="fas fa-folder-open" iconBoxSize={44} iconSize={32} />
      <ButtonText>Browse</ButtonText>
      <input
        hidden
        accept={validFileTypes}
        data-testid="file-input"
        id="inputFile"
        ref={hiddenFileInput}
        type="file"
        onChange={onFileChange}
      />
    </Button>
  );
}
