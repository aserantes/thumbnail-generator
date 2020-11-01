import React from "react";
import { AppWrapper, Header } from "./components";
import { ImagePreview, ImageSelector, Thumbnails } from "./features";
import {
  getBypassValidation,
  getFileIsValid,
  getImagesReadyOnServer,
  getTheme,
} from "./store/selectors";
import { setFileToUploadData } from "./store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useWindowSize } from "./hooks";

export function App() {
  const theme = useSelector(getTheme);
  const fileIsValid = useSelector(getFileIsValid);
  const bypassValidation = useSelector(getBypassValidation);
  const imagesReadyOnServer = useSelector(getImagesReadyOnServer);
  const { height, width } = useWindowSize();
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setFileToUploadData({ bypassValidation: !bypassValidation }));
  };

  const currentComponent = () =>
    (imagesReadyOnServer && <Thumbnails />) ||
    (fileIsValid && <ImagePreview />) || <ImageSelector />;

  return (
    <AppWrapper
      backGroundColor={theme.colors.background}
      data-testid="App-wrapper"
      fontColor={theme.colors.text}
    >
      <div // make this a component Debug, along with state info and such
        style={{
          backgroundColor: "#000",
          flexDirection: "column",
          opacity: 0.6,
          color: "#fff",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
          top: 0,
        }}
      >
        <div>{`w:${width} h:${height} - ${fileIsValid}`}</div>
        <div>fileIsValid: {fileIsValid ? "yes" : "no"}</div>
        <div>
          <input
            checked={bypassValidation}
            id="check"
            type="checkbox"
            onChange={handleChange}
          />
          <label htmlFor="check">disable FE validation</label>
        </div>
      </div>
      <Header />
      {currentComponent()}
    </AppWrapper>
  );
}
