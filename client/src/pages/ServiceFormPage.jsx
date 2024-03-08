import React, { useEffect, useState } from "react";
import axios from "axios";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { NavBar } from "./../components/NavBar";
import { useForm } from "react-hook-form";
import { useServices } from "../context/serviceContext";
import { useVehicles } from "../context/vehicleContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ServiceFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createService, getService, updateService } = useServices();
  const { getVehicles, vehicles } = useVehicles();
  const navigate = useNavigate();
  const params = useParams();
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [services, setServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    getVehicles();
  }, []);

  useEffect(() => {
    async function loadService() {
      if (params.id) {
        const service = await getService(params.id);
        setValue("patente", service.patente);
        setValue("fecha", service.fecha);
        setValue("id_cliente", service.id_cliente);
        setValue("id_vehiculo", service.id_vehiculo);
      }
    }
    loadService();
  }, []);

  const handleVehicleChange = async (event) => {
    const vehicleId = event.target.value;
    setSelectedVehicleId(vehicleId);
    console.log("vehicleId:", vehicleId);

    const response = await axios.get(
      `http://localhost:3000/api/vehicles/${vehicleId}`,
      { withCredentials: true }
    );
    const modelId = response.data.id_modelo;
    console.log("model response:", modelId);

    if (!modelId) return;

    const servicesResponse = await axios.get(
      `http://localhost:3000/api/services-by-vehicle/${modelId}`,
      { withCredentials: true }
    );
    
    setServices(servicesResponse.data);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue("fecha", date); // Setear el valor en el formulario
  };

  const onSubmit = handleSubmit((data) => {
    data.id_cliente = parseInt(data.id_cliente, 10);
    data.id_tipo_servicio = parseInt(data.id_tipo_servicio, 10);
    data.id_vehiculo = parseInt(data.id_vehiculo, 10);
    data.precio = parseInt(data.precio, 10);
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
                          <option value="2">daniel</option>
                          <option value="3">Nahuel</option>
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
                          defaultValue=""
                          onChange={handleVehicleChange}
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          {vehicles.map((vehicle) => (
                            <option key={vehicle.id} value={vehicle.id}>
                              {vehicle.patente}
                            </option>
                          ))}
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
                        htmlFor="inputGroupSelect03"
                      >
                        Tipo de Servicio
                      </label>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect03"
                          {...register("id_tipo_servicio", { required: true })}
                          defaultValue=""
                        >
                          <option value="" disabled hidden>
                            Seleccione...
                          </option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.nombre}
                            </option>
                          ))}
                        </select>
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect03"
                        >
                          Opciones
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="inputPrecio">
                        Precio
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputPrecio"
                        {...register("precio", { required: true })}
                        autoFocus
                      />
                    </div>


                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="basic-default-fullname"
                      >
                        Fecha
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeInput
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        id="basic-default-fullname"
                        placeholderText="Selecciona una fecha y hora"
                        required
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
