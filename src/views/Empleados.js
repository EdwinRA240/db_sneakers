import React, { useState, useEffect } from "react";
import TableB from "../components/TableEmpleados";

const Empleados = () => {
  const [Empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/empleados")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setEmpleados(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <TableB data = {Empleados}/>
    </>
  );
};

export default Empleados;
