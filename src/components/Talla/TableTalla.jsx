import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlertDialogDeleteTalla from "./AlertDialogDeleteTalla";
import AlertDialogAddTalla from "./AlertDialogAddTalla";
import AlertDialogUpdateTalla from "./AlertDialogUpdateTalla";

export default function TableDireccion(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12, mb: 5 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">TALLA</TableCell>
              <TableCell align="center">
                <AlertDialogAddTalla data={props.data.rows} />
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
                <TableCell align="center">{e.TALLA}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteTalla data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateTalla data={e} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
