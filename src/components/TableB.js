import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from '@mui/icons-material/Upgrade';

export default function TableB(props) {
  return (
    <Container maxWidth="xlg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">NOMBRE</TableCell>
              <TableCell align="center">APELLIDO_PAT</TableCell>
              <TableCell align="center">CORREO</TableCell>
              <TableCell align="center">CARGO_EPL_ID</TableCell>
              <TableCell align="center">SUCURSAL_CLAVE</TableCell>
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
                <TableCell align="center">{e.CARGO_EPL_ID}</TableCell>
                <TableCell align="center">{e.SUCURSAL_CLAVE}</TableCell>
                <TableCell align="center">{e.DIRECCION}</TableCell>
                <IconButton aria-label="delete" onClick={() => {console.log("save")}} href="/sneaker">
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <UpgradeIcon onClick={() => {console.log(e.CLAVE)}}/>
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
