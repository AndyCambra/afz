import React from 'react'
import { NavLink } from 'react-router-dom'
import './horizontalSubMenu.css'

const HorizontalSubMenu = ({title, text}) => {
  return (
    <>
        <div className='subMenuBox'>
            <h5>EMPRESA</h5>
            <h5>|</h5>
            <h5>EQUIPO</h5>
            <h5>|</h5>
            <h5>REASEGURADORES</h5>
            <h5>|</h5>
            <h5>COMPROMISO</h5>
            <NavLink to="/">
            <h5>HOME</h5>
            </NavLink>
        </div>
        <h5 className='horizontalTitle'>{title}</h5>
        <p className='horizontalText'>{text}</p>
        
        </>
  )
}

export default HorizontalSubMenu