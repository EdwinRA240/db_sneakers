import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Main = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          variant="h6"
          component="a"
          href="/empleados"
          sx={{
            mr: 2,
            display: { md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Bienvenido -{">"} LOGIN
        </Typography>
      </Container>
    </>
  );
};

export default Main;
