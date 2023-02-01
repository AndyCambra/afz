import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { useState } from 'react'
import { useLocation } from 'react-router-dom'



const Header = () => {
/* const [isActive, setIsActive] = useState(false) */
const location= useLocation()
console.log(location)
/*     const changeClass = () => {
    setIsActive(!isActive)
    }  */
/*     
    const handleChange = () => {
        setIsActive(false)
        } */

  return (
    <div className='headerBox'>
        <div className='headerIn'>
            <NavLink to="/"> 
            {location.pathname ==='/productos' ? (
                <img src="img/LogoAFZwbg.jpg" alt="Logo Afz" className='logoAfz' />
            ):(             
            <img src="img/logoAfz.png" alt="Logo Afz" className='logoAfz' />)}
            </NavLink>
            <div className='headerMenu'>
            <div className='headerItem'>
                <NavLink to="/nosotros" className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
               NOSOTROS
                </NavLink>
                </div>
            <div className='headerItem'>
                <NavLink to='/productos' className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
                PRODUCTOS
                </NavLink>
                </div>
            <div className='headerItem'>
                <NavLink to='' className={({isActive})=>isActive ? "headerCategorySelected" : "headerCategory"}>
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