import React from "react";
import logo from "../assets/images/logo-sofkau_1Fn3uH-1S.webp";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Reto Tecnico Sofka - Gestor Naves Espaciales
          </a>
          <a
            className="navbar-brand"
            href={"https://sofkau.com/en/about-us/"}
            target="_blank"
          >
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
