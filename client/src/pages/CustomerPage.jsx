import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { useCustomers } from "../context/customerContext";
import { NavBar } from "./../components/NavBar";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function CustomerPage() {
  const { getCustomers, customers, deleteCustomer } = useCustomers();
  const { isAdmin } = useAuth();

  useEffect(() => {
    getCustomers();
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
                  <span className="text-muted fw-light">Listado</span> Clientes
                </h4>
                <div className="mb-3">
                  <Link to="/add-customer">
                    <button type="button" className="btn btn-primary">
                      Crear Cliente
                    </button>
                  </Link>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table card-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Número de celular</th>
                        <th>DNI</th>
                        <th>Localidad</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {customers.map((customer) => (
                        <tr key={customer.id}>
                          <td>{customer.id}</td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            {customer.nombre}
                          </td>
                          <td>{customer.apellido}</td>
                          <td>{customer.celular}</td>
                          <td>{customer.dni}</td>
                          <td>{customer.localidades.nombre}</td>
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
