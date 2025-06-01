// src/App.tsx
import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import Button from "@atoms/Button";
import HomePage from "Pages/HomePage";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = getTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button colorVariant="secondary" onClick={() => setDarkMode(!darkMode)}>
        Trocar tema
      </Button>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;