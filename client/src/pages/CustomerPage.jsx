import React, { useEffect } from 'react';
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { useCustomers } from '../context/customerContext';
import { NavBar } from './../components/NavBar';

export default function CustomerPage() {
  const { getCustomers, customers } = useCustomers();
  useEffect(() => {
    getCustomers()
  },[])
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
                        <th>Estado</th>
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
                          <td>{customer.localidad}</td>
                          <td>
                            <span className="badge bg-label-primary me-1">Activo</span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);">
                                  <i className="bx bx-edit-alt me-1"></i> Editar
                                </a>
                                <a className="dropdown-item" href="javascript:void(0);">
                                  <i className="bx bx-trash me-1"></i> Eliminar
                                </a>
                              </div>
                            </div>
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
