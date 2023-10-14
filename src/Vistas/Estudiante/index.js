import React from "react";
import "./index.css";
import Navbar from "../../Componentes/Navbar";
import Footer from "../../Componentes/Footer";
import Loginho from "../../Componentes/Logo";
function VistaEstudiantes() {
  return (
    <>
      <Navbar />
      <div className="vista-estudiantes">
        <div className="contenido">
          {
            <p style={{ fontSize: "25px", textAlign: "center" }}>
              {" "}
              Bienvenido estudiante a la Plataforma PGAU en donde puedes: Postular a las ayudantias y ver los resultados
            </p>
          }
        </div>
        <Loginho/>
        <Footer />
      </div>
    </>
  );
}

export default VistaEstudiantes;
