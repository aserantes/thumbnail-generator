import React from "react";
import { ComponentTitle } from "Components";
import {
  ImageInfo,
  ImageInfoTextBlock,
  ImagePreviewWrapper,
  SmallImage,
  Text,
} from "Components/Common";
import { selectors } from "Store";
import { useSelector } from "react-redux";

export function ImagePreview() {
  const name = useSelector(selectors.getName);
  const type = useSelector(selectors.getType);
  const size = `${useSelector(selectors.getSize) / 1024 / 1024} Mb.`;
  const path = useSelector(selectors.getPath);

  return (
    <ImagePreviewWrapper data-testid="ImagePreview-wrapper">
      <ComponentTitle title="Image Preview" />
      <ImageInfo>
        <ImageInfoTextBlock>
          <Text>
            <span>Name: {name}</span>
            <span>Type: {type}</span>
            <span>Size: {size}</span>
          </Text>
        </ImageInfoTextBlock>
        <SmallImage alt="Image Preview" src={path} />
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
