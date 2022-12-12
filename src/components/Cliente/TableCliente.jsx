/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import AlertDialogDeleteCliente from "./AlertDialogDeleteCliente";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlertDialogAddCliente from "./AlertDialogAddCliente";
import AlertDialogUpdateCliente from "./AlertDialogUpdateCliente";

export default function TableDireccion(props) {
  const [Columnas, setColumnas] = useState([]);

  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.data.metaData?.map((e, i) => {
                if (Columnas.includes(e.name) == false) {
                  setColumnas(Columnas.push(e.name));
                }
                if (i != 0) {
                  return (
                    <TableCell key={i} align="center">
                      {e.name}
                    </TableCell>
                  );
                }
              })}
              <TableCell align="center">
                <AlertDialogAddCliente data={props.data.rows} />
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={handleRefresh}>
                  <RefreshIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          {console.log(Columnas)}
          <TableBody>
            {props.data.rows?.map((e) => (
              <TableRow
                key={e.CLAVE}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* {Columnas.map((col, i) => {
                  if (i != 0) {
                    return (
                      <TableCell key={i} align="center">
                        {e`.${col}`}
                      </TableCell>
                    );
                  }
                })} */}

                <TableCell align="center">{e.NOMBRE}</TableCell>
                <TableCell align="center">{e.APELLIDO_PAT}</TableCell>
                <TableCell align="center">{e.APELLIDO_MAT}</TableCell>
                <TableCell align="center">{e.CORREO}</TableCell>
                <TableCell align="center">{e.CODIGO_POSTAL}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteCliente data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateCliente data={e} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
