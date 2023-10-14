import React, { useState } from "react";
import "./index.css";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";
import Loginho from "../../Componentes/Logo";
const ValidationForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [carrera, setCarrera] = useState("");
  const [rut, setRut] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!nombre) {
      validationErrors.nombre = "El nombre es obligatorio";
    }
    if (!apellido) {
      validationErrors.apellido = "El apellido es obligatorio";
    }
    if (!carrera) {
      validationErrors.carrera = "La carrera es obligatoria";
    }
    if (!rut) {
      validationErrors.rut = "El RUT es obligatorio";
    } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
      validationErrors.rut = "El RUT no es válido";
    }
    if (Object.keys(validationErrors).length === 0) {
      // Lógica para enviar los datos si no hay errores
      console.log("Datos enviados:", { nombre, apellido, carrera, rut });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && (
            <span style={{ color: "red" }}>{errors.nombre}</span>
          )}
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          {errors.apellido && (
            <span style={{ color: "red" }}>{errors.apellido}</span>
          )}
        </div>
        <div>
          <label>Carrera:</label>
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
          />
          {errors.carrera && (
            <span style={{ color: "red" }}>{errors.carrera}</span>
          )}
        </div>
        <div>
          <label>RUT:</label>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
          {errors.rut && <span style={{ color: "red" }}>{errors.rut}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <Loginho />
      <Footer />
    </>
  );
};

export default ValidationForm;
