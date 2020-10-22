import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DefaultRootState } from "Store";
import { Provider } from "react-redux";
import { initialState as fileToUpload } from "Store/fileToUploadSlice";
import { render } from "@testing-library/react";

export const rootInitialState = {
  fileToUpload,
};

const mockStore = configureStore([thunk]);

export const renderWithRedux = (
  ui: JSX.Element,
  initialState: DefaultRootState = rootInitialState
) => {
  const store = mockStore(initialState);

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    mockStore: store,
  };
};

// https://png-pixel.com/
export const greenPixelBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==";

export const redPixelBase64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

/* export default function({ name = 'file.txt', size = 1024, type = 'plain/txt', lastModified = new Date() }) {
    const blob = new Blob(['a'.repeat(size)], { type });

    blob.lastModifiedDate = lastModified;

    return new File([blob], name);
}

const testFile = MockFile({
     type: 'image/png',
     size: 50000,
}); */

/*

interface MockFile {
    name: string;
    body: string;
    mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
    const blob = new Blob([file.body], { type: file.mimeType }) as any;
    blob['lastModifiedDate'] = new Date();
    blob['name'] = file.name;
    return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
    const fileList: FileList = {
        length: files.length,
        item(index: number): File {
            return fileList[index];
        }
    };
    files.forEach((file, index) => fileList[index] = createFileFromMockFile(file));

    return fileList;
};

How to use

it('should convert a text file', async () => {
  const service: DocumentService = TestBed.get(DocumentService);

  const fileList = createMockFileList([
      {
          body: 'test',
          mimeType: 'text/plain',
          name: 'test.txt'
      }
  ]);

  const convertedFiles = await service.convertFilesToModelDocuments(fileList);

  expect(convertedFiles).toBe([
      {
          name: 'test.txt',
          body: 'dGVzdA==',
          mimeType: 'text/plain'
      }
  ]);
});

*/

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";
