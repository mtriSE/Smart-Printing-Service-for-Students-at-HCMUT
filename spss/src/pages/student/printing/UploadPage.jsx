import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { PDFDocument } from "pdf-lib";



const UploadPage = () => {
  const [numPages, setNumPages] = useState(null);
  const { setPageCount, setFileName } = useOutletContext();
  const navigate = useNavigate();

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
    setPageCount(pageCount)
    setFileName(file.name)
    navigate('./../settings')
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: [".pdf"],
  });

  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-20">
      <div className="my-4 text-3xl">Tải file cần in lên hệ thống</div>
      <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-mygray bg-light-mygray">
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
              The uploaded PDF has {numPages}{" "}
              {numPages === 1 ? "page" : "pages"}.
            </p>
          )}
        </div>
      </div>
      <div className="my-4 self-end">
        <Link to={"./.."} className="rounded-lg bg-mygray px-4 py-2 text-white">
          Quay lại
        </Link>
      </div>
    </div>
  );
};

export default UploadPage;
