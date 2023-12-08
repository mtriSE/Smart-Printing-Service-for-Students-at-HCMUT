import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavBar from "src/components/navbar/NavBar";
import SideBar from "src/components/sidebar/SideBar";
import HomePage from "src/pages/general/HomePage";
import AddPrinterPage from "src/pages/spso/AddPrinterPage";
import HistoryPageSPSO from "src/pages/spso/HistoryPageSPSO";
import PrintersPage from "src/pages/spso/PrintersPage";
import ReportPage from "src/pages/spso/ReportPage";
import SystemConfigPage from "src/pages/spso/SystemConfigPage";

function SPSOApp() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex flex-grow">
        <div className="basis-60">
          <SideBar userType="spso" />
        </div>
        <div className="flex flex-1 flex-col justify-between self-stretch">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/config" element={<SystemConfigPage />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/manage" element={<PrintersPage />} />
            <Route path="/manage/addPrinter" element={<AddPrinterPage />} />
            <Route path="/historySPSO" element={<HistoryPageSPSO />} />
          </Routes>
          <div className="flex h-20 w-full flex-shrink-0 flex-col justify-start self-end border-t border-mygray bg-white pl-4 text-center">
            <p>Bản quyền Trường Đại học Bách Khoa</p>
            <p>Phát triển bởi CodeCrafters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SPSOApp;
