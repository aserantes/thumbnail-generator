import React from "react";
import thumb120 from "../thumbnails/thumb-120x120.png";
import thumb160 from "../thumbnails/thumb-160x120.png";
import thumb400 from "../thumbnails/thumb-400x300.png";
import { ImageInfo, Thumbnail2, ThumbnailsWrapper } from "../components/Common";

export function Thumbnails() {
  return (
    <ThumbnailsWrapper data-testid="Thumbnails-wrapper">
      <ImageInfo>
        <a download href={thumb120}>
          <Thumbnail2
            alt="Image Preview"
            height="120px"
            src={`/thumbnails/thumb-120x120.png?t=${Date.now()}"`}
            width="120px"
          />
        </a>
      </ImageInfo>
      <ImageInfo>
        <a download href={thumb160}>
          <Thumbnail2
            alt="Image Preview"
            height="120px"
            src={`/thumbnails/thumb-160x120.png?t=${Date.now()}"`}
            width="160px"
          />
        </a>
      </ImageInfo>
      <ImageInfo>
        <a download href={thumb400}>
          <Thumbnail2
            alt="Image Preview"
            height="300px"
            src={`/thumbnails/thumb-400x300.png?t=${Date.now()}"`}
            width="400px"
          />
        </a>
      </ImageInfo>
    </ThumbnailsWrapper>
  );
}
