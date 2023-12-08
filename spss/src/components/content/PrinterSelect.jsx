import React from "react";
import { Link } from "react-router-dom";

const PrinterSelect = ({ name, faNum, building, floor }) => {
  return (
    <div className="my-2 flex w-full items-center rounded-lg bg-light-mygray py-4">
      <div className="flex flex-grow">
        <div className="basis-1/5 text-center">{name}</div>
        <div className="basis-1/5 text-center">{faNum}</div>
        <div className="basis-1/5 text-center">{building}</div>
        <div className="basis-1/5 text-center">{floor}</div>
      </div>
      <Link
        to="/print/upload"
        className="mr-4 rounded-lg bg-myblue p-2 text-white"
      >
        Chọn máy in
      </Link>
    </div>
  );
};

export default PrinterSelect;
