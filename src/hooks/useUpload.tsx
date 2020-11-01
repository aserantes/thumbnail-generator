import axios from "axios";
import {
  getFileIsReadyToUpload,
  getImageFitMode,
  getPath,
  getThumbSizes,
} from "../store/selectors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useUpload() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const path = useSelector(getPath);
  const fileIsReadyToUpload = useSelector(getFileIsReadyToUpload);
  const imageFitMode = useSelector(getImageFitMode);
  const thumbSizes = useSelector(getThumbSizes);

  useEffect(() => {
    async function uploadFile() {
      let response;

      if (path && fileIsReadyToUpload && !isLoading) {
        const blob = await fetch(path).then((res) => res.blob());
        const formData = new FormData();
        formData.append("image", blob);
        formData.append("imageFitMode", imageFitMode);
        formData.append("thumbSizes", JSON.stringify(thumbSizes));

        const config = {
          headers: {
            "Content-type": "multipart/form-data",
          },
        };

        try {
          response = await axios.post("/generateThumbnails", formData, config);
        } catch (error) {
          setErrorMsg(error);
          setIsLoading(false);
        }
      }

      response && setResult(response.data);
      setIsLoading(false);
    }

    if (!result && !errorMsg && !isLoading && fileIsReadyToUpload) {
      setIsLoading(true);
      uploadFile();
    }
  }, [
    path,
    fileIsReadyToUpload,
    result,
    isLoading,
    errorMsg,
    imageFitMode,
    thumbSizes,
  ]);

  return [result, isLoading, errorMsg];
}
