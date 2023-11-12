import React from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { useForm } from "react-hook-form";
import { useCustomers } from "../context/customerContext";

export default function CustomerCreatePage() {

  const { register, handleSubmit } = useForm();
  const { createCustomer } = useCustomers();
  console.log(createCustomer);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="layout-page">
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <span className="text-muted fw-light">Formulario</span> Registro
          </h4>
          <div className="row">
            <div className="col-10">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Datos del Cliente</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-default-fullname">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="Nahuel"
                        {...register("nombre", { required: true })}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-default-fullname">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="Diaz"
                        {...register("apellido", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="basic-default-fullname">
                        Localidad
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-localidad"
                        placeholder="Villa Maria"
                        {...register("localidad", { required: true })}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-backdrop fade"></div>
      </div>
    </div>
  );
}
