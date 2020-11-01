import React from "react";
import {
  ButtonRow,
  ImageInfo,
  ImageInfoTextBlock,
  ImageInfoTextItem,
  ImagePreviewWrapper,
  Thumbnail,
} from "../components/Common";
import { ProcessButton, RestartButton } from "../components";
import { getName, getPath, getSize, getType } from "../store/selectors";
import { useSelector } from "react-redux";

export function ImagePreview() {
  const name = useSelector(getName);
  const type = useSelector(getType);
  const size = useSelector(getSize);
  const path = useSelector(getPath);
  const sizeText = `${(size / 1024).toFixed(2)} Kb`;

  return (
    <ImagePreviewWrapper data-testid="ImagePreview-wrapper">
      <ImageInfo>
        <Thumbnail alt="Image Preview" src={path} />
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
      <ButtonRow>
        <RestartButton />
        <ProcessButton />
      </ButtonRow>
    </ImagePreviewWrapper>
  );
}
/*
const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("file", file);

  // Pass a setUploadPercentage as callback here
  putData(formData, { onUploadProgress: setUploadPercentage )
    .then((response) => { 
      console.log(response);
    });
};
export function putData(formData, { onUploadProgress }) {
  return axios.put('/update', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress : (progressEvent) => {
      const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      // Update state here
      onUploadProgress(progress);
    },
  });
}

*/
