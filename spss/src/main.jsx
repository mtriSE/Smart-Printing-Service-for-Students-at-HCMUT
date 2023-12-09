import React from "react";
import ReactDOM from "react-dom/client";
import SPSOApp from "src/SPSOApp.jsx";
import StudentApp from "./StudentApp.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "src/pages/general/login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentApp />
    </BrowserRouter>
  </React.StrictMode>,
);