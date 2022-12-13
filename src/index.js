import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empleados from "./views/Empleados";
import Main from "./views/Main";
import NavBar from "./components/NavBar";
import Direccion from "./views/Direccion";
import NotFound from "./views/NotFound";
import Modelo from "./views/Modelo";
import Marca from "./views/Marca";
import Cliente from "./views/Cliente";
import Descuento from "./views/Descuento";
import Sucursal from "./views/Sucursal";
import CargoEpl from "./views/CargoEpl";
import Proposito from "./views/Proposito";
import Talla from "./views/Talla";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/Empleados" element={<Empleados />} />
        <Route path="/Direccion" element={<Direccion />} />
        <Route path="/Modelo" element={<Modelo />} />
        <Route path="/Marca" element={<Marca />} />
        <Route path="/Cliente" element={<Cliente />} />
        <Route path="/Descuento" element={<Descuento />} />
        <Route path="/Sucursal" element={<Sucursal />} />
        <Route path="/CargoEpl" element={<CargoEpl />} />
        <Route path="/Proposito" element={<Proposito />} />
        <Route path="/Talla" element={<Talla />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
