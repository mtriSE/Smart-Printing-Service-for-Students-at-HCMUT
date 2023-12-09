import React from "react";
import { Route, Routes } from "react-router-dom";
import SPSOApp from "src/pages/app/SPSOApp";
import StudentApp from "src/pages/app/StudentApp";
import HomePage from "src/pages/general/home/HomePage";
import LoginPage from "src/pages/general/login/LoginPage";
import HistoryPageSPSO from "src/pages/spso/history/HistoryPageSPSO";
import AddPrinterPage from "src/pages/spso/management/AddPrinterPage";
import PrintersPage from "src/pages/spso/management/PrintersPage";
import SystemConfigPage from "src/pages/spso/sysconfig/SystemConfigPage";
import Buy from "src/pages/student/buying/Buy";
import BuyPage from "src/pages/student/buying/BuyPage";
import GiftPage from "src/pages/student/buying/GiftPage";
import HistoryPageStudent from "src/pages/student/history/HistoryPageStudent";
import PrintPage from "src/pages/student/printing/PrintPage";
import SettingsPage from "src/pages/student/printing/SettingsPage";
import UploadPage from "src/pages/student/printing/UploadPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="spso" element={<SPSOApp />}>
        <Route path="home" element={<HomePage />} />
        <Route path="config" element={<SystemConfigPage />} />
        <Route path="manage" element={<PrintersPage />} />
        <Route path="manage/addPrinter" element={<AddPrinterPage />} />
        <Route path="historySPSO" element={<HistoryPageSPSO />} />
      </Route>
      <Route path="student" element={<StudentApp />}>
        <Route path="home" element={<HomePage />} />
        <Route path="print" element={<PrintPage />} />
        <Route path="print/upload" element={<UploadPage />} />
        <Route path="print/settings" element={<SettingsPage />} />
        <Route path="buy" element={<Buy />} />
        <Route path="buy/buyPage" element={<BuyPage />} />
        <Route path="buy/giftPage" element={<GiftPage />} />
        <Route
          path="historyStudent"
          element={<HistoryPageStudent />}
        />
      </Route>
    </Routes>
  );
};

export default App;
