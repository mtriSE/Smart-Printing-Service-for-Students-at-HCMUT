import React from "react";
import { Link } from "react-router-dom";

// TODO: Handle form action system configuration

const InputField = ({ id, title, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        className="mb-4 mt-2 border border-mygray py-2 pl-2 rounded-lg"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

const SystemConfigPage = () => {
  return (
    <div className="mx-auto my-auto min-h-fit w-1/2 rounded-lg border-2">
      <div className="py-4 text-center text-3xl font-medium">
        Cài đặt hệ thống
      </div>
      {/* TODO: Handle form action add new printer */}
      <form className="flex flex-col justify-around px-8 text-2xl">
        <InputField
          id={"pages"}
          title={"Số lượng giấy"}
          placeholder={"Số lượng giấy cấp hàng tháng"}
        />
        <InputField
          id={"type"}
          title={"Ngày cấp giấy"}
          placeholder={"Ngày cấp giấy hàng tháng"}
        />
        <div>Loại file tải lên</div>
        <div className="flex flex-col">
          <div>
            <input type="checkbox" name="file" id="pdf" />
            <label className="pl-2" htmlFor="pdf">pdf</label>
          </div>
          <div>
            <input type="checkbox" name="file" id="doc" />
            <label className="pl-2" htmlFor="doc">doc</label>
          </div>
          <div>
            <input type="checkbox" name="file" id="docx" />
            <label className="pl-2" htmlFor="docx">docx</label>
          </div>
        </div>
        <div className="mb-8 mt-4 flex w-full justify-around">
          <button
            className="rounded-lg bg-myblue px-8 py-2 text-white"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default SystemConfigPage;
