import React, { useState, useEffect } from "react";
import TableB from "../components/Modelo/TableModelo";

const Modelos = () => {
  const [Modelos, setModelos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Modelos")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setModelos(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <TableB data = {Modelos}/>
    </>
  );
};

export default Modelos;