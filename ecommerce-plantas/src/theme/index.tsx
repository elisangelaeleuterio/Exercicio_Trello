// src/theme/index.ts
import { createTheme } from "@mui/material";

export const getTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#001600" : "#c2a39a",
        paper: darkMode ? "#0a3007" : "#e1d1c8",
      },
    },
  });