import React, { useState, useEffect } from "react";
import TableProposito from "../components/Proposito/TableProposito";

const Proposito = () => {
  const [Proposito, setProposito] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Proposito")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setProposito(responseJson);
      });
  }, []);

  return (
    <>
      <TableProposito data={Proposito} />
    </>
  );
};

export default Proposito;