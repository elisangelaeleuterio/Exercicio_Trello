import React from "react";
import { Container, Box, AppBar, Toolbar, Typography, Paper, IconButton, Tooltip, 
} from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Brightness4Icon from "@mui/icons-material/Brightness4";

interface Props {
  children: React.ReactNode;
  toggleTheme?: () => void; // <- Aqui está o suporte correto
}

const StoreLayout = ({ children, toggleTheme }: Props) => {
  return (
    <Box sx={{ minHeight: "50vh", display: "flex", flexDirection: "column", backgroundColor: "background.default" }}>
      <AppBar position="static" color="primary" enableColorOnDark elevation={2}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <LocalFloristIcon fontSize="medium" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontWeight: 500 }}>
              Bem-vindo à Plant Store
            </Typography>
          </Box>
          {toggleTheme && (
            <Tooltip title="Alternar tema">
              <IconButton color="inherit" onClick={toggleTheme}>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>

      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          py: 4,
          px: { xs: 2, sm: 3 },
        }}
      >
        {children}
      </Container>

      <Paper
        component="footer"
        square
        sx={{
          py: 2,
          textAlign: "center",
          mt: "auto",
          backgroundColor: "background.paper",
        }}
        elevation={1}
      >
        <Typography variant="body2" color="text.secondary">
          © 2025 Plant Store. Todos os direitos reservados.
        </Typography>
      </Paper>
    </Box>
  );
};

export default StoreLayout;
