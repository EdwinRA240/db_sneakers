import React, { useState, useEffect } from "react";
import TableTalla from "../components/Talla/TableTalla";

const Talla = () => {
  const [Talla, setTalla] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Talla")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setTalla(responseJson);
      });
  }, []);

  return (
    <>
      <TableTalla data={Talla} />
    </>
  );
};

export default Talla;
