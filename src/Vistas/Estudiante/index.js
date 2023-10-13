import React from "react";
import "./index.css";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";
function VistaEstudiantes() {
  return (
    <>
      <Navbar />
      <div className="vista-estudiantes">
        <div className="contenido">
          {
            <p style={{ fontSize: "25px", textAlign: "center" }}>
              {" "}
              Bienvenido estudiante, selecciona el ramo al que desees postular como ayudante
            </p>
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default VistaEstudiantes;
