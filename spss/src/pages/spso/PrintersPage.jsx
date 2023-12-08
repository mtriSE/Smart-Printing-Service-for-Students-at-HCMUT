import React from "react";
import { Link } from "react-router-dom";
import PrinterOption from "src/components/content/PrinterOption";

const PrintersPage = () => {
  // TODO: Fetch API to get printer data
  const printerList = [
    {
      status: true,
      printerId: "0",
      name: "Printer 0",
      faNum: "CS2",
      building: "H0",
      floor: 0,
    },
    {
      status: true,
      printerId: "1",
      name: "Printer 1",
      faNum: "CS2",
      building: "H1",
      floor: 1,
    },
    {
      status: true,
      printerId: "2",
      name: "Printer 2",
      faNum: "CS2",
      building: "H2",
      floor: 2,
    },
    {
      status: true,
      printerId: "3",
      name: "Printer 3",
      faNum: "CS2",
      building: "H3",
      floor: 3,
    },
    {
      status: true,
      printerId: "4",
      name: "Printer 4",
      faNum: "CS2",
      building: "H4",
      floor: 4,
    },
    {
      status: true,
      printerId: "5",
      name: "Printer 5",
      faNum: "CS2",
      building: "H5",
      floor: 5,
    },
    {
      status: true,
      printerId: "6",
      name: "Printer 6",
      faNum: "CS2",
      building: "H6",
      floor: 6,
    },
    {
      status: true,
      printerId: "7",
      name: "Printer 7",
      faNum: "CS2",
      building: "H7",
      floor: 7,
    },
    {
      status: true,
      printerId: "8",
      name: "Printer 8",
      faNum: "CS2",
      building: "H8",
      floor: 8,
    },
    {
      status: true,
      printerId: "9",
      name: "Printer 9",
      faNum: "CS2",
      building: "H9",
      floor: 9,
    },
  ];
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
            <div className="basis-1/6 text-center">Trạng thái</div>
            <div className="basis-1/6 text-center">ID</div>
            <div className="basis-1/6 text-center">Tên</div>
            <div className="basis-1/6 text-center">Cơ sở</div>
            <div className="basis-1/6 text-center">Tòa</div>
            <div className="basis-1/6 text-center">Tầng</div>
          </div>
          <div className="min-w-[322px] flex-shrink-0 text-center"></div>
        </div>
        <hr className="w-full text-mygray" />
      </div>
      {/* Printers */}
      <div className="">
        {printerList.map((printer) => (
          <PrinterOption
            key={printer.id}
            status={printer.status}
            printerId={printer.printerId}
            name={printer.name}
            faNum={printer.faNum}
            building={printer.building}
            floor={printer.floor}
          />
        ))}
      </div>
    </div>
  );
};

export default PrintersPage;
