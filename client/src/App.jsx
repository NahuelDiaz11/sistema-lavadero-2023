import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<h1>Servicios</h1>} />
        <Route path="/add-service" element={<h1>Home page</h1>} />
        <Route path="/services/:id" element={<h1>Home page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
