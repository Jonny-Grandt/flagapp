import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import techoverdark from '../assets/techover-logo-dark.png';
import techoverlight from '../assets/techover-logo.png';
import { LightMode } from '@mui/icons-material';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const darkModeBackground = '#202C36';
  const lightModeBackground = '#FFFFFF';
  const darkModeNavbar = '#202C36';
  const lightModeNavbar = '#FFFFFF';

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? darkModeBackground : lightModeBackground,
      },
      text: {
        primary: darkMode ? '#fff' : '#000', // Textfärg för primär text
      },
    },
  });

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={4}>
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: darkMode ? darkModeNavbar : lightModeNavbar, 
           
            
          }}>
          <Toolbar 
            sx={{ 
              maxWidth: '1440px', 
              width: '100%', 
              margin: '0 auto', 
              padding: '0 50px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
            {/* Text */}
            <Typography variant="h6" component="div" color="text.primary">
              The Flag App
            </Typography>

            {/* Bild */}
            <Box
              component="img"
              src={darkMode ? techoverlight : techoverdark } // Switch logo based on mode
              alt="Logo"
              sx={{ 
                
                width: 'auto', 
                alignSelf: 'center' 
              }}
            />

            {/* Dark/Light Mode Toggle Button */}
            <Button
              variant="text"
              color="inherit"
              onClick={handleToggleDarkMode}
              startIcon={darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              sx={{ color: theme.palette.text.primary }}
            >
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Toolbar>
        </AppBar>

      </Paper>
      
      <Box 
        sx={{ 
          backgroundColor: darkMode ? darkModeNavbar : lightModeNavbar, 
          minHeight: '100vh', 
          width: '100%' 
        }}
      />
    </ThemeProvider>
  );
};

export default Navbar;
