import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import AlertDialogDeleteEmpleado from "./AlertDialogDeleteEmpleado";
import AlertDialogUpdateEmpleado from "./AlertDialogUpdateEmpleado";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlertDialogAddDireccion from "./AlertDialogAddEmpleado";

export default function TableB(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">NOMBRE</TableCell>
              <TableCell align="center">A.PATERNO</TableCell>
              <TableCell align="center">A.MATERNO</TableCell>
              <TableCell align="center">CORREO</TableCell>
              <TableCell align="center">CARGO</TableCell>
              <TableCell align="center">SUCURSAL</TableCell>
              <TableCell align="center">CODIGO_POSTAL</TableCell>
              <TableCell align="center">
                <AlertDialogAddDireccion data={props.data.rows} />
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={handleRefresh}>
                  <RefreshIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.rows?.map((e) => (
              <TableRow
                key={e.CLAVE}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{e.NOMBRE}</TableCell>
                <TableCell align="center">{e.APELLIDO_PAT}</TableCell>
                <TableCell align="center">{e.APELLIDO_MAT}</TableCell>
                <TableCell align="center">{e.CORREO}</TableCell>
                <TableCell align="center">{e.CARGO}</TableCell>
                <TableCell align="center">{e.NOMBRE_S}</TableCell>
                <TableCell align="center">{e.CODIGO_POSTAL}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteEmpleado data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateEmpleado data={e} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
