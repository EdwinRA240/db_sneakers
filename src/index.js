import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empleados from "./views/Empleados";
import Main from "./views/Main";


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
