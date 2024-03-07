import React, { useEffect } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { NavBar } from "./../components/NavBar";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
  
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

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
                  <h5 className="mb-0">Datos del Usuario</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
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
                        htmlFor="basic-default-fullname"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-default-celular"
                        placeholder="nahuel123@gmail.com"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="basic-default-dni"
                        placeholder="•••••••••••••"
                        {...register("pass", { required: true })}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="inputGroupSelect02"
                      >
                        Rol
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect02"
                          {...register("rol", { required: true })}
                          defaultValue="admin"
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          <option value="admin">Admin</option>
                          <option value="operario">Operario</option>
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
