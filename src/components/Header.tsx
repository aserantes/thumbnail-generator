import React from "react";
import { AppTitle, HeaderWrapper, Icon } from "../components";
import { getTheme } from "../store/selectors";
import { initialState, setFileToUploadData } from "../store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";

export function Header() {
  const theme = useSelector(getTheme);
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
      <a
        href="https://github.com/aserantes/thumbnail-generator"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon className="fab fa-github" iconColor="#ccc" iconSize={40} />
      </a>
    </HeaderWrapper>
  );
}

/*
fontColor?: string;
hiShadowColor?: string;
loShadowColor?: string;*/
