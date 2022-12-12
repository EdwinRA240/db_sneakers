import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import AlertDialogDeleteCargoEpl from "./AlertDialogDeleteCargoEpl";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlertDialogAddCargoEpl from "./AlertDialogAddCargoEpl";
import AlertDialogUpdateCargoEpl from "./AlertDialogUpdateCargoEpl";

export default function TableDireccion(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">CARGO EMPLEADO</TableCell>
              <TableCell align="center">
                <AlertDialogAddCargoEpl data={props.data.rows} />
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
                key={e.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{e.CARGO}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteCargoEpl data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateCargoEpl data={e}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
