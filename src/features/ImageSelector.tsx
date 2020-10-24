import React, { useEffect } from "react";
import {
  BrowseButton,
  ButtonRow,
  CameraButton,
  DropZone,
  ImageSelectorWrapper,
} from "Components";
import { selectors } from "Store";
import { setFileToUploadData } from "Store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFileTypeAnalizer } from "Hooks/useFileTypeAnalizer";

export function ImageSelector() {
  const chunkPath = useSelector(selectors.getChunkPath);
  const [result] = useFileTypeAnalizer(chunkPath);
  const dispatch = useDispatch();
  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    console.log(event);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileDomPath = URL.createObjectURL(file);
      const fileChunkDomPath = URL.createObjectURL(file.slice(0, 32));

      dispatch(
        setFileToUploadData({
          name: file.name,
          size: file.size,
          ext: file.type,
          path: fileDomPath,
          chunkPath: fileChunkDomPath,
          type: "",
        })
      );
    }
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
