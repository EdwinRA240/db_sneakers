import React, { useState, useEffect } from "react";
import TableCargoEpl from "../components/CargoEpl/TableCargoEpl";

const CargoEpl = () => {
  const [CargoEpl, setCargoEpl] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/CargoEpl")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCargoEpl(responseJson);
      });
  }, []);

  return (
    <>
      <TableCargoEpl data={CargoEpl} />
    </>
  );
};

export default CargoEpl;