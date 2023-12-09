import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PrinterOption from "src/components/content/PrinterOption";

const PrintersPage = () => {
  const [printers, setPrinters] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/admin/manage", {
      method: "POST",
      credentials: "include",
    })
      .then(response => response.json())
      .then(json => setPrinters(json))
  }, [])
  
  console.log(printers)

  return (
    <div className="px-20">
      <div>
        <div className="pb-2 pt-4 text-center text-3xl">Danh sách máy in</div>
        <Link
          className="my-4 block w-fit rounded-lg bg-myblue px-4 py-2 text-xl text-white"
          to={"/manage/addPrinter"}
        >
          Thêm máy in
        </Link>
        <hr className="w-full text-mygray" />
        {/* Title */}
        <div className="flex w-full py-2">
          <div className="flex w-full justify-between">
            <div className="basis-2/12 text-center">Trạng thái</div>
            <div className="basis-2/12 text-center">ID</div>
            <div className="basis-4/12 text-center">Tên</div>
            <div className="basis-2/12 text-center">Cơ sở</div>
            <div className="basis-2/12 text-center">Tòa</div>
            <div className="basis-2/12 text-center">Tầng</div>
          </div>
          <div className="min-w-[322px] flex-shrink-0 text-center"></div>
        </div>
        <hr className="w-full text-mygray" />
      </div>
      {/* Printers */}
      <div className="">
        {printers.map((printer) => (
          <PrinterOption
            key={printer.printer_id}
            status={printer.status}
            printer_id={printer.printer_id}
            name={printer.name}
            campus={printer.campus}
            building={printer.building}
            floor={printer.floor}
            setPrinters={setPrinters}
          />
        ))}
      </div>
    </div>
  );
};

export default PrintersPage;
