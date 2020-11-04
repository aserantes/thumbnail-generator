import React from "react";
import { ImageInfo, Thumbnail2, ThumbnailsWrapper } from "../components/Common";

export function Thumbnails() {
  return (
    <ThumbnailsWrapper data-testid="Thumbnails-wrapper">
      <a
        download
        href={`${process.env.PUBLIC_URL}/thumbnails/thumb-120x120.png`}
      >
        <ImageInfo>
          <Thumbnail2
            alt="Image Preview"
            height="120px"
            src={`${
              process.env.PUBLIC_URL
            }/thumbnails/thumb-120x120.png?t=${Date.now()}`}
            width="120px"
          />
        </ImageInfo>
      </a>
      <a
        download
        href={`${process.env.PUBLIC_URL}/thumbnails/thumb-160x120.png`}
      >
        <ImageInfo>
          <Thumbnail2
            alt="Image Preview"
            height="120px"
            src={`${
              process.env.PUBLIC_URL
            }/thumbnails/thumb-160x120.png?t=${Date.now()}`}
            width="160px"
          />
        </ImageInfo>
      </a>
      <a
        download
        href={`${process.env.PUBLIC_URL}/thumbnails/thumb-400x300.png`}
      >
        <ImageInfo>
          <Thumbnail2
            alt="Image Preview"
            height="300px"
            src={`${
              process.env.PUBLIC_URL
            }/thumbnails/thumb-400x300.png?t=${Date.now()}`}
            width="400px"
          />
        </ImageInfo>
      </a>
    </ThumbnailsWrapper>
  );
}
