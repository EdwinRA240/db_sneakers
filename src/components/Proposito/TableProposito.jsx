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
import AlertDialogDeleteProposito from "./AlertDialogDeleteProposito";
import AlertDialogAddProposito from "./AlertDialogAddProposito";
import AlertDialogUpdateProposito from "./AlertDialogUpdateProposito";

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
              <TableCell align="center">PROPOSITO</TableCell>
              <TableCell align="center">
                <AlertDialogAddProposito data={props.data.rows} />
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
                <TableCell align="center">{e.PROPOSITO}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteProposito data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateProposito data={e}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
