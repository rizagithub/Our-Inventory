import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminAirlines from "./pages/AdminAirlines";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-inventory" element={<AdminAirlines />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
