import React, { useRef, useState } from "react";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  InputLabel,
  ErrorMessage
} from "./styledComponents"; // Assuming ErrorMessage is a styled component for error messages

const FileUpload = ({ label, updateFilesCb, ...otherProps }) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});
  const [error, setError] = useState("");

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    let newFilesDict = {};
    for (let file of newFiles) {
      if (!otherProps.multiple) {
        return { [file.name]: file };
      }
      newFilesDict[file.name] = file;
    }
    return { ...files, ...newFilesDict };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = Object.keys(files).map((key) => files[key]);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    let invalidFiles = false;
    const allowedTypes = ["application/pdf"]; // Allowed file types

    Array.from(newFiles).forEach((file) => {
      if (!allowedTypes.includes(file.type)) {
        invalidFiles = true;
        setError(`Error: ${file.name} is not a PDF file.`);
      }
    });

    if (!invalidFiles) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
      setError(""); // Clear error message if no invalid files
    }
  };

  return (
    <>
      <FileUploadContainer>
        <InputLabel>{label}</InputLabel>
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default FileUpload;
