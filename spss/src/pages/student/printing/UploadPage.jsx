import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

const UploadPage = () => {
  const [file, setFile] = useState();

  // TODO: Handle File Drop Input
  const handleFileDrop = (file) => {
    console.log(file);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-20">
      <div className="my-4 text-3xl">Tải file cần in lên hệ thống</div>
      <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-mygray bg-light-mygray">
        <Dropzone onDrop={handleFileDrop}>
          {({ getRootProps, getInputProps }) => (
            <section className="h-full w-full">
              <div className="h-full w-full" {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="flex h-full w-full items-center justify-center">
                  Thả tệp vào đây
                </p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className="my-4 self-end">
        <Link to={"./.."} className="rounded-lg bg-mygray px-4 py-2 text-white">
          Quay lại
        </Link>
        <Link
          to={"/print/settings"}
          className="ml-4 rounded-lg bg-myblue px-4 py-2 text-white"
        >
          Tiếp tục
        </Link>
      </div>
    </div>
  );
};

export default UploadPage;
