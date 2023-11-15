import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/authContext";
import CustomerPage from "./pages/CustomerPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import VehiclePage from "./pages/VehiclePage";
import VehicleFormPage from "./pages/VehicleFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { CustomerProvider } from "./context/customerContext";
import { VehicleProvider } from "./context/vehicleContext";

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
      <VehicleProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/add-customer" element={<CustomerCreatePage />} />
                <Route path="/customer/:id" element={<CustomerCreatePage />} />

                <Route path="/vehicles" element={<VehiclePage />} />
                <Route path="/add-vehicle" element={<VehicleFormPage />} />
                <Route path="/vehicle/:id" element={<VehicleFormPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </VehicleProvider>
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;
