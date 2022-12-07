import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empleados from "./views/Empleados";
import Main from "./views/Main";
import NavBar from "./components/NavBar";
import EmpleadosInsert from "./views/EmpleadosInsert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Empleados" element={<Empleados />} />
        <Route path="/Empleados/Insert" element={<EmpleadosInsert />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
