import React from "react";
import { ComponentTitle } from "Components";
import {
  ImageInfo,
  ImageInfoTextBlock,
  ImageInfoTextItem,
  ImagePreviewWrapper,
  Thumbnail,
} from "Components/Common";
import { selectors } from "Store";
import { useSelector } from "react-redux";

export function ImagePreview() {
  const name = useSelector(selectors.getName);
  const type = useSelector(selectors.getType);
  const size = useSelector(selectors.getSize) as number;
  const path = useSelector(selectors.getPath);
  const sizeText = `${parseFloat((size / 1024).toString()).toFixed(2)} Kb`;

  return (
    <ImagePreviewWrapper data-testid="ImagePreview-wrapper">
      <ComponentTitle title="Image Preview" />
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
