import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import FormControl from "../components/FormControl";

const EmpleadosInsert = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ py: 4 }} >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
        <FormControl/>
        <FormControl/>
        <FormControl/>
        <FormControl/>
      </Container>
    </>
  );
};

export default EmpleadosInsert;
