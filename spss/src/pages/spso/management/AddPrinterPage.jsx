import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";

const InputField = ({ id, title, placeholder, handleChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        className="mb-4 mt-2 rounded-lg border border-mygray py-2 pl-2"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

const AddPrinterPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    printer_id: null,
    printer_name: null,
    campus: null,
    building: null,
    floor: null,
    description: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(data);
  return (
    <div className="mx-auto my-auto min-h-fit w-1/3 rounded-lg border-2">
      <div className="py-4 text-center text-3xl font-medium">Thêm máy in</div>
      <form className="flex flex-col justify-around px-8 text-2xl">
        <div className="flex flex-wrap justify-between">
          <InputField
            id={"printer_id"}
            title={"ID máy in"}
            placeholder={"ID máy in"}
            handleChange={handleInputChange}
          />
          <InputField
            id={"printer_name"}
            title={"Tên máy in"}
            placeholder={"Tên máy in"}
            handleChange={handleInputChange}
          />
          <InputField
            id={"campus"}
            title={"Cơ sở"}
            placeholder={"Cơ sở"}
            handleChange={handleInputChange}
          />
          <InputField
            id={"building"}
            title={"Tòa"}
            placeholder={"Tòa"}
            handleChange={handleInputChange}
          />
          <InputField
            id={"floor"}
            title={"Tầng"}
            placeholder={"Tầng"}
            handleChange={handleInputChange}
          />
        </div>
        <InputField
          id={"description"}
          title={"Mô tả"}
          placeholder={"Mô tả máy in"}
          handleChange={handleInputChange}
        />
        <div className="mb-8 mt-4 flex w-full justify-around">
          <Link
            to={"./.."}
            className="rounded-lg bg-myred px-8 py-2 text-white"
          >
            Quay lại
          </Link>
          <button
            className="rounded-lg bg-myblue px-8 py-2 text-white"
            type="submit"
            onClick={(e) => {
              setOpenModal(true);
              fetch("http://localhost:3000/admin/manage/add", {
                method: "POST",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              e.preventDefault();
            }}
          >
            Xác nhận
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
                  Cập nhật thành công
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

export default AddPrinterPage;
