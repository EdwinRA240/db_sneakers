import React, { useState, useEffect } from "react";
import Table from "../components/Sucursal/TableSucursal";

const Sucursal = () => {
  const [Sucursal, setSucursal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Sucursal")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setSucursal(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <Table data = {Sucursal}/>
    </>
  );
};

export default Sucursal;