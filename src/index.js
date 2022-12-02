import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import { Empleados } from "./views/Empleados";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Empleados" element={<Empleados />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
