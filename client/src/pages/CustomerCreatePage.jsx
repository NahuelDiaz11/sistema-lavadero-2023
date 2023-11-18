import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { NavBar } from "./../components/NavBar";
import { useForm } from "react-hook-form";
import { useCustomers } from "../context/customerContext";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function CustomerCreatePage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createCustomer, getCustomer, updateCustomer } = useCustomers();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadCustomer() {
      if (params.id) {
        const customer = await getCustomer(params.id);
        console.log(customer);
        setValue("nombre", customer.nombre);
        setValue("apellido", customer.apellido);
        setValue("id_localidad", customer.id_localidad);
        setValue("celular", customer.celular);
        setValue("dni", customer.dni);
      }
    }
    loadCustomer();
  }, []);

  const onSubmit = handleSubmit((data) => {
    data.id_localidad = parseInt(data.id_localidad, 10);
    if (params.id) {
      updateCustomer(params.id, data);
    } else {
      createCustomer(data);
    }
    navigate("/customer");
  });

  return (
    <div className="layout-page">
      <div className="col-md-3">
        <NavBar />
      </div>
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
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
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
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
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
                      <label
                        className="form-label"
                        htmlFor="inputGroupSelect02"
                      >
                        Localidad
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          {...register("id_localidad", { required: true })}
                          defaultValue="1"
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          <option value="1">Villa Maria</option>
                          <option value="2">Villa Nueva</option>
                          <option value="3">Bell Ville</option>
                          <option value="4">Oncativo</option>
                          <option value="5">Oliva</option>
                        </select>
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect02"
                        >
                          Opciones
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Celular
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="basic-default-celular"
                        placeholder="3534262798"
                        {...register("celular", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        DNI
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="basic-default-dni"
                        placeholder="41411200"
                        {...register("dni", { required: true })}
                      />
                    </div>
                    <div className="btn-group">
                    <div className="ms-2">
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>
                      </div>
                      <div className="ms-2">
                        {" "}
                        <Link to="/customer" className="btn btn-secondary">
                          Volver
                        </Link>
                      </div>
                    </div>
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
