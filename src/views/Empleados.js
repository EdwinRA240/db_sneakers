import React, { useState, useEffect } from "react";
import TableB from "../components/TableEmpleados";

const Empleados = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/empleados")
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
      <TableB data = {employees}/>
    </>
  );
};

export default Empleados;
