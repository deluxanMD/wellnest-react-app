import { PaletteMode, createTheme } from "@mui/material";
import { deepOrange, green, lightBlue, red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light" as PaletteMode,
    primary: { main: "#6002ee" },
    secondary: { main: "#02bbee" },
    common: { black: "#000000", white: "#ffffff" },
    error: {
      light: "red[200]",
      main: red[400],
    },
    warning: {
      light: "deepOrange[100]",
      main: deepOrange[200],
    },
    success: {
      light: "green[100]",
      main: green[400],
    },
    info: {
      light: "lightBlue[100]",
      main: lightBlue[400],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark" as PaletteMode,
    primary: { main: "#6002ee" },
    secondary: { main: "#02bbee" },
    common: { black: "#000000", white: "#ffffff" },
    error: {
      light: "red[200]",
      main: red[400],
    },
    warning: {
      light: "deepOrange[100]",
      main: deepOrange[200],
    },
    success: {
      light: "green[100]",
      main: green[400],
    },
    info: {
      light: "lightBlue[100]",
      main: lightBlue[400],
    },
  },
});
