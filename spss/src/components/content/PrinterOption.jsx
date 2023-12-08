import React from "react";

const PrinterOption = ({ status, printerId, name, faNum, building, floor }) => {
  return (
    <div className="bg-light-mygray my-2 flex w-full min-h-fit items-center rounded-lg py-4">
      <div className="flex flex-grow items-center justify-between">
        {/* Infos */}
        <div className="flex justify-start w-full">
          <div className="basis-1/6 flex justify-center items-center">
            <div className={`w-4 h-4 rounded-full bg-green ${status ? "bg-green" : "bg-myred"}`}>
            </div>
          </div>
          <div className="basis-1/6 text-center">{printerId}</div>
          <div className="basis-1/6 text-center">{name}</div>
          <div className="basis-1/6 text-center">{faNum}</div>
          <div className="basis-1/6 text-center">{building}</div>
          <div className="basis-1/6 text-center">{floor}</div>
        </div>
        {/* Buttons */}
        <div className="flex-shrink-0 min-w-fit">
          <button className="bg-mygray mr-4 rounded-lg p-2 text-white">
            Bật máy in
          </button>
          <button className="bg-myred mr-4 rounded-lg p-2 text-white">
            Tắt máy in
          </button>
          <button className="mr-4 rounded-lg bg-myblue p-2 text-white">
            Xóa máy in
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrinterOption;
