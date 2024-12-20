import { useState } from "react";
import React from "react";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"; 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/:name" element={<div>Country page</div>} /> 
    </Route>
  )
);

function App() {
  return (
    <div>
      <Navbar /> 
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
