import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { NavBar } from "./../components/NavBar";
import { useForm } from "react-hook-form";
import { useServices } from "../context/serviceContext";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ServiceFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createService, getService, updateService } = useServices();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadService() {
      if (params.id) {
        const service = await getService(params.id);
        console.log(service);
        setValue("patente", service.patente);
        setValue("fecha", service.fecha);
        setValue("id_cliente", service.id_cliente);
        setValue("hora_llegada", service.hora_llegada);
        setValue("hora_salida", service.hora_salida);
        setValue("id_vehiculo", service.id_vehiculo);
      }
    }
    loadService();
  }, []);

  const onSubmit = handleSubmit((data) => {
    data.id_cliente = parseInt(data.id_cliente, 10);
    if (params.id) {
      updateService(params.id, data);
    } else {
      createService(data);
    }
    navigate("/services");
  });

  return (
    <div className="layout-page">
      <div className="col-md-3">
        <NavBar />
      </div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="fw-bold py-3 mb-4">
            <span className="text-muted fw-light">Formulario</span> Servicio
          </h4>
          <div className="row">
            <div className="col-10">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Datos del Servicio</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="inputGroupSelect02"
                      >
                        Cliente
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          {...register("id_cliente", { required: true })}
                          defaultValue="1"
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          <option value="1">Nahuel Diaz</option>
                          <option value="2">Franco Morellato</option>
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
                        htmlFor="inputGroupSelect02"
                      >
                        Vehiculo
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          {...register("id_vehiculo", { required: true })}
                          defaultValue="1"
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          <option value="1">Chevrolet</option>
                          <option value="2">Toyota</option>
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
                        Fecha
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="2023-12-12T00:00:00Z"
                        {...register("fecha", { required: true })}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Hora de llegada
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="2023-12-12T17:00:00Z"
                        {...register("hora_llegada", { required: true })}
                        autoFocus
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        hora_salida
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="2023-12-12T18:00:00Z"
                        {...register("hora_salida", { required: true })}
                        autoFocus
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
                        <Link to="/services" className="btn btn-secondary">
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
