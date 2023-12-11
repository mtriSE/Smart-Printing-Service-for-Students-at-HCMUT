import React, { useEffect, useState } from "react";
import PrinterSelect from "src/components/content/PrinterSelect";

const PrintPage = () => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/printing", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setPrinters(json));
  }, []);

  return (
    <div className="px-20">
      <div>
        <div className="py-2 text-center text-3xl">Danh sách máy in</div>
        <hr className="w-full text-mygray" />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-grow">
            <div className="basis-2/5 text-center">Tên máy</div>
            <div className="basis-1/5 text-center">Cơ sở</div>
            <div className="basis-1/5 text-center">Tòa</div>
            <div className="basis-1/5 text-center">Tầng</div>
          </div>
          <div className="mr-4 select-none rounded-lg bg-white p-2 text-white">
            Chọn máy in
          </div>
        </div>
        <hr className="w-full text-mygray" />
      </div>
      <div className="flex w-full flex-wrap">
        {printers.map((printer, index) => (
          <PrinterSelect
            key={index}
            id={printer.printer_id}
            name={printer.name}
            campus={printer.campus}
            building={printer.building}
            floor={printer.floor}
          />
        ))}
      </div>
    </div>
  );
};

export default PrintPage;
