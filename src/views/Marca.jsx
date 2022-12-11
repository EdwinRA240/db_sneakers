import React, { useState, useEffect } from "react";
import Table from "../components/Marca/TableMarca";

const Marca = () => {
  const [Marca, setMarca] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Marca")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setMarca(responseJson);
        console.log(responseJson);
      });
  }, []);

  return (
    <>
      <Table data = {Marca}/>
    </>
  );
};

export default Marca;