import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavBar from "src/components/navbar/NavBar";
import SideBar from "src/components/sidebar/SideBar";
import Buy from "src/pages/student/buying/Buy";
import BuyPage from "src/pages/student/buying/BuyPage";
import GiftPage from "src/pages/student/buying/GiftPage";
import HomePage from "src/pages/general/home/HomePage";
import PrintPage from "src/pages/student/printing/PrintPage";
import SettingsPage from "src/pages/student/printing/SettingsPage";
import UploadPage from "src/pages/student/printing/UploadPage";
import HistoryPageStudent from "src/pages/student/history/HistoryPageStudent";

function StudentApp() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex flex-grow">
        <div className="basis-60">
          <SideBar />
        </div>
        <div className="flex flex-1 flex-col justify-between self-stretch">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/print" element={<PrintPage />} />
            <Route path="/print/upload" element={<UploadPage />} />
            <Route path="/print/settings" element={<SettingsPage />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/buy/buyPage" element={<BuyPage />} />
            <Route path="/buy/giftPage" element={<GiftPage />} />
            <Route path="/historyStudent" element={<HistoryPageStudent />} />
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

export default StudentApp;
