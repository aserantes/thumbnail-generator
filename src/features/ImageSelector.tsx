import React, { ChangeEvent, useEffect } from "react";
import styled from "@emotion/styled";
import { FileBrowser } from "Components/FileBrowser";
import { MAX_FILE_SIZE_ERROR, VALID_FILE_TYPES_ERROR } from "Constants";
import { selectors } from "Store";
import { setFileToUploadData } from "Store/fileToUploadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFileTypeAnalizer } from "Hooks/useFileTypeAnalizer";

const Container = styled.section`
  background-color: orange;
`;
const Input = styled.input``;
const Error = styled.div`
  color: red;
`;

export function ImageSelector() {
  /*
  import ERRORS from constant and send to NOTIFICATION, 
  also useSelect typeisvalid and sizeisValid
  create filePath pero separarlo de fileChunkPath para poder igual tener la img
  FILEISVALID is broken
  FILEISREADYTOUPLOAD is broken
  show typeisvalid
  show sizeisvalid
  */
  const name = useSelector(selectors.getName);
  const size = useSelector(selectors.getSize);
  const chunkPath = useSelector(selectors.getChunkPath);
  const path = useSelector(selectors.getPath);
  const ext = useSelector(selectors.getExt);
  const type = useSelector(selectors.getType);
  const sizeIsValid = useSelector(selectors.getSizeIsValid);
  const typeIsValid = useSelector(selectors.getTypeIsValid);
  const fileIsValid = useSelector(selectors.getFileIsValid);
  const [result] = useFileTypeAnalizer(chunkPath);
  const dispatch = useDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const fileDomPath = URL.createObjectURL(file);
      const fileChunkDomPath = URL.createObjectURL(file.slice(0, 32));

      dispatch(
        setFileToUploadData({
          name: file.name,
          size: file.size,
          ext: file.type,
          path: fileDomPath,
          chunkPath: fileChunkDomPath,
          type: "",
        })
      );
    }
  };

  useEffect(() => {
    console.log("useEffect called!");
    if (result.ext !== "") {
      console.log("useEffect condition passed!");
      dispatch(
        setFileToUploadData({
          type: result.ext,
        })
      );
    }
  }, [result, dispatch]);

  return (
    <Container data-testid="ImageSelector-wrapper">
      <FileBrowser />
      <Input // create separate Input in components. In there, create a simple link and a hidden input file https://masakudamatsu.medium.com/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
        accept=".png, .jpg, .jpeg" // send this as prop
        data-testid="file-input" // hardcode this in the Input
        type="file" // hardcode this in the Input
        onChange={handleChange} // send this as prop
      />
      <br />
      <div>INPUT DATA</div>
      <div>name: {name}</div>
      <div>ext: {ext}</div>
      <div>size: {size}</div>
      <br />
      <div>VALIDATION:</div>
      <div>size is valid: {sizeIsValid ? "YES" : "NO"}</div>
      <div>real file type: {type}</div>
      <div>type is valid: {typeIsValid ? "YES" : "NO"}</div>
      <br />
      <div style={{ color: fileIsValid ? "green" : "red" }}>
        file is valid: {fileIsValid ? "YES" : "NO"}
      </div>
      <br />
      {!sizeIsValid && <Error>{MAX_FILE_SIZE_ERROR}</Error>}
      {!typeIsValid && <Error>{VALID_FILE_TYPES_ERROR}</Error>}
      {false && fileIsValid && <img src={path} />}
    </Container>
  );
}

/* import React, {Component} from 'react'
import {render, cleanup, fireEvent} from 'react-testing-library'

afterEach(cleanup)

class UploadFile extends Component {
  state = {
    uploadedFileName: null,
  }

  handleUploadFile = e => {
    const file = e.target.files[0]
    this.setState({
      uploadedFileName: file.name,
    })
  }

  render() {
    return (
      <div>
        <label for="upload-file">Upload File</label>
        <input
          type="file"
          id="upload-file"
          name="upload-file"
          onChange={this.handleUploadFile}
        />
        {this.state.uploadedFileName && (
          <div>
            You have uploaded a file named {this.state.uploadedFileName}
          </div>
        )}
      </div>
    )
  }
}

test('Show the uploaded file name after the user uploads a file', () => {
  const {getByLabelText, getByText} = render(<UploadFile />)

  const file = new File(['(⌐□_□)'], 'chucknorris.png', {
    type: 'image/png',
  })

  const inputEl = getByLabelText('Upload File')

  // input.files is a read-only property
  // so this is not allowed
  // input.files = [file]

  // But DOM properties are reconfigurable
  // I got this while reading through a related JSDOM Github issue
  // https://github.com/jsdom/jsdom/issues/1272#issuecomment-150670691
  Object.defineProperty(inputEl, 'files', {
    value: [file],
  })

  // If you want to trigger the onChange handler of a controlled component
  // with a different event.target.value, sending value through
  // eventProperties won't work like it does with Simulate.
  // You need to change the element's value property,
  // then use fireEvent to fire a change DOM event.
  // https://github.com/kentcdodds/react-testing-library#fireeventeventnamenode-htmlelement-eventproperties-object
  fireEvent.change(inputEl)

  getByText('You have uploaded a file named chucknorris.png')
})
*/
