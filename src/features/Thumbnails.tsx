import React from "react";
import {
  ImageInfo,
  ResultsThumbnail,
  ThumbnailsWrapper,
} from "../components/Common";
import { getThumbSizes } from "../store/selectors";
import { useSelector } from "react-redux";

export function Thumbnails() {
  const thumbSizes = useSelector(getThumbSizes);

  const thumbnails = thumbSizes.map((thumbSize) => {
    const { h, w } = thumbSize;

    return (
      <a
        download
        href={`${process.env.PUBLIC_URL}/thumbnails/thumb-${w}x${h}.png`}
        key={h + w}
      >
        <ImageInfo>
          <ResultsThumbnail
            alt="image preview"
            height={`${h}px`}
            src={`${
              process.env.PUBLIC_URL
            }/thumbnails/thumb-${w}x${h}.png?t=${Date.now()}`}
            width={`${w}px`}
          />
        </ImageInfo>
      </a>
    );
  });

  return (
    <ThumbnailsWrapper data-testid="Thumbnails-wrapper">
      {thumbnails}
    </ThumbnailsWrapper>
  );
}
