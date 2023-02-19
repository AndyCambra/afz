import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Balances from './components/Balances/Balances';
import Cerfitificaciones from './components/Certificaciones/Cerfitificaciones';
import Escuela from './components/Escuela/Escuela';
import EscuelaInfo from './components/Escuela/EscuelaInfo';
import EscuelaInscripcion from './components/Escuela/EscuelaInscripcion';
import Productos from './components/Productos/Productos';
import Landing from './components/Landing/Landing';
import DescargarFormularios from './components/DescargarFormularios/DescargarFormularios';
import PolizaDigital from './components/PolizaDigital/PolizaDigital';
import EscuelaPrograma from './components/Escuela/EscuelaPrograma';
import Fraude from './components/Fraude/Fraude';
import Contacto from './components/Contacto/Contacto';



function App() {
  return (
   
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/contacto" element={<Contacto />}></Route>
        <Route exact path="/prevencion-fraude" element={<Fraude />}></Route>
        <Route exact path="/productos/poliza-digital" element={<PolizaDigital />}></Route>
        <Route exact path="/productos/descargar-formularios" element={<DescargarFormularios />}></Route>
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/escuela/programa" element={<EscuelaPrograma />} />
        <Route exact path="/escuela/inscripcion" element={<EscuelaInscripcion />} />
        <Route exact path="/escuela/info" element={<EscuelaInfo />} />
        <Route exact path="/escuela" element={<Escuela />} />
        <Route exact path="/productos/:id" element={<Productos />} />
        <Route exact path="/certificaciones" element={<Cerfitificaciones />} />
        <Route exact path="/balances" element={<Balances />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/" element={<Home />} />
      </Routes> 
    <Footer />
    </BrowserRouter>

  );
}

export default App;
