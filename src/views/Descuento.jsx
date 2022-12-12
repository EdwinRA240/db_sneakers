import React, { useState, useEffect } from "react";
import TableDescuento from "../components/Descuento/TableDescuento";

const Descuento = () => {
  const [Descuentos, setDescuentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Descuento")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setDescuentos(responseJson);
      });
  }, []);

  return (
    <>
      <TableDescuento data={Descuentos} />
    </>
  );
};

export default Descuento;
