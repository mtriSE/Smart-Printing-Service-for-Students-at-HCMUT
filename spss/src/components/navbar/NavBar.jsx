import React from "react";
import { IoAdd } from "react-icons/io5";

const userFormat = {
  student: "flex h-full w-60 flex-shrink-0 flex-col justify-center border-x border-mygray bg-light-mygray pl-4",
  spso: "w-60 text-white select-none"
}

const NavBar = ({ userType = "spso", name = "Nguyễn Đại Tiến" }) => {
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
          {/* TODO: Fetch data to get pageCount */}
          <div>30</div>
        </div>
        <div className="flex-grow text-center text-[32px] text-light-myblue">
          HỆ THỐNG IN THÔNG MINH HCMUT
        </div>
      </div>
    </div>
  );
};

export default NavBar;
