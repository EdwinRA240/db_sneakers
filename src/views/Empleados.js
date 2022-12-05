import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TableB from "../components/TableEmpleados";

const Empleados = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/EMPLEADO")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setemployees(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <NavBar />
      <TableB data = {employees}/>
    </>
  );
};

export default Empleados;
