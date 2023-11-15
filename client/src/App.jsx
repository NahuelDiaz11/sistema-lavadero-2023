import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/authContext";
import CustomerPage from "./pages/CustomerPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { CustomerProvider } from "./context/customerContext";

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/add-customer" element={<CustomerCreatePage />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;
