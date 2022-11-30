// import React from "react";

// const Table = (props) => {
//   return (
//     <>
//       Table
//       {props.data.rows?.map(e => {return <div>ID: {e.EMPLOYEE_ID} FIRST_NAME: {e.FIRST_NAME}</div>})}
//     </>
//   );
// };

// export default Table;

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableB(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">FIRST_NAME</TableCell>
            <TableCell align="center">LAST_NAME</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.rows?.map((row) => (
            <TableRow
              key={row.EMPLOYEE_ID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.FIRST_NAME}</TableCell>
              <TableCell align="center">{row.LAST_NAME}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
