import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const defaultFormat =
  "flex mt-[-1px] h-16 w-full items-center justify-start border border-mygray text-mygray";
const activeFormat =
  "flex mt-[-1px] h-16 w-full items-center justify-start border bg-white text-myblue border-myblue z-10 relative";

const SideBarButton = function SideBarButton({ icon, text, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeFormat : defaultFormat)}
    >
      <div className="px-4">{icon}</div>
      <div className="text-xl">{text}</div>
    </NavLink>
  );
};

export default SideBarButton;
