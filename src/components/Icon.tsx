import React from "react";
// import styled from "styled-components";
import { IconWrapper } from "./Common";

interface IconProps {
  iconBoxSize?: number;
  iconColor?: string;
  iconSize?: number;
  className: string;
}

export function Icon(props: IconProps) {
  const { className, iconBoxSize, iconColor, iconSize } = props;

  return (
    <>
      <IconWrapper
        iconBoxSize={iconBoxSize}
        iconColor={iconColor}
        iconSize={iconSize}
      >
        <i className={className} />
      </IconWrapper>
    </>
  );
}
