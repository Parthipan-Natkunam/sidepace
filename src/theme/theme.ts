"use client";
import { createTheme } from "@mui/material/styles";
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7ee1c",
    },
    secondary: {
      main: "#3ec2f7",
    },
    background: {
      default: "#353433",
    },
    error: {
      main: "#fb807a",
    },
  },
});
