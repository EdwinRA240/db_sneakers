import React, { useState, useEffect } from "react";

const Table = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setdata(responseJson);
      });
  }, []);

  return (
    <>
      Table
      <div>{data.rows?.forEach((e) => {
        return <div>{`Numero ${e[0]} Name ${e[1]}`}</div>
      })}</div>
      {data.rows?.forEach((e) => {
        console.log(`Numero ${e[0]} Name ${e[1]}`);
      })}
    </>
  );
};

export default Table;
