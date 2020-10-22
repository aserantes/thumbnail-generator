import FileType from "file-type";
import { useEffect, useState } from "react";

export function useFileTypeAnalizer(path: string) {
  const [result, setResult] = useState({ ext: "", mime: "" });

  useEffect(() => {
    async function getFileInfo() {
      let response;
      console.log("useEffect called!");
      console.log(`path is [${path}]`);
      if (path) {
        const blob = await fetch(path).then((res) => {
          return res.blob();
        });
        const buffer = await blob.arrayBuffer().then((res) => {
          return res;
        });

        response = await FileType.fromBuffer(buffer);
      }

      response && setResult({ ext: response.ext, mime: response.mime });
    }

    if (path) {
      getFileInfo();
    }
  }, [path]);

  return [result];
}
