import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { useLocation } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect';
import { useState} from "react"
import MobileMenu from './MobileMenu'
import { Icon } from '@iconify/react';
import { useLangContext } from '../../Context/LangContext';

const Header = () => {
const location= useLocation()
const [open, setOpen] = useState(false);
const {handleLanguage, selectedLanguage} = useLangContext()

const handleClick = () => {
    setOpen(!open);
  };
 
  return (
    <div>
        <BrowserView>
    <div className='headerBox'>
        <div className='flag-box'>
            { selectedLanguage=== 'EN'? 
            <Icon icon="flag:es-4x3" onClick={e=>handleLanguage('ES')} /> :
            <Icon icon="flag:gb-4x3" onClick={e=>handleLanguage('EN')} />
            }
        </div>
        <div className='header-in'>
            <NavLink to="/"> 
            {location.pathname.startsWith('/productos/') || location.pathname.startsWith('/escuela') || location.pathname === '/landing' || location.pathname === '/prevencion-fraude' || location.pathname === '/prensa' ? (
                <img src="/img/LogoAFZwbg.png" alt="Logo Afz" className='logoAfz' />
            ):(             
            <img src="/img/logoAfz.png" alt="Logo Afz" className='logoAfz' />)}
            </NavLink>
            <div className='header-menu'>
            <div className='header-item'>
                <NavLink to="/nosotros" className={({isActive})=>isActive ? "header-category-selected" : "header-category"}>
               NOSOTROS
                </NavLink>
                </div>
            <div className='header-item'>
                <NavLink to='/productos/1' className={location.pathname.startsWith('/productos/')  ? "header-category-selected" : "header-category"}>
                PRODUCTOS
                </NavLink>
                </div>
            <div className='header-item'>
                <NavLink to='/escuela' className={({isActive})=>isActive ? "header-category-selected" : "header-category"}>
                ESCUELA DE CAUCIÓN 
                </NavLink>
            </div>
            <div className='header-item'>
                <NavLink to='/contacto' className={({isActive})=>isActive ? "header-category-selected" : "header-category"}>
                CONTACTO
                </NavLink>
            </div>
            <div className='header-item'>
            <NavLink to='' className='header-category-special'>
            AFZ.ONLINE
            </NavLink></div>
            </div>
        </div>      
    </div>
    </BrowserView>
    <MobileView>
        <MobileMenu open={open} location={location} handleClick={handleClick} />
    </MobileView>
    </div>

  )
}

export default Header
