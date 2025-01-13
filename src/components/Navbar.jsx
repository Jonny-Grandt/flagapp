import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LogoLight from '../assets/techover-logo.png'
import LogoDark from '../assets/techover-logo-dark.png'

export default function Navbar({ toggleDarkMode, darkMode }) {
  return (
    <Box sx={{ display: 'flex',
      margin: "auto",
      justifyContent: "space-between"
      
    }}>
          <AppBar position="static" sx={{ 
      backgroundColor: darkMode ? "#2B3844" : "#F2F2F2",
      display: 'grid',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      margin: "0",
      padding: "0"
    }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ 
            color: darkMode ? "#F2F2F2" : "#202C36", 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
             
          }}
        >
          The Flag App
        </Typography>

        <img src={darkMode ? LogoLight : LogoDark} alt="logo" />

        <Box>
          <Button 
            variant="text" 
            onClick={toggleDarkMode} 
            sx={{ 
              color: darkMode ? "#F2F2F2" : "#202C36", 
              display: 'flex',
              alignItems: 'center' 
            }}
          >
            <BedtimeIcon sx={{ mr: 1, color: darkMode ? "#F2F2F2" : "#202C36" }} />
            Dark Mode
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    </Box>
  );
}