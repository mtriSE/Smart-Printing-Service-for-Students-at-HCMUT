import { Datepicker } from "flowbite-react";
import React from "react";

const HistoryRecord = ({ studentId, printerId, fileName, pageCount, date, startTime, endTime }) => {
  return (
    <div className="flex justify-between border py-2 border-mygray border-t-0 border-l-0">
      <div className="basis-1/12 py-1 text-center">{studentId}</div>
      <div className="basis-1/12 py-1 text-center">{printerId}</div>
      <div className="flex-grow basis-1/12 py-1 text-center">{fileName}</div>
      <div className="basis-1/12 py-1 text-center">{pageCount}</div>
      <div className="basis-2/12 py-1 text-center">{date}</div>
      <div className="basis-1/12 py-1 text-center">{startTime}</div>
      <div className="basis-1/12 py-1 text-center">{endTime}</div>
    </div>
  );
};

const HistoryPageSPSO = () => {
  // TODO: Fetch API to get history records
  const records = [
    {
      studentId: "2115302",
      printerId: "Printer1",
      fileName: "Printed File Name 1",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115303",
      printerId: "Printer2",
      fileName: "Printed File Name 2",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115304",
      printerId: "Printer3",
      fileName: "Printed File Name 3",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115305",
      printerId: "Printer4",
      fileName: "Printed File Name 4",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115306",
      printerId: "Printer5",
      fileName: "Printed File Name 5",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115307",
      printerId: "Printer6",
      fileName: "Printed File Name 6",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
    {
      studentId: "2115308",
      printerId: "Printer7",
      fileName: "Printed File Name 7",
      pageCount: 123,
      date: "Print Date",
      time: "Print Time",
    },
  ];

  // TODO: Handle filter and search????
  return (
    <div className="h-full w-full">
      {/* Some stuff on top */}
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between bg-myblue py-2 text-lg text-white">
          <div className="basis-3/12 text-center">Máy in</div>
          <div className="basis-3/12 text-center">Mã số sinh viên</div>
          <div className="basis-5/12 text-center">Chọn khoảng thời gian</div>
          <div className="basis-1/12 text-center">Tìm kiếm</div>
        </div>
        <form className="flex w-full items-center justify-between bg-light-mygray py-1 text-lg">
          {/* Filter Type */}
          <div className="basis-3/12 text-center">
            <input
              className="w-3/5 border border-mygray text-center"
              type="text"
              name="studentId"
              id="studentId"
              placeholder="ID Máy in"
            />
          </div>

          {/* ID Input Field */}
          <div className="basis-3/12 text-center">
            <input
              className="w-3/5 border border-mygray text-center"
              type="text"
              name="printerId"
              id="printerId"
              placeholder="Mã số sinh viên"
            />
          </div>

          {/* Date Range Picker */}
          {/* TODO: Handle Date Data? */}
          <div className="flex basis-5/12 items-center justify-evenly text-center">
            <Datepicker
              id="start-date"
              title="Ngày bắt đầu"
              onSelectedDateChanged={(date) => console.log(date)}
            />
            <div>to</div>
            <Datepicker
              id="end-date"
              title="Ngày kết thúc"
              onSelectedDateChanged={(date) => console.log(date)}
            />
          </div>

          {/* Find Button */}
          <div className="basis-1/12 text-center">
            <button
              className="my-1 rounded-lg bg-myblue px-6 py-1 text-white hover:bg-dark-myblue"
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              Find
            </button>
          </div>
        </form>
      </div>
      <hr className="border-mygray" />
      {/* History Records */}
      <div className="flex flex-col">
        {/* Some titles */}
        <div className="w-full bg-myblue px-2 py-2 text-lg text-white">
          <div>Danh sách lịch sử in</div>
        </div>
        <div className="flex justify-between">
          <div className="basis-1/12 border border-l-0 border-mygray py-2 text-center">
            MSSV
          </div>
          <div className="basis-1/12 border border-l-0 border-mygray py-2 text-center">
            Máy in
          </div>
          <div className="flex-grow basis-1/12 border border-l-0 border-mygray py-2 text-center">
            Tên tài liệu
          </div>
          <div className="basis-1/12 border border-l-0 border-mygray py-2 text-center">
            Số giấy in
          </div>
          <div className="basis-2/12 border border-l-0 border-mygray py-2 text-center">
            Ngày in
          </div>
          <div className="basis-1/12 border border-l-0 border-mygray py-2 text-center">
            Bắt đầu
          </div>
          <div className="basis-1/12 border border-l-0 border-mygray py-2 text-center">
            Kết thúc
          </div>
        </div>
        <div>
          {/* TODO: key - index? */}
          {records.map((record, index) => (
            <HistoryRecord
              key={index}
              studentId={record.studentId}
              printerId={record.printerId}
              fileName={record.fileName}
              date={record.date}
              startTime={record.time}
              endTime={record.time}
              pageCount={record.pageCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPageSPSO;
