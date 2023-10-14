import React from "react";
import "./index.css";
import { BrowserRouter, useRoutes} from "react-router-dom";
import Login from '../Login'
import Estudiante from '../Estudiante'
import Encargado from '../Encargado'
import Postulacion from '../Postulacion'

const AppRutas = () => useRoutes([
  {path: "/", element: <Login/>},
  {path: "/sign-in", element: <Login/>},
  {path: "/estudiante", element: <Estudiante/>},
  {path: "/encargado", element: <Encargado/>},
  {path: "/postulacion", element: <Postulacion/>},
  //{path: "/administrador", element: <Administrador/>},
  //{path: "*", element: <NotFound/>}
])

function App() {
  return (
    <BrowserRouter> 
      <AppRutas/>
    </BrowserRouter>
  );
}

export default App;
