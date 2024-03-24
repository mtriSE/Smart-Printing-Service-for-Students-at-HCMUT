import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// TODO: Get accepted file types
const AcceptedFileTypes = ['.pdf', '.doc', '.docx'];

const FileDropzone = ({ onFileDrop }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Filter files by accepted types
    const validFiles = acceptedFiles.filter(file =>
      AcceptedFileTypes.includes(file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase())
    );

    // Pass the valid files to the parent component
    onFileDrop(validFiles);
  }, [onFileDrop]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: AcceptedFileTypes.map(type => type + ', ' + type.toUpperCase()).join(', ')
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <p>Accepted file types: {AcceptedFileTypes.join(', ')}</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer'
};

export default FileDropzone;