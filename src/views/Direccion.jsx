import React, { useState, useEffect } from "react";
import TableDireccion from "../components/Direccion/TableDireccion";

const Direccion = () => {
  const [Direcciones, setDirecciones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/direccion")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setDirecciones(responseJson);
      });
  }, []);

  return (
    <>
      <TableDireccion data = {Direcciones}/>
    </>
  );
};

export default Direccion;
