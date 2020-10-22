import React from "react";
import { Button, ButtonText } from "./Common";
import { Folder } from "@emotion-icons/material/Folder";

export function FileBrowser() {
  return (
    <Button>
      <Folder color="brown" size="40" />
      <ButtonText>Browse Files</ButtonText>
    </Button>
  );
}
