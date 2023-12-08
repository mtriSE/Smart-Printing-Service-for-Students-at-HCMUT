import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import NavBar from "src/components/navbar/NavBar";

const InputField = ({ id, icon, placeholder }) => {
  return (
    <div className="m-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          {icon}
        </div>
        <input
          type="text"
          id={id}
          className="bg-light-yellow block w-full rounded-lg ps-12 py-4"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-light-mygray">
      <form className="mx-auto h-fit w-1/2 max-w-lg rounded-xl bg-white shadow-[0_0_15px_10px_rgba(0,0,0,0.12)]">
        <div className="m-6 text-center text-3xl font-bold text-dark-myblue">
          Đăng nhập
        </div>
        <InputField
          id={"username"}
          icon={<FaUser />}
          placeholder={"Tài khoản"}
        />
        <InputField
          id={"password"}
          icon={<FaLock />}
          placeholder={"Mật khẩu"}
        />

        {/* Role */}
        <div className="m-6">
          <select
            id="role"
            class="bg-light-yellow block w-full rounded-lg py-4 px-4 border-r-8 border-transparent"
          >
            <option selected>Bạn là?</option>
            <option value="student">Sinh viên</option>
            <option value="spso">SPSO</option>
          </select>
        </div>

        <div className="flex justify-between mx-6 my-8 font-semibold items-center">
          <a href="#" className="text-myblue">Quên mật khẩu?</a>
          <button type="submit" className="bg-dark-myblue rounded-lg py-2 px-4 text-white">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
