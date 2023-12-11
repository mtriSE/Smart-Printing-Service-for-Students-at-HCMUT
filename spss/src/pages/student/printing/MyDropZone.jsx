import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";

const MyDropZone = () => {
  const [numPages, setNumPages] = useState(null);

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };

  const getPageCount = async (file) => {
    const arrayBuffer = await readFile(file);
    const pdf = await PDFDocument.load(arrayBuffer);
    return pdf.getPageCount();
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const pageCount = await getPageCount(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [".pdf"],
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #cccccc",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop a PDF file here, or click to select one</p>
      </div>
      {numPages !== null && (
        <p>
          The uploaded PDF has {numPages} {numPages === 1 ? "page" : "pages"}.
        </p>
      )}
    </div>
  );
};

export default MyDropZone;
