import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
   
   
    <BrowserRouter>
    <div className='first'>
    <Header />
      <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Home />} />
      </Routes> 
    </div>
    <div className='last'>
    <Footer />
    </div>
    
    </BrowserRouter>

  
   
  );
}

export default App;
