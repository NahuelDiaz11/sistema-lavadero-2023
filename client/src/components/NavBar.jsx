import React, { Component } from "react";
import "../admin/vendor/css/core.css";
import "../admin/vendor/css/theme-default.css";
import "../admin/css/demo.css";
import "../admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../admin/vendor/css/pages/page-auth.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function NavBar() {
  const { logout } = useAuth();
  return (
    <aside className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <img src="../assets/img/favicon/favicon.ico" alt="Favicon" />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Lavadero
          </span>
        </a>

        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item active">
          <a href="index.html" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="bx bx-user"></i>
            <Link to="/customer">
              {" "}
              <div data-i18n="Layouts"> Clientes</div>{" "}
            </Link>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="register-client.html" className="menu-link">
                <div data-i18n="Without menu">Registrar Cliente</div>
              </a>
            </li>
          </ul>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="index-clients.html" className="menu-link">
                <div data-i18n="Without menu">Listado de Clientes</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="bx bx-user"></i>
            <Link to="/customer">
              {" "}
              <div data-i18n="Layouts"> Vehiculos</div>{" "}
            </Link>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="register-client.html" className="menu-link">
                <div data-i18n="Without menu">Registrar Cliente</div>
              </a>
            </li>
          </ul>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="index-clients.html" className="menu-link">
                <div data-i18n="Without menu">Listado de Clientes</div>
              </a>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="bx bx-user"></i>
            <Link to="/customer">
              {" "}
              <div data-i18n="Layouts"> Servicios</div>{" "}
            </Link>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="register-client.html" className="menu-link">
                <div data-i18n="Without menu">Registrar Cliente</div>
              </a>
            </li>
          </ul>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="index-clients.html" className="menu-link">
                <div data-i18n="Without menu">Listado de Clientes</div>
              </a>
            </li>
          </ul>
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Cuentas</span>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-dock-top"></i>
            <Link to="/login" onClick={() => logout()}>
              <div data-i18n="Account Settings">Cerrar sesión</div>
            </Link>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Autenticación</div>
          </a>
        </li>
      </ul>
    </aside>
  );
}
