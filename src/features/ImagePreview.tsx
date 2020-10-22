import React from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  background-color: green;
`;

export function ImagePreview() {
  return (
    <Container data-testid="ImagePreview-wrapper">
      <div>ImagePreview Component</div>
    </Container>
  );
}

/*
const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("file", file);

  // Pass a setUploadPercentage as callback here
  putData(formData, { onUploadProgress: setUploadPercentage )
    .then((response) => { 
      console.log(response);
    });
};
export function putData(formData, { onUploadProgress }) {
  return axios.put('/update', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress : (progressEvent) => {
      const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      // Update state here
      onUploadProgress(progress);
    },
  });
}

*/
