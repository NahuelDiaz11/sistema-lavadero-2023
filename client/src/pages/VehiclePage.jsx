import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { useVehicles } from "../context/vehicleContext";
import { NavBar } from "./../components/NavBar";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function VehiclePage() {
  const { getVehicles, vehicles, deleteVehicle } = useVehicles();
  const { isAdmin } = useAuth();

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <NavBar />
        </div>
        <div className="col-md-9">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Listado</span> Vehículos
                </h4>
                <div className="mb-3">
                  <Link to="/add-vehicle">
                    <button type="button" className="btn btn-primary">
                      Crear Vehiculo
                    </button>
                  </Link>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table card-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Patente</th>
                        <th>Modelo y Tipo de vehiculo</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                          <td>{vehicle.id}</td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            {vehicle.patente}
                          </td>
                          <td>
                            {vehicle.modelos.nombre} -{" "}
                            {vehicle.modelos.tipos_vehiculos.nombre}
                          </td>
                          <td>
                          {isAdmin ? (
                              <div>Sin permisos</div>
                               
                            ) : (
                              <div className="btn-group">
                              <Link to={`/customer/${customer.id}`}>
                                <button type="button" className="btn p-0">
                                  <i className="bx bx-edit display-5"></i>
                                </button>{" "}
                              </Link>
                              <button
                                onClick={() => {
                                  deleteCustomer(customer.id);
                                }}
                                type="button"
                                className="btn p-0"
                              >
                                <i className="bx bx-trash display-5"></i>
                              </button>
                            </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
