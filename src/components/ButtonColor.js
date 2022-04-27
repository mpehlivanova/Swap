import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#832DF4",
      contrastText: "#fff",
      fontSize: "lage",
    },
  },
});
const TextStyle = styled("p")`
  color: #fff;
  font-size: medium;
  margin: 0px 15px;
  display: flex;
  flex-direction: row;
`;

export default function ButtonColor(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{ textTransform: "none", fontSize: "lage", p: 1.5 }}
        onClick={props.onClick}
        color="neutral"
        variant={props.contained}
      >
        <TextStyle>
          {props.icon}
          {props.text}
        </TextStyle>
      </Button>
    </ThemeProvider>
  );
}
