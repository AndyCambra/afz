import React from 'react'
import { Link } from 'react-router-dom'
import FourLogos from '../utils/FourLogos/FourLogos'
import './certificaciones.css'
import { useEffect } from 'react'

const Cerfitificaciones = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <section className='certifications-backgound' >
    <div className='balance-grid'>
      <div className="balance-block">
        <div className='sub-menu-balance'>
            <div className='items'>
                <Link to="/balances">
                <h5 className="item-desable">BALANCES</h5>
                </Link>  
                  <h5 className='item-certifications'>CERTIFICACIONES</h5>            
            </div>
            <div>
              <Link to="/" className='home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
            <h5 className='horizontalTitle'> MEMBRESÍAS Y CERTIFICACIONES</h5>
            <p className='horizontalText'>Miembro de la Asociación Panamericana de Fianzas <br></br>
                Miembro de la International Credit Insurance & Surety Association (ICISA) <br></br>
                Certificación ISO 9001 en todos los sectores<br></br>
                Calificación A+ de Evaluadora Latinoamericana</p>
      </div>
      <FourLogos />
      </div>
      
      </section>
  )
}

export default Cerfitificaciones