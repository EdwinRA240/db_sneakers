import {React} from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const NotFound = () => {
  return (<>
  <Container maxWidth="sm">
    <Typography
      variant="h6"
      component="a"
      href="/empleados"
      sx={{
        mt: 2,
        mr: 2,
        display: { md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      ERROR 404 -{">"} PAGE NOT FOUND
    </Typography>
  </Container>
</>);
};

export default NotFound;
