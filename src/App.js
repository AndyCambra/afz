import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Header from "./components/Header/Header"

function App() {
  return (
    <BrowserRouter>
    <>
 
      <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Home />} />
      </Routes> 
      <Header />
      </>
    </BrowserRouter>
   
  );
}

export default App;
