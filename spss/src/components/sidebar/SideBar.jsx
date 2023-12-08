import React, { memo, useCallback, useEffect, useState } from "react";
import SideBarButton from "src/components/sidebar/SideBarButton";
import {
  Home,
  Settings,
  Document,
  Cart,
  Clock,
  Printer,
} from "src/assets/icons/index.js";

const SideBar = ({ userType = "student" }) => {
  const [tabList, setTabList] = useState([]);

  useEffect(() => {
    const studentTabList = [
      {
        id: "home",
        icon: <Home />,
        text: "Trang chủ",
        to: "/",
      },
      {
        id: "printer",
        icon: <Printer />,
        text: "In tài liệu",
        to: "/print",
      },
      {
        id: "clock",
        icon: <Clock />,
        text: "Lịch sử in",
        to: "/historyStudent",
      },
      {
        id: "cart",
        icon: <Cart />,
        text: "Mua trang",
        to: "/buy",
      },
    ];
    const spsoTabList = [
      {
        id: "home",
        icon: <Home />,
        text: "Trang chủ",
        to: "/",
      },
      {
        id: "settings",
        icon: <Settings />,
        text: "Cài đặt",
        to: "/config",
      },
      {
        id: "printer",
        icon: <Printer />,
        text: "Quản lý máy in",
        to: "/manage",
      },
      {
        id: "clock",
        icon: <Clock />,
        text: "Xem lịch sử in",
        to: "/historySPSO",
      },
    ];

    if (userType === "student") {
      setTabList(studentTabList);
    } else {
      setTabList(spsoTabList);
    }
  }, [userType]);

  return (
    <div className="h-full w-60 bg-light-mygray flex flex-col">
      {tabList.map((item) => (
        <SideBarButton
          to={item.to}
          key={item.id}
          icon={item.icon}
          text={item.text}
        />
      ))}
      <div className="border-r border-mygray flex-grow">
      </div>
    </div>
  );
};

export default SideBar;
