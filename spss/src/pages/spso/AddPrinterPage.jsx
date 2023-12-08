import React from "react";
import { Link } from "react-router-dom";

// TODO: Handle form action add new printer

const InputField = ({ id, title, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        className="mb-4 mt-2 rounded-lg border border-mygray py-2 pl-2"
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

const AddPrinterPage = () => {
  return (
    <div className="mx-auto my-auto min-h-fit w-1/3 rounded-lg border-2">
      <div className="py-4 text-center text-3xl font-medium">Thêm máy in</div>
      {/* TODO: Handle form action add new printer */}
      <form className="flex flex-col justify-around px-8 text-2xl">
        <InputField
          id={"printerId"}
          title={"ID máy in"}
          placeholder={"ID máy in"}
        />
        <InputField
          id={"name"}
          title={"Tên máy in"}
          placeholder={"Tên máy in"}
        />
        <InputField
          id={"faNum"}
          title={"Cơ sở"}
          placeholder={"Cơ sở"}
        />
        <InputField
          id={"building"}
          title={"Tòa"}
          placeholder={"Tòa"}
        />
        <InputField
          id={"floor"}
          title={"Tầng"}
          placeholder={"Tầng"}
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
            onClick={(e) => e.preventDefault()}
          >
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPrinterPage;
