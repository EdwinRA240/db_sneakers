import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
// import AlertDialog from "./AlertDialogDelete";
import AlertDialogDelete from "./AlertDialogDelete";

export default function TableB(props) {
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
              <TableCell align="center">DIRECCION</TableCell>
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
                <TableCell align="center">{e.ESTADO}</TableCell>
                <TableCell align="center">
                  <AlertDialogDelete data={e} />
                </TableCell>
                <TableCell align="center">
                  <IconButton href = "/Empleados/Insert">
                    <UpgradeIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
