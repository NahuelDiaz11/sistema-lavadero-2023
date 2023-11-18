import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/authContext";
import CustomerPage from "./pages/CustomerPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import VehiclePage from "./pages/VehiclePage";
import VehicleFormPage from "./pages/VehicleFormPage";
import ServicePage from "./pages/ServicePage";
import ServiceFormPage from "./pages/ServiceFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { CustomerProvider } from "./context/customerContext";
import { VehicleProvider } from "./context/vehicleContext";
import { ServiceProvider } from "./context/serviceContext";
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
      <VehicleProvider>
      <ServiceProvider>
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

                <Route path="/services" element={<ServicePage />} />
                <Route path="/add-service" element={<ServiceFormPage />} />
                <Route path="/service/:id" element={<ServiceFormPage />} />

                <Route path="/chart" element={<ChartPage />} />

              </Route>
            </Routes>
        </BrowserRouter>
      </ServiceProvider>
      </VehicleProvider>
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;
