import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { useLocation } from 'react-router-dom'



const Header = () => {
const location= useLocation()

  return (
    <div className='headerBox'>
        <div className='headerIn'>
            <NavLink to="/"> 
            {location.pathname.startsWith('/productos/') || location.pathname.startsWith('/escuela') || location.pathname === '/landing' ? (
                <img src="/img/LogoAFZwbg.png" alt="Logo Afz" className='logoAfz' />
            ):(             
            <img src="/img/logoAfz.png" alt="Logo Afz" className='logoAfz' />)}
            </NavLink>
            <div className='headerMenu'>
            <div className='headerItem'>
                <NavLink to="/nosotros" className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
               NOSOTROS
                </NavLink>
                </div>
            <div className='headerItem'>
                <NavLink to='/productos/1' className={location.pathname.startsWith('/productos/')  ? "headerCategorySelected" : "headerCategory"}>
                PRODUCTOS
                </NavLink>
                </div>
            <div className='headerItem'>
                <NavLink to='/escuela' className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
                ESCUELA DE CAUCIÓN 
                </NavLink>
            </div>
            <div className='headerItem'>
                <NavLink to='' className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
                CONTACTO
                </NavLink>
            </div>
            <div className='headerItem'>AFZ.ONLINE</div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Header