import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const PrinterOption = ({
  status,
  printer_id,
  name,
  campus,
  building,
  floor,
  setPrinters,
}) => {
  const [printerStatus, setPrinterStatus] = useState(status);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="my-2 flex min-h-fit w-full items-center rounded-lg bg-light-mygray py-4">
      <div className="flex flex-grow items-center justify-between">
        {/* Infos */}
        <div className="flex w-full justify-start">
          <div className="flex basis-1/6 items-center justify-center">
            <div
              className={`h-4 w-4 rounded-full bg-green ${
                printerStatus ? "bg-green" : "bg-myred"
              }`}
            ></div>
          </div>
          <div className="basis-2/12 text-center">{printer_id}</div>
          <div className="basis-4/12 text-center">{name}</div>
          <div className="basis-2/12 text-center">{campus}</div>
          <div className="basis-2/12 text-center">{building}</div>
          <div className="basis-2/12 text-center">{floor}</div>
        </div>
        {/* Buttons */}
        <div className="min-w-fit flex-shrink-0">
          <button
            className={`mr-4 rounded-lg p-2 text-white ${
              printerStatus ? "bg-mygray" : "bg-myblue"
            }`}
            onClick={(e) => {
              setPrinterStatus(1);
              fetch("http://localhost:3000/admin/manage/enable", {
                method: "POST",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ printer_id: printer_id }),
              });
            }}
          >
            Bật máy in
          </button>
          <button
            className={`mr-4 rounded-lg p-2 text-white ${
              printerStatus ? "bg-myblue" : "bg-mygray"
            }`}
            onClick={(e) => {
              setPrinterStatus(0);
              fetch("http://localhost:3000/admin/manage/disable", {
                method: "POST",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ printer_id: printer_id }),
              });
              e.preventDefault();
            }}
          >
            Tắt máy in
          </button>
          <button
            className="mr-4 rounded-lg bg-myred p-2 text-white"
            onClick={(e) => {
              setOpenModal(true);
              e.preventDefault();
            }}
          >
            Xóa máy in
          </button>
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Xác nhận xóa máy in {printer_id} - {name}?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => {
                      setPrinters((prev) =>
                        prev.filter(
                          (printer) => printer.printer_id !== printer_id,
                        ),
                      );
                      fetch("http://localhost:3000/admin/manage/delete", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ printer_id: printer_id }),
                      });
                      setOpenModal(false);
                    }}
                  >
                    Xác nhận
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Quay lại
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PrinterOption;
