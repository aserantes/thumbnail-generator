import React, { useState } from "react";
import { DropZoneWrapper, ErrorText, SecondaryText } from "components/Common";
import { Icon } from "components";
import { MAX_FILE_SIZE_ERROR, VALID_FILE_TYPES_ERROR } from "const";
import { selectors } from "store";
import { useSelector } from "react-redux";

interface DropZoneProps {
  onFileDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

export function DropZone(props: DropZoneProps) {
  const [isInDropZone, setIsInDropZone] = useState(false);
  const theme = useSelector(selectors.getTheme);
  const isFirstLoad = useSelector(selectors.getIsFirstLoad);
  const sizeIsValid = useSelector(selectors.getSizeIsValid);
  const typeIsValid = useSelector(selectors.getTypeIsValid);
  const sizeErrorText = !sizeIsValid && MAX_FILE_SIZE_ERROR;
  const typeErrorText = !typeIsValid && VALID_FILE_TYPES_ERROR;
  const { onFileDrop } = props;
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsInDropZone(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsInDropZone(false);
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    !isInDropZone && setIsInDropZone(true);
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsInDropZone(false);
    onFileDrop(event);
  };

  return (
    <DropZoneWrapper
      data-testid="file-drop-zone"
      isInDropZone={isInDropZone}
      primaryColor={theme.colors.primary}
      secondaryColor={theme.colors.secondary}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isInDropZone ? (
        <div style={{ pointerEvents: "none" }}>
          <Icon
            className="fas fa-angle-double-down"
            iconBoxSize={128}
            iconSize={128}
          />
        </div>
      ) : (
        <>
          <ErrorText hidden={!sizeErrorText || isFirstLoad}>
            {sizeErrorText}
          </ErrorText>
          <ErrorText hidden={!typeErrorText || isFirstLoad}>
            {typeErrorText}
          </ErrorText>
          <SecondaryText>Drag&amp;Drop your image here</SecondaryText>
          <SecondaryText>Or...</SecondaryText>
        </>
      )}
    </DropZoneWrapper>
  );
}
