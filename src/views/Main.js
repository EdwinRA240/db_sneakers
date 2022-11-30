import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TableB from "../components/TableB";

const Main = () => {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setemployees(responseJson);
      });
  }, []);

  return (
    <>
      <NavBar />
      <TableB data = {employees}/>
    </>
  );
};

export default Main;
