import React from 'react'
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";

export default function CustomerPage() {
  return (
    <div class="layout-page">
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Listado</span> Clientes</h4>
          <div class="table-responsive text-nowrap">
            <table class="table card-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Numero de celular</th>
                  <th>Cantidad de vehiculos</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                <tr>
                  <td><i class="fab fa-angular fa-lg text-danger me-3"></i>Nahuel</td>
                  <td>Diaz</td>
                  <td>3534262798</td>
                  <td>1</td>
                  <td><span class="badge bg-label-primary me-1">Activo</span></td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i class="bx bx-dots-vertical-rounded"></i>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-edit-alt me-1"></i> Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="bx bx-trash me-1"></i> Delete</a
                        >
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                    <td><i class="fab fa-angular fa-lg text-danger me-3"></i>Martin</td>
                    <td>Germani</td>
                    <td>3534478791</td>
                    <td>1</td>
                    <td><span class="badge bg-label-primary me-1">Activo</span></td>
                    <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-edit-alt me-1"></i> Edit</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fab fa-angular fa-lg text-danger me-3"></i>Franco</td>
                    <td>Morellato</td>
                    <td>3531264781</td>
                    <td>1</td>
                    <td><span class="badge bg-label-primary me-1">Activo</span></td>
                    <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-edit-alt me-1"></i> Edit</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fab fa-angular fa-lg text-danger me-3"></i>Tomas</td>
                    <td>Bernardi</td>
                    <td>3534217991</td>
                    <td>1</td>
                    <td><span class="badge bg-label-primary me-1">Activo</span></td>
                    <td>
                      <div class="dropdown">
                        <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-edit-alt me-1"></i> Edit</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="bx bx-trash me-1"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>

        </div>
        </div>
        </div>
  )
}
