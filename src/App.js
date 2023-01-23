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


function App() {
  return (
   
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/certificaciones" element={<Cerfitificaciones />} />
        <Route path="/balances" element={<Balances />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Home />} />
      </Routes> 
    <Footer />
    </BrowserRouter>

  );
}

export default App;
