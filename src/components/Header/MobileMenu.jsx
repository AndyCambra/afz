import React from 'react'
import HamButton from './HamButton'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({open, location, handleClick}) => {
  return (
    <div className={open===true ?'headerMobileBox' :'hidden'}>  
    <NavLink to="/"> 
            {location.pathname.startsWith('/productos/') || location.pathname.startsWith('/escuela') || location.pathname === '/landing' || location.pathname === '/contacto' || location.pathname === '/nosotros' || location.pathname === '/cotizador-alquiler' || location.pathname === '/cotizador-directores' ? (
                <img src="/img/LogoAFZwbg.png" alt="Logo Afz" className='logoAfz-mobile' />
            ):(             
            <img src="/img/logoAfz.png" alt="Logo Afz" className='logoAfz-mobile' />)}
            </NavLink>  
          <div className= {open===true ? "navbar-open" : "out"}>
                <NavLink to="/nosotros" className='mobile-item' onClick={handleClick}>
               NOSOTROS
                </NavLink>
                <NavLink to="/landing" className='mobile-item' onClick={handleClick}>
                PRODUCTOS
                </NavLink>
                <NavLink to="/escuela" className='mobile-item' onClick={handleClick}>
                ESCUELA DE CAUCIÓN
                </NavLink>
                <NavLink to="/contacto" className='mobile-item' onClick={handleClick}>
               CONTACTO
                </NavLink>    
          </div>
          <div className="ham-button">
          <HamButton open={open} handleClick={handleClick} />
          </div>    
        </div>
  )
}

export default MobileMenu