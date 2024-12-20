import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "/src/components/Navbar";
import Homepage from "/src/pages/HomePage";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";



export default function RootLayout() {
  return (
   <Box>
    
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
   </Box>
  );
}
