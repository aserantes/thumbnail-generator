import React, { FC, ReactElement } from "react";
// import styled from "styled-components";
import { IconWrapper } from "./Common";

interface IconProps {
  iconBoxSize?: number;
  iconColor?: string;
  iconSize?: number;
  className: string;
  style?: "string";
  onClick?: () => void;
}

export function Icon(props: IconProps): ReactElement<FC> {
  const { className, iconBoxSize, iconColor, iconSize, onClick } = props;

  return (
    <>
      <IconWrapper
        iconBoxSize={iconBoxSize}
        iconColor={iconColor}
        iconSize={iconSize}
        onClick={onClick}
      >
        <i className={className} />
      </IconWrapper>
    </>
  );
}
