import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FormControl from "../components/FormControl";
import UpgradeIcon from '@mui/icons-material/Upgrade';

const EmpleadosInsert = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
        <FormControl />
        <FormControl />
        <FormControl />
        <FormControl />
        <Button variant="contained" endIcon={<UpgradeIcon />}>
          Send
        </Button>
      </Container>
    </>
  );
};

export default EmpleadosInsert;
