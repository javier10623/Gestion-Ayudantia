import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./index.css";
import Logo from "../../assets/logo_ucm_marca.png";

function Navbar(props) {

  const [menuHamburguesaDesplegado, setMenuHamburguesaDesplegado] = useState(false);
  const [menuUsuarioDesplegado, setMenuUsuarioDesplegado] = useState(false);

  const toggleMenuHamburguesa = () => {
    setMenuHamburguesaDesplegado(!menuHamburguesaDesplegado);
    setMenuUsuarioDesplegado(false); 
  };

  const toggleMenuUsuario = () => {
    setMenuUsuarioDesplegado(!menuUsuarioDesplegado);
    setMenuHamburguesaDesplegado(false); 
  };

  const handleCerrarSesion = () => {
    console.log("Sesión cerrada");
  };

  return (
    <div className="header">
      <button onClick={toggleMenuHamburguesa} className="header-toggle2">
        ☰
      </button>
      <div className={`headeer-menu ${menuHamburguesaDesplegado ? "header-abierto" : ""}`}>
        <ul className={`opciones ${menuHamburguesaDesplegado ? "mostrar" : ""}`}>
          <li>
            <Link to="/Postulacion">Realizar postulación</Link>
          </li>
          <li>
            <Link to="/modificar-eliminar-postulaciones">Modificar/Eliminar postulaciones</Link>
          </li>
          <li>
            <Link to="/resultados">Resultados de la postulación</Link>
          </li>
        </ul>
      </div>
      <img className="logo_ucm" src={Logo} alt="Logo" />
      <button onClick={toggleMenuUsuario} className="header-toggle">
        
      </button>
      <div className={`header-menu ${menuUsuarioDesplegado ? "header-abierto" : ""}`}>
        <ul>
          <li>Cambiar Contraseña</li>
          <li onClick={handleCerrarSesion}>Cerrar Sesión</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
