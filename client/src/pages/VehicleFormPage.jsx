import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { NavBar } from "./../components/NavBar";
import { useForm } from "react-hook-form";
import { useVehicles } from "../context/vehicleContext";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function VehicleFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createVehicle, getVehicle, updateVehicle } = useVehicles();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadVehicle() {
      if (params.id) {
        const vehicle = await getVehicle(params.id);
        console.log(vehicle);
        setValue("patente", vehicle.patente);
        setValue("id_modelo", vehicle.id_modelo);
      }
    }
    loadVehicle();
  }, []);

  const onSubmit = handleSubmit((data) => {
    data.id_modelo = parseInt(data.id_modelo, 10);
    if (params.id) {
      updateVehicle(params.id, data);
    } else {
      createVehicle(data);
    }
    navigate("/vehicles");
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
                  <h5 className="mb-0">Datos del Vehiculo</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Patente
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholder="HPS547"
                        {...register("patente", { required: true })}
                        autoFocus
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="inputGroupSelect02"
                      >
                        Modelo
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          {...register("id_modelo", { required: true })}
                          defaultValue="1"
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          <option value="1">Chevrolet - Camioneta</option>
                          <option value="2">Ford - Coupe</option>
                        </select>
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect02"
                        >
                          Opciones
                        </label>
                      </div>
                    </div>
                    <div className="btn-group">
                      <div className="ms-2">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                      </div>
                      <div className="ms-2">
                        {" "}
                        <Link to="/vehicles" className="btn btn-secondary">
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
