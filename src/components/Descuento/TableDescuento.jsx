/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
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
import AlertDialogDelete from "./AlertDialogDeleteDescuento";
import AlertDialogAdd from "./AlertDialogAddDescuento";
import AlertDialogUpdate from "./AlertDialogUpdateDescuento";

export default function TableDescuento(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
            {props.data.metaData?.map((e, i) => {
                if (i != 0) {
                  return (
                    <TableCell key={i} align="center">
                      {e.name}
                    </TableCell>
                  );
                }
              })}
              <TableCell align="center">
                <AlertDialogAdd data={props.data.rows} />
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
                <TableCell align="center">{e.DESCUENTO}</TableCell>
                <TableCell align="center">
                  <AlertDialogDelete data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdate data={e}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
