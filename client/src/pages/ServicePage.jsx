import React, { useEffect, useState } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { useServices } from "../context/serviceContext";
import { NavBar } from "./../components/NavBar";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

export default function ServicePage() {
  const { getServices, services, deleteService } = useServices();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredServices, setFilteredServices] = useState([]); // Definición de setFilteredServices

  useEffect(() => {
    getServices(startDate, endDate);
  }, [startDate, endDate]);

  const handleFilter = async () => {
    try {
      // Verifica que ambas fechas estén definidas
      if (!startDate || !endDate) {
        console.log("Por favor, seleccione ambas fechas.");
        return;
      }
  
      // Realiza la solicitud de servicios filtrados por fechas
      const filteredServicesResponse = await getServices(startDate, endDate);
  
      // Verifica si la respuesta contiene datos válidos
      if (!filteredServicesResponse || !filteredServicesResponse.data) {
        console.log("No se recibieron datos de servicios filtrados.");
        return;
      }
  
      // Obtiene los datos de servicios filtrados de la respuesta
      const filteredServicesData = filteredServicesResponse.data;
  
      console.log("Servicios filtrados:", filteredServicesData); // Muestra los servicios filtrados en la consola
  
      // Actualiza el estado de los servicios filtrados con los servicios obtenidos
      setFilteredServices(filteredServicesData);
    } catch (error) {
      console.error("Error al filtrar servicios:", error);
    }
  };
  
  
  
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
                  <span className="text-muted fw-light">Listado</span> Servicios
                </h4>
                <div className="mb-3">
                  <Link to="/add-service">
                    <button type="button" className="btn btn-primary">
                      Crear Servicio
                    </button>
                  </Link>
                </div>
                <div className="mb-3">
                  <label htmlFor="startDate">Fecha de inicio:</label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endDate">Fecha de fin:</label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button type="button" onClick={handleFilter} className="btn btn-primary">
                    Filtrar
                  </button>
                </div>
                <div className="table-responsive text-nowrap">
                  <table className="table card-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Vehiculo</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {services.map((service) => (
                        <tr key={service.id}>
                          <td>{service.id}</td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            {service.clientes ? service.clientes.nombre : "Sin cliente"}
                          </td>
                          <td>{service.fecha}</td>
                          <td>{service.id_vehiculo}</td>
                          <td>
                            <div className="btn-group">
                              <Link to={`/service/${service.id}`}>
                                <button type="button" className="btn p-0">
                                  <i className="bx bx-edit display-5"></i>
                                </button>{" "}
                              </Link>
                              <button
                                onClick={() => {
                                  deleteService(service.id);
                                }}
                                type="button"
                                className="btn p-0"
                              >
                                <i className="bx bx-trash display-5"></i>
                              </button>
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
