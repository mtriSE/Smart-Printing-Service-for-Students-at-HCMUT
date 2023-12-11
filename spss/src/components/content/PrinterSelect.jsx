import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const PrinterSelect = ({ id, name, campus, building, floor }) => {
  const { setSelectedPrinter } = useOutletContext();
  return (
    <div className="my-2 flex w-full items-center rounded-lg bg-light-mygray py-4">
      <div className="flex flex-grow">
        <div className="basis-2/5 text-center">{name}</div>
        <div className="basis-1/5 text-center">{campus}</div>
        <div className="basis-1/5 text-center">{building}</div>
        <div className="basis-1/5 text-center">{floor}</div>
      </div>
      {/* TODO: Handle Select Printer */}
      <Link
        to="./upload"
        className="mr-4 rounded-lg bg-myblue p-2 text-white"
        onClick={(e) => {
          setSelectedPrinter(id);
        }}
      >
        Chọn máy in
      </Link>
    </div>
  );
};

export default PrinterSelect;
