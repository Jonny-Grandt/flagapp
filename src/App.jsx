// import { useState } from "react";
// import React from "react";
// import RootLayout from "./components/RootLayout";
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import "./App.css";
// import HomePage from "./pages/HomePage";
// import Navbar from "./components/Navbar"; 


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path="/:name" element={<div>Country page</div>} /> 
//     </Route>
//   )
// );

// function App() {
//   return (
//     <div>
//       <Navbar /> 
//       <HomePage />
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage"; // Importera landssidan

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:name" element={<CountryPage />} /> {/* Dynamisk rout */}
      <Route path="*" element={<div>404 - Page Not Found</div>} /> {/* Fallback för ogiltiga sidor */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
