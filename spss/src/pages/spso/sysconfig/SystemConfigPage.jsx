import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { FaRegCheckCircle } from "react-icons/fa";

const InputField = ({ id, title, value, placeholder, handleChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        className="mb-4 mt-2 rounded-lg border border-mygray py-2 pl-2"
        type="text"
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

const SystemConfigPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [config, setConfig] = useState({
    default_page_num: null,
    default_date: null,
  });

  const [fileTypes, setFileTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/configuration", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        setConfig({
          default_date: json.default_date,
          default_page_num: json.default_page_num,
        });
        setFileTypes(json.file_type);
      });
  }, []);

  const handleDefaultPageChange = (e) => {
    setConfig((prev) => {
      return {
        ...prev,
        default_page_num: e.target.value,
      };
    });
  };

  const handleDefaultDateChange = (e) => {
    let date = e.target.value;
    if (date <= 31) {
      setConfig((prev) => {
        return {
          ...prev,
          default_date: Number(date),
        };
      });
    }
  };

  return (
    <div className="mx-auto my-auto min-h-fit w-1/2 rounded-lg border-2">
      <div className="py-4 text-center text-3xl font-medium">
        Cài đặt hệ thống
      </div>
      
      <form className="flex flex-col justify-around px-8 text-2xl">
        <InputField
          id={"pages"}
          title={"Số lượng giấy"}
          placeholder={"Số lượng giấy cấp hàng tháng"}
          value={config.default_page_num}
          handleChange={handleDefaultPageChange}
        />
        <InputField
          id={"type"}
          title={"Ngày cấp giấy"}
          placeholder={"Ngày cấp giấy hàng tháng"}
          value={config.default_date}
          handleChange={handleDefaultDateChange}
        />
        <div>Loại file tải lên</div>
        <div className="flex flex-col">
          {fileTypes.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name="file"
                  id={item.file_type}
                  checked={item.is_check}
                  onChange={() => {
                    setFileTypes((prev) =>
                      prev.map((i) =>
                        i.file_type === item.file_type
                          ? { ...i, is_check: 1 - i.is_check }
                          : i,
                      ),
                    );
                  }}
                />
                <label className="pl-2" htmlFor={item.file_type}>
                  {item.file_type}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mb-8 mt-4 flex w-full justify-around">
          <button
            className="rounded-lg bg-myblue px-8 py-2 text-white"
            type="submit"
            onClick={(e) => {
              setOpenModal(true),
                fetch("http://localhost:3000/admin/configuration/add", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  credentials: "include",
                  body: JSON.stringify({
                    ...config,
                    file_type: fileTypes,
                  }),
                });
              e.preventDefault();
            }}
          >
            Cập nhật
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
                <div className="flex justify-center text-2xl gap-4">
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

export default SystemConfigPage;
