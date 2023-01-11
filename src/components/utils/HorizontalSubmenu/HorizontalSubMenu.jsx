import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './horizontalSubMenu.css'
import { useState } from 'react'

const HorizontalSubMenu = forwardRef(({title, text},ref) => {
  const [isActive, setIsActive]=useState(false)

 const handleClick=() => {
  setIsActive(!isActive)
  } 
  return (
    <>
        <div className='subMenuBox'>
            <Link to={ref={ref}} onClick={handleClick}>
            <h5>EMPRESA</h5>
            </Link>
            <h5>|</h5>
            <h5>EQUIPO</h5>
            <h5>|</h5>
            <h5>REASEGURADORES</h5>
            <h5>|</h5>
            <h5>COMPROMISO</h5>
            <Link to="/">
            <h5>HOME</h5>
            </Link>
        </div>
        <h5 className='horizontalTitle'>{title}</h5>
        <p className='horizontalText'>{text}</p>
        
        </>
  )
})

export default HorizontalSubMenu