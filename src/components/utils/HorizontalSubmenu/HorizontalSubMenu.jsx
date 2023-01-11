import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import './horizontalSubMenu.css'
import { useState } from 'react'
import { useImperativeHandle } from 'react'

const HorizontalSubMenu = forwardRef(({title, text},ref) => {
  const [isActive, setIsActive]=useState(false)
  const [goTo, setGoTo]=useState('')

  useImperativeHandle(ref, () => ({
    empresa: () => setGoTo("#section1") })
  );

 const handleClick=() => {
  setIsActive(!isActive)
  } 
  return (
    <>
        <div className='subMenuBox'>
            <Link to={goTo} onClick={handleClick} className={isActive?'menu-item':"menu-item-selected"}>
            <p>EMPRESA</p>
            </Link>
            <h5 className='menu-item'>|</h5>
            <h5 className='menu-item'>EQUIPO</h5>
            <h5 className='menu-item'>|</h5>
            <h5 className='menu-item'>REASEGURADORES</h5>
            <h5 className='menu-item'>|</h5>
            <h5 className='menu-item'>COMPROMISO</h5>
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