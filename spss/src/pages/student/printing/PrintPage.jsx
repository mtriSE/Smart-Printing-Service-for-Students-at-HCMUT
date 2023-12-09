import React from "react";
import PrinterSelect from "src/components/content/PrinterSelect";

const PrintPage = () => {
  // TODO: Fetch API to get printer data
  const printerList = [
    {
      name: "Printer 0",
      campus: "CS2",
      building: "H0",
      floor: 0,
    },
    {
      name: "Printer 1",
      campus: "CS2",
      building: "H1",
      floor: 1,
    },
    {
      name: "Printer 2",
      campus: "CS2",
      building: "H2",
      floor: 2,
    },
    {
      name: "Printer 3",
      campus: "CS2",
      building: "H3",
      floor: 3,
    },
    {
      name: "Printer 4",
      campus: "CS2",
      building: "H4",
      floor: 4,
    },
    {
      name: "Printer 5",
      campus: "CS2",
      building: "H5",
      floor: 5,
    },
    {
      name: "Printer 6",
      campus: "CS2",
      building: "H6",
      floor: 6,
    },
    {
      name: "Printer 7",
      campus: "CS2",
      building: "H7",
      floor: 7,
    },
    {
      name: "Printer 8",
      campus: "CS2",
      building: "H8",
      floor: 8,
    },
    {
      name: "Printer 9",
      campus: "CS2",
      building: "H9",
      floor: 9,
    },
  ];
  return (
    <div className="px-20">
      <div>
        <div className="py-2 text-center text-3xl">Danh sách máy in</div>
        <hr className="w-full text-mygray" />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-grow">
            <div className="basis-1/5 text-center">Tên máy</div>
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
        {printerList.map((printer, index) => (
          <PrinterSelect
            key={index}
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
