import { Datepicker } from "flowbite-react";
import React, { useState, useEffect } from "react";

const HistoryRecord = ({
  printerId,
  fileName,
  pageCount,
  date,
  startTime,
  endTime,
}) => {
  return (
    <div className="flex justify-between border border-l-0 border-t-0 border-mygray py-2">
      <div className="basis-1/12 py-1 text-center">{printerId}</div>
      <div className="flex-grow basis-1/12 py-1 text-center">{fileName}</div>
      <div className="basis-1/12 py-1 text-center">{pageCount}</div>
      <div className="basis-2/12 py-1 text-center">{date}</div>
      <div className="basis-1/12 py-1 text-center">{startTime}</div>
      <div className="basis-1/12 py-1 text-center">{endTime}</div>
    </div>
  );
};

const HistoryPageStudent = () => {
  const [records, setRecords] = useState([]);
  const [date, setDate] = useState({ from_day: null, to_day: null, });

  useEffect(() => {
    fetch("http://localhost:3000/user/history/student", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => setRecords(json));
  }, []);

  // console.log(records);
  return (
    <div className="h-full w-full">
      {/* Some stuff on top */}
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between bg-myblue py-2 text-lg text-white">
          <div className="basis-7/12 text-center">Chọn khoảng thời gian</div>
          <div className="basis-5/12 text-center">Tìm kiếm</div>
        </div>
        <form className="flex w-full items-center justify-between bg-light-mygray py-1 text-lg">
          {/* Date Range Picker */}
          <div className="flex basis-7/12 items-center justify-evenly text-center">
            <Datepicker
              id="start-date"
              title="Ngày bắt đầu"
              onSelectedDateChanged={(date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const fromDate = year + "-" + month + "-" + day;
                console.log(`From Date: ${fromDate}`)
                setDate((prev) => {
                  return {
                    ...prev,
                    from_day: fromDate,
                  }
                })
              }}
            />
            <div>to</div>
            <Datepicker
              id="end-date"
              title="Ngày kết thúc"
              onSelectedDateChanged={(date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                const toDate = year + "-" + month + "-" + day;
                console.log(`To Date: ${toDate}`)
                setDate((prev) => {
                  return {
                    ...prev,
                    to_day: toDate,
                  }
                })
              }}
            />
          </div>

          {/* Find Button */}
          <div className="basis-5/12 text-center">
            <button
              className="my-1 rounded-lg bg-myblue px-12 py-1 text-white hover:bg-dark-myblue"
              type="submit"
              /* 
              {
                from_day: ...,
                to_day: ...,
                student_id: ...,
                printer_id: ...,
              }
              */
              onClick={(e) => {
                console.log(date);
                fetch("http://localhost:3000/user/history/time", {
                  method: "POST",
                  credentials: "include",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(date),
                })
                  .then(response => response.json())
                  .then(json => setRecords(json))
                e.preventDefault();
              }}
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
          {records.map((record, index) => (
            <HistoryRecord
              key={index}
              printerId={record.printer_id}
              fileName={record.file_name}
              date={record.printing_date}
              startTime={record.start_time}
              endTime={record.end_time}
              pageCount={record.numOfPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPageStudent;
