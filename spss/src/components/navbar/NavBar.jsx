import React, { useContext, useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/auth/AuthWrapper";

const userFormat = {
  student:
    "flex h-full w-60 flex-shrink-0 flex-col justify-center border-x border-mygray bg-light-mygray pl-4",
  spso: "w-60 text-white select-none",
};

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

const NavBar = ({ userType = "spso", name = "Nguyễn Đại Tiến" }) => {
  const [pageCount, setPageCount] = useState();
  const AuthData = useContext(AuthContext);
  const { logout } = AuthData;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (userType === "student") {
      fetch("http://localhost:3000/user/page", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => setPageCount(json[0].current_page));
    }
  }, []);

  return (
    <div className="flex basis-[130px] flex-col">
      <div className="flex h-[60px] items-center justify-between bg-myblue text-xl text-white">
        <div className="flex w-60 flex-shrink-0 items-center justify-center bg-dark-myblue">
          <img src="/src/assets/images/logo.png" alt="Logo" />
          <div>HCMUT_SPSS</div>
        </div>
        <div className="flex h-full items-center bg-light-myblue px-4">
          <div>{getCookie("account_id")}</div>
          <button className="mx-2" onClick={handleLogout}>
            <FaPowerOff />
          </button>
        </div>
      </div>
      <div className="flex h-20 items-center border-b border-mygray bg-white">
        <div className={userFormat[userType]}>
          <div>Số lượng giấy còn lại:</div>
          <div>{pageCount}</div>
        </div>
        <div className="flex-grow text-center text-[32px] text-light-myblue">
          HỆ THỐNG IN THÔNG MINH HCMUT
        </div>
      </div>
    </div>
  );
};

export default NavBar;
