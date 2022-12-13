import React, { useState, useEffect } from "react";
import TableB from "../components/Empleado/TableEmpleados";

const Empleados = () => {
  const [Empleado, setEmpleado] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Empleado")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setEmpleado(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <TableB data = {Empleado}/>
    </>
  );
};

export default Empleados;
