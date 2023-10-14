import React from "react";
import "./index.css";
import Navbar from "../../Componentes/Navbar";
import Foooter from "../../Componentes/Footer";
import Loginho from "../../Componentes/Logo";
function TablaPostulantes() {
  // Datos ficticios de los postulantes
  const data = [
    {
      nombre: "Juan Pérez",
      ramo: "Matemáticas",
      rut: "12.345.678-9",
      promedio: 5.8,
      fechaPostulacion: "2023-10-08",
    },
    {
      nombre: "Diego Lagos",
      ramo: "Biología",
      rut: "12.345.678-9",
      promedio: 5.8,
      fechaPostulacion: "2023-10-08",
    },
    {
      nombre: "Paulo Morales",
      ramo: "Física",
      rut: "12.345.678-9",
      promedio: 4.4,
      fechaPostulacion: "2023-10-08",
    },
    {
      nombre: "Ana García",
      ramo: "Física",
      rut: "98.765.432-1",
      promedio: 6.2,
      fechaPostulacion: "2023-10-09",
    },
  ];

  return (
    <div className="tabla-postulantes">
      <Navbar />
      {
        <p
          style={{
            fontSize: "25px",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          {" "}
          Bienvenido, encargado. Seleccione los estudiantes para realizar
          ayudantías.
        </p>
      }
      <table style={{ margin: "50px" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ramo al que postula</th>
            <th>RUT</th>
            <th>PPA</th>
            <th>Fecha de postulación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((postulante, index) => (
            <tr key={index}>
              <td>{postulante.nombre}</td>
              <td>{postulante.ramo}</td>
              <td>{postulante.rut}</td>
              <td>{postulante.promedio}</td>
              <td>{postulante.fechaPostulacion}</td>
              <td>
                <button className="Aceptar">Aceptar</button>
                <button className="Rechazar">Rechazar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Loginho /> 
      <Foooter />
    </div>
  );
}

export default TablaPostulantes;
