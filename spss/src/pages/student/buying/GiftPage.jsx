import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";

const MyButton = ({ to, text, type, handleClick }) => {
  const bgColor = {
    confirm: "bg-myblue",
    cancel: "bg-myred",
  };
  return (
    <Link
      to={to}
      className={`rounded-lg px-8 py-2 text-2xl text-white ${bgColor[type]}`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

const GiftPage = () => {
  const [pages, setPages] = useState(0);
  const [studentId, setStudentId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
    fetch("http://localhost:3000/user/page/buy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        student_id: studentId,
        page_num: Number(pages),
      }),
    });
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-light-mygray">
      <form className="flex h-3/5 w-2/5 flex-col rounded-2xl bg-white">
        {/* Title */}
        <div className="w-full rounded-t-2xl bg-myblue py-4 text-center text-3xl text-white">
          Tặng Trang
        </div>
        {/* Input Fields */}
        <div className="flex flex-grow flex-col justify-evenly text-2xl">
          <div className="flex items-center">
            <div className="flex w-1/2 items-center justify-start">
              <label className="min-w-fit p-4" htmlFor="page-input">
                Số lượng
              </label>
              <input
                className="w-full rounded-lg border border-mygray p-2 text-2xl"
                type="number"
                name="page-input"
                id="page-input"
                placeholder="0"
                onKeyDown={(e) => {
                  if (e.key === "-") {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>
            <div className="flex w-1/2 items-center justify-start">
              <div className="min-w-fit p-4">Tổng</div>
              <div className="mr-4 w-full rounded-lg border border-mygray py-2 pl-2 text-mygray">
                {250 * pages} đ
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="ml-4" htmlFor="studentId">
              Mã số sinh viên
            </label>
            <input
              className="mx-4 my-2 flex-grow rounded-lg border border-mygray p-2 text-2xl"
              type="text"
              name="studentId"
              id="studentId"
              placeholder="Nhập mã số sinh viên"
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div></div>
        </div>
        {/* Buttons */}
        <div className="my-4 flex justify-evenly justify-self-end">
          <MyButton
            to={"#"}
            text={"Xác nhận"}
            type={"confirm"}
            handleClick={handleClick}
          />
          <MyButton to={"./.."} text={"Quay lại"} type={"cancel"} />
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
                  Mua thành công
                </h3>
                <div className="flex justify-center gap-4 text-2xl">
                  <Button color="info" onClick={() => setOpenModal(false)}>
                    Xác nhận
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default GiftPage;
