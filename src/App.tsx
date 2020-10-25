import React from "react";
import { AppWrapper } from "Components";
import { Header } from "Components/Header";
import { ImagePreview } from "Features/ImagePreview";
import { ImageSelector } from "Features/ImageSelector";
import { Thumbnails } from "Features/Thumbnails";
import { selectors } from "Store";
import { useSelector } from "react-redux";
import { useWindowSize } from "Hooks";

export function App() {
  const theme = useSelector(selectors.getTheme);
  const fileIsValid = useSelector(selectors.getFileIsValid);
  const { height, width } = useWindowSize();

  return (
    <AppWrapper
      backGroundColor={theme.colors.background}
      data-testid="App-wrapper"
      fontColor={theme.colors.text}
    >
      <div // make this a component Debug, along with state info and such
        style={{
          backgroundColor: "#000",
          opacity: 0.6,
          color: "#fff",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
          top: 0,
        }}
      >
        {`w:${width} h:${height} - ${fileIsValid}`}
      </div>
      <Header />
      {!fileIsValid && <ImageSelector />}
      {fileIsValid && <ImagePreview />}
      {false && <Thumbnails />}
    </AppWrapper>
  );
}
