import React, { useEffect } from "react";
import {
  ButtonRow,
  ErrorText,
  ImageInfo,
  ImageInfoTextBlock,
  ImageInfoTextItem,
  ImagePreviewWrapper,
  PreviewThumbnail,
} from "../components/Common";
import { ProcessButton, RestartButton } from "../components";
import { getName, getPath, getSize, getType } from "../store/selectors";
import { setFileToUploadData } from "../store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpload } from "../hooks/useUpload";

export function ImagePreview() {
  const [result, isLoading, errorMsg] = useUpload();
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const type = useSelector(getType);
  const size = useSelector(getSize);
  const path = useSelector(getPath);
  const sizeText = `${(size / 1024).toFixed(2)} Kb`;

  const handleClick = () => {
    if (!isLoading) dispatch(setFileToUploadData({ userWantsToUpload: true }));
  };

  useEffect(() => {
    if (result) {
      dispatch(setFileToUploadData({ imagesReadyOnServer: true }));
    }
  }, [result, dispatch]);

  return (
    <ImagePreviewWrapper data-testid="ImagePreview-wrapper">
      <ImageInfo>
        <PreviewThumbnail alt="Image Preview" src={path} />
        <ImageInfoTextBlock>
          <ImageInfoTextItem>
            <strong>Name:&nbsp;</strong> {name}
          </ImageInfoTextItem>
          <ImageInfoTextItem>
            <strong>Type:&nbsp;</strong> {type}
          </ImageInfoTextItem>
          <ImageInfoTextItem>
            <strong>Size:&nbsp;</strong> {sizeText}
          </ImageInfoTextItem>
        </ImageInfoTextBlock>
      </ImageInfo>
      <ErrorText hidden={!errorMsg}>{errorMsg}</ErrorText>
      <ButtonRow>
        <RestartButton />
        <ProcessButton isLoading={isLoading as boolean} onClick={handleClick} />
      </ButtonRow>
    </ImagePreviewWrapper>
  );
}
