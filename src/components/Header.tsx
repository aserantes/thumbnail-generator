import React from "react";
// import styled from "styled-components";
import { AppTitle, HeaderWrapper, Icon } from "Components";
import { selectors } from "Store";
import { useSelector } from "react-redux";

export function Header() {
  const theme = useSelector(selectors.getTheme);

  return (
    <HeaderWrapper>
      <AppTitle
        fontHoverColor={theme.colors.primary}
        hiShadowColor={theme.colors.background}
        loShadowColor={theme.colors.foreground}
      >
        Thumbs App
      </AppTitle>
      <Icon className="fab fa-github" iconColor="#ccc" iconSize={48} />
    </HeaderWrapper>
  );
}

/*
fontColor?: string;
hiShadowColor?: string;
loShadowColor?: string;*/
