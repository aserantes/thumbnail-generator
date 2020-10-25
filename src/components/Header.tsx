import React from "react";
import { AppTitle, HeaderWrapper, Icon } from "Components";
import { initialState, setFileToUploadData } from "Store/fileToUploadSlice";
import { selectors } from "Store";
import { useDispatch, useSelector } from "react-redux";

export function Header() {
  const theme = useSelector(selectors.getTheme);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFileToUploadData(initialState));
  };

  return (
    <HeaderWrapper>
      <AppTitle
        fontHoverColor={theme.colors.primary}
        hiShadowColor={theme.colors.background}
        loShadowColor={theme.colors.foreground}
        onClick={handleClick}
      >
        Thumbs App
      </AppTitle>
      <Icon className="fab fa-github" iconColor="#ccc" iconSize={40} />
    </HeaderWrapper>
  );
}

/*
fontColor?: string;
hiShadowColor?: string;
loShadowColor?: string;*/
