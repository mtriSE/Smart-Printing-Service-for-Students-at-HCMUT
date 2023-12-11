import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "src/components/navbar/NavBar";
import SideBar from "src/components/sidebar/SideBar";

function StudentApp() {
  const [selectedPrinter, setSelectedPrinter] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [fileName, setFileName] = useState('');

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar userType="student" />
      <div className="flex flex-grow">
        <div className="basis-60">
          <SideBar userType="student" />
        </div>
        <div className="flex flex-1 flex-col justify-between self-stretch">
          <Outlet context={{ selectedPrinter, setSelectedPrinter, pageCount, setPageCount, fileName, setFileName }} />
          <div className="flex h-20 w-full flex-shrink-0 flex-col justify-start self-end border-t border-mygray bg-white pl-4 text-center">
            <p>Bản quyền Trường Đại học Bách Khoa</p>
            <p>Phát triển bởi CodeCrafters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentApp;
