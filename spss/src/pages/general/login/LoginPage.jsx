import React, { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/auth/AuthWrapper";

const InputField = ({ id, icon, placeholder, handleChange }) => {
  return (
    <div className="m-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
          {icon}
        </div>
        <input
          type="text"
          id={id}
          name={id}
          className="block w-full rounded-lg bg-light-yellow py-4 ps-12"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    account_id: "",
    password: "",
  });
  const AuthData = useContext(AuthContext);
  const navigate = useNavigate();
  const { login, user } = AuthData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      let userData = await login(loginData.account_id, loginData.password);
      console.log(userData);
      console.log('token=' + userData.accessToken + '; Path=/;');
      if (userData.role === "A") {
        navigate("/spso/home");
      } else {
        navigate("/student/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-light-mygray">
      <form className="mx-auto h-fit w-1/2 max-w-lg rounded-xl bg-white shadow-[0_0_15px_10px_rgba(0,0,0,0.12)]">
        <div className="m-6 text-center text-3xl font-bold text-dark-myblue">
          Đăng nhập
        </div>
        <InputField
          id={"account_id"}
          icon={<FaUser />}
          placeholder={"Tài khoản"}
          handleChange={handleInputChange}
        />
        <InputField
          id={"password"}
          icon={<FaLock />}
          placeholder={"Mật khẩu"}
          handleChange={handleInputChange}
        />

        <div className="mx-6 my-8 flex items-center justify-between font-semibold">
          <a href="#" className="text-myblue">
            Quên mật khẩu?
          </a>
          <button
            type="submit"
            className="rounded-lg bg-dark-myblue px-4 py-2 text-white"
            onClick={(e) => {
              handleLogin();
              e.preventDefault();
            }}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
