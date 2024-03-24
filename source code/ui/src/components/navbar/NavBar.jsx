import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

const userFormat = {
  student:
    "flex h-full w-60 flex-shrink-0 flex-col justify-center border-x border-mygray bg-light-mygray pl-4",
  spso: "w-60 text-white select-none",
};

const NavBar = ({ userType = "spso", name = "Nguyễn Đại Tiến" }) => {
  const [pageCount, setPageCount] = useState();

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

  console.log(pageCount);
  return (
    <div className="flex basis-[130px] flex-col">
      <div className="flex h-[60px] items-center justify-between bg-myblue text-xl text-white">
        <div className="flex w-60 flex-shrink-0 items-center justify-center bg-dark-myblue">
          <img src="/src/assets/images/logo.png" alt="Logo" />
          <div>HCMUT_SPSS</div>
        </div>
        {/* TODO: Change to DropDown? */}
        <div className="flex h-full items-center bg-light-myblue px-4">
          {name}
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
