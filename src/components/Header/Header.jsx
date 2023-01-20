import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { useState } from 'react'



const Header = () => {
const [isActive, setIsActive] = useState(false)

    const changeClass = () => {
    setIsActive(!isActive)
    } 
    
    const handleChange = () => {
        setIsActive(false)
        }

  return (
    <div className='headerBox'>
        <div className='headerIn'>
            <NavLink to="/" onClick={handleChange}>
            <img src="img/logoAfz.png" alt="Logo Afz" className='logoAfz' />
            </NavLink>
            <div className='headerMenu'>
            <div className='headerItem'>
                <NavLink to="/nosotros">
                <h4 className={isActive ? "headerCategorySelected" : "headerCategory"} onClick={changeClass}>NOSOTROS</h4>
                </NavLink>
                </div>
            <div className='headerItem'>
                <NavLink to='/productos'>
                <h4 className='headerCategory'>PRODUCTOS</h4>
                </NavLink>
                </div>
            <div className='headerItem'>
            <h4 className='headerCategory'>ESCUELA DE CAUCIÓN</h4>
            </div>
            <div className='headerItem'>
                <h4 className='headerCategory'>CONTACTO</h4></div>
            <div className='headerItem'>AFZ.ONLINE</div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Header