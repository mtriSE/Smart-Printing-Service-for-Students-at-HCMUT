import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NavBar from "src/components/navbar/NavBar";
import SideBar from "src/components/sidebar/SideBar";
import Buy from "src/pages/student/Buy";
import BuyPage from "src/pages/student/BuyPage";
import GiftPage from "src/pages/student/GiftPage";
import HomePage from "src/pages/general/HomePage";
import PrintPage from "src/pages/student/PrintPage";
import SettingsPage from "src/pages/student/SettingsPage";
import UploadPage from "src/pages/student/UploadPage";
import HistoryPageStudent from "src/pages/student/HistoryPageStudent";

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
