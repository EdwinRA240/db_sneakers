import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import AlertDialogDeleteDireccion from "./AlertDialogDeleteDireccion";
import RefreshIcon from "@mui/icons-material/Refresh";
import AlertDialogAddDireccion from "./AlertDialogAddDireccion";
import AlertDialogUpdateDireccion from "./AlertDialogUpdateDireccion";

export default function TableDireccion(props) {
  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 5 }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ESTADO</TableCell>
              <TableCell align="center">ALCAL/MUN</TableCell>
              <TableCell align="center">CODIGO POSTAL</TableCell>
              <TableCell align="center">CALLE</TableCell>
              <TableCell align="center">NUMERO EXT</TableCell>
              <TableCell align="center">NUMERO INT</TableCell>
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
                key={e.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{e.ESTADO_ID}</TableCell>
                <TableCell align="center">{e.ALCAL_MUN}</TableCell>
                <TableCell align="center">{e.CODIGO_POSTAL}</TableCell>
                <TableCell align="center">{e.CALLE}</TableCell>
                <TableCell align="center">{e.NUMERO_EXT}</TableCell>
                <TableCell align="center">{e.NUMERO_INT}</TableCell>
                <TableCell align="center">
                  <AlertDialogDeleteDireccion data={e} />
                </TableCell>
                <TableCell align="center">
                  <AlertDialogUpdateDireccion data={e}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
