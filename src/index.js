import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empleados from "./views/Empleados";
import Main from "./views/Main";
import NavBar from "./components/NavBar";
// import EmpleadosInsert from "./views/EmpleadosInsert";
import Direccion from "./views/Direccion";
import NotFound from "./views/NotFound";
import Modelo from "./views/Modelo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/Empleados" element={<Empleados />} />
        {/* <Route path="/Empleados/Insert" element={<EmpleadosInsert />} /> */}
        <Route path="/Direccion" element={<Direccion />} />
        <Route path="/Modelo" element={<Modelo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
