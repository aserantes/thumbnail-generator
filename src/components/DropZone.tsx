import React from "react";
import { DropZoneWrapper, SecondaryText } from "Components/Common";
import { selectors } from "Store";
import { useSelector } from "react-redux";

interface DropZoneProps {
  onFileDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

export function DropZone(props: DropZoneProps) {
  const theme = useSelector(selectors.getTheme);
  const { onFileDrop } = props;

  return (
    <DropZoneWrapper
      data-testid="file-drop-zone"
      primaryColor={theme.colors.primary}
      onDrop={onFileDrop}
    >
      <SecondaryText>Drag&amp;Drop your image here</SecondaryText>
      <SecondaryText>Or...</SecondaryText>
    </DropZoneWrapper>
  );
}
