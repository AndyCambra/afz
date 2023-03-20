import React from 'react'
import HamButton from './HamButton'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({open, location, handleClick}) => {
  return (
    <div className={open===true ?'headerMobileBox' :'hidden'}>  
    <NavLink to="/"> 
            {location.pathname.startsWith('/productos/') || location.pathname.startsWith('/escuela') || location.pathname === '/landing' || location.pathname === '/prevencion-fraude' || location.pathname === '/prensa' ? (
                <img src="/img/LogoAFZwbg.png" alt="Logo Afz" className='logoAfz' />
            ):(             
            <img src="/img/logoAfz.png" alt="Logo Afz" className='logoAfz-mobile' />)}
            </NavLink>  
          <div className= {open===true ? "navbar-open" : "out"}>
                <NavLink to="/nosotros" className='mobile-item'>
               NOSOTROS
                </NavLink>
                <NavLink to="/" className='mobile-item'>
                PRODUCTOS
                </NavLink>
                <NavLink to="/" className='mobile-item'>
                ESCUELA DE CAUCIÓN
                </NavLink>
                <NavLink to="/" className='mobile-item'>
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