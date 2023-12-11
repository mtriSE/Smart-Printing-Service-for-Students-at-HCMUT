import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";

const SettingsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { selectedPrinter, pageCount, fileName } = useOutletContext();
  const [formData, setFormData] = useState({
    file_name: fileName,
    printer_id: selectedPrinter,
    copies_num: 1,
    side: 1,
    page_num: "",
    page_constraint: "all",
    page_size: "A4",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setOpenModal(true);
    if (formData.page_num == "") {
      let s = "1-" + pageCount;
      var data = {
        ...formData,
        page_num: s,
      };
    } else {
      var data = formData;
    }
    fetch("http://localhost:3000/user/printing/configuration", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="flex h-full w-full flex-col bg-light-mygray p-4 text-lg">
      <div className="text-center text-3xl">Cấu hình thuộc tính in</div>
      <div className="my-4 flex max-h-52 w-full justify-around border border-mygray p-4">
        <div className="flex flex-col justify-between">
          <div>Tên file: {fileName}</div>
          <div>
            <label className="mr-4" htmlFor="copies_num">
              Số bản copy
            </label>
            <input
              className="rounded-lg"
              type="number"
              name="copies_num"
              id="copies_num"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>Máy in: {selectedPrinter}</div>
          <div>
            <select
              className="rounded-lg"
              name="side"
              id="side"
              onChange={handleInputChange}
            >
              <option value={1}>In 1 mặt</option>
              <option value={2}>In 2 mặt</option>
            </select>
          </div>
        </div>

        <div></div>
      </div>
      <div className="flex w-full justify-between">
        <div className="h-full flex-shrink-0 flex-grow flex-col border border-mygray p-4">
          <div className="mb-4 text-xl font-semibold">Số trang cần in</div>
          <div className="my-4">
            <label className="mr-4" htmlFor="page_num">
              Số trang
            </label>
            <input
              className="rounded-lg"
              type="text"
              name="page_num"
              id="page_num"
              placeholder="Ví dụ: 1-5, 9"
              onChange={handleInputChange}
            />
          </div>
          <div className="my-4">
            <label className="mr-4" htmlFor="page_constraint">
              Ràng buộc
            </label>
            <select
              className="rounded-lg"
              name="page_constraint"
              id="page_constraint"
              onChange={handleInputChange}
            >
              <option value="even">Trang chẵn</option>
              <option value="odd">Trang lẻ</option>
              <option value="all">Tất cả</option>
            </select>
          </div>
        </div>
        <div className="mx-14 h-full flex-shrink-0 flex-grow border border-mygray p-4">
          <div className="mb-4 text-xl font-semibold">Cài đặt trang</div>
          <div className="my-4">
            <label className="mr-4" htmlFor="page_constraint">
              Hướng in
            </label>
            <select className="rounded-lg" name="orientation" id="orientation">
              <option value="portrait">Dọc</option>
              <option value="landscape">Ngang</option>
            </select>
          </div>
          <div className="my-4">
            <label className="mr-4" htmlFor="page_constraint">
              Kích thước trang
            </label>
            <select
              className="rounded-lg"
              name="page_size"
              id="page_size"
              onChange={handleInputChange}
            >
              <option value="A4">A4</option>
              <option value="A3">A3</option>
            </select>
          </div>
          <div className="my-4">Căn lề</div>
          <div className="my-4">
            <label className="mr-4" htmlFor="left">
              Trái
            </label>
            <input className="rounded-lg" type="number" name="left" id="left" />
            inch
          </div>
          <div className="my-4">
            <label className="mr-4" htmlFor="right">
              Phải
            </label>
            <input
              className="rounded-lg"
              type="number"
              name="right"
              id="right"
            />
            inch
          </div>
          <div className="my-4">
            <label className="mr-4" htmlFor="top">
              Trên
            </label>
            <input className="rounded-lg" type="number" name="top" id="top" />
            inch
          </div>
          <div className="my-4">
            <label className="mr-4" htmlFor="bottom">
              Dưới
            </label>
            <input
              className="rounded-lg"
              type="number"
              name="bottom"
              id="bottom"
            />
            inch
          </div>
        </div>
        <div className="h-full basis-1/4 border border-mygray p-4">
          <div className="mb-4 text-xl font-semibold">Xem trước</div>
          <div className="flex items-center justify-center py-4">
            <div className="h-80 w-64 border border-mygray bg-white"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="mx-2 mt-2 w-40 rounded-lg bg-mygray py-2 text-white"
          onClick={(e) => {
            navigate("./../upload");
            e.preventDefault();
          }}
        >
          Hủy bỏ
        </button>
        {/* TODO: Handle */}
        <button
          onClick={handleSubmit}
          className="mx-2 mt-2 w-40 rounded-lg bg-myblue py-2 text-white"
        >
          In
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
              <FaRegCheckCircle className="mx-auto mb-4 h-14 w-14 text-green" />
              <h3 className="mb-5 text-2xl font-normal text-gray-500 dark:text-gray-400">
                In thành công
              </h3>
              <div className="flex justify-center gap-4 text-2xl">
                <Button
                  color="info"
                  onClick={() => {
                    setOpenModal(false);
                    navigate("/student/print");
                  }}
                >
                  Xác nhận
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default SettingsPage;
