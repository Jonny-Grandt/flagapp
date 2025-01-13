import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Homepage from "/src/pages/HomePage";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; 

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(true);

  
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#202C36" : "#F2F2F2", 
        paper: darkMode ? "#2B3844" : "#F2F2F2", 
      },
      text: {
        primary: darkMode ? "#F2F2F2" : "#202C36", 
      },
    },
    typography: {
      fontFamily: "Open Sans, Arial, sans-serif", 
      fontSize: 14, 
      h6: {
        fontWeight: 800, 
      },
      body1: {
        fontSize: 16, 
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main>
          <Container
            sx={{
              marginTop: 3, 
            }}
          >
            <Homepage />
            <Outlet />
          </Container>
        </main>
      </Box>
    </ThemeProvider>
  );
}
