import React, { useEffect } from "react";
import {
  BrowseButton,
  ButtonRow,
  CameraButton,
  DropZone,
  ImageSelectorWrapper,
} from "components";
import { getFileInfo } from "utils/fileHelpers";
import { selectors } from "store";
import { setFileToUploadData } from "store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFileTypeAnalizer } from "hooks/useFileTypeAnalizer";

export function ImageSelector() {
  const chunkPath = useSelector(selectors.getChunkPath);
  const [result] = useFileTypeAnalizer(chunkPath);
  const dispatch = useDispatch();
  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    const file = event.dataTransfer.files && event.dataTransfer.files[0];
    const fileInfo = getFileInfo(file);

    fileInfo && dispatch(setFileToUploadData(fileInfo));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files && event.target.files[0];
    const fileInfo = getFileInfo(file);

    fileInfo && dispatch(setFileToUploadData(fileInfo));
  };

  useEffect(() => {
    if (result.ext !== "") {
      dispatch(
        setFileToUploadData({
          type: result.ext,
        })
      );
    }
  }, [result, dispatch]);

  return (
    <ImageSelectorWrapper data-testid="ImageSelector-wrapper">
      <DropZone onFileDrop={handleDrop} />
      <ButtonRow>
        <BrowseButton onFileChange={handleChange} />
        <CameraButton onFileChange={handleChange} />
      </ButtonRow>
    </ImageSelectorWrapper>
  );
}
