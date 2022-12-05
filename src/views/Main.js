import React from "react";
import { Typography } from "@mui/material";

const Main = () => {
  return (
    <Typography
      variant="h6"
      noWrap
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
  );
};

export default Main;


