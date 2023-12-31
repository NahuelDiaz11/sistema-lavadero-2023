import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart } from 'chart.js';
import {
  getCustomersRequest,
} from '../api/customers';

import {
    getVehiclesRequest,
  } from '../api/vehicles';

import { NavBar } from "../components/NavBar"; 


Chart.register(ArcElement);

const ChartPage = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await getCustomersRequest();
        const vehiclesResponse = await getVehiclesRequest();

        if (customersResponse.data && vehiclesResponse.data) {
          setCustomerCount(customersResponse.data.length);
          setVehicleCount(vehiclesResponse.data.length);
        }
      } catch (error) {
        console.error('Error al obtener datos', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ['Clientes', 'Vehículos'],
    datasets: [
      {
        data: [customerCount, vehicleCount],
        backgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
      <NavBar />
      </div>
      <div style={{ flex: '2' }}>
      <i className="bx bx-user"></i>
        <h2>Gráfico de Contador de Clientes y Vehículos</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;