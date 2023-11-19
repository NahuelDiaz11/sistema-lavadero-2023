import React from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import favicon from '../admin/img/favicon/favicon.ico';
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function NavBar() {
  const { logout } = useAuth();
  return (
    <aside className="layout-menu menu-vertical menu bg-menu-theme" style={{ height: '100vh' }}>
      <div className="app-brand demo">
        <Link to="" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img src={favicon} alt="Favicon" />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Lavadero
          </span>
        </Link>

        <a className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <Link to="/chart" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/customer" className="menu-link menu-toggle">
            <i className="bx bx-user"></i>
            <div data-i18n="Layouts" className="ms-2"> Clientes</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/vehicles" className="menu-link menu-toggle">
            <i className="bx bx-car"></i>
            <div data-i18n="Layouts" className="ms-2"> Vehículos</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/services" className="menu-link menu-toggle">
            <i className="bx bx-cog"></i>
            <div data-i18n="Layouts" className="ms-2"> Servicios</div>
          </Link>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text ms-2">Cuentas</span>
        </li>
        <li className="menu-item">
        <Link className="menu-link menu-toggle d-flex align-items-center">
          <i className='bx bx-user-plus'></i>
          <div data-i18n="Authentications" className="ms-2">Registrar Usuario</div>
        </Link>
      </li>
        <li className="menu-item">
          <Link
            to="/login"
            onClick={() => logout()}
            className="menu-link menu-toggle"
          >
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings" className="ms-2">Cerrar sesión</div>
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications" className="ms-2">Autenticación</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
