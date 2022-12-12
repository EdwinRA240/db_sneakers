import React, { useState, useEffect } from "react";
import TableCliente from "../components/Cliente/TableCliente";

const Cliente = () => {
  const [Clientes, setClientees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Cliente")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setClientees(responseJson);
      });
  }, []);

  return (
    <>
      <TableCliente data={Clientes} />
    </>
  );
};

export default Cliente;
