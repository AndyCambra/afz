import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'
import './horizontalSubMenu.css'
import { useState } from 'react'

const HorizontalSubMenu = forwardRef(({title, text, reinsurersRef, usRef}, ref) => {
  const [isActive, setIsActive]=useState(false)

 const handleClick = nextRef => {
    setIsActive(!isActive)
    console.log(nextRef)
    nextRef?.current?.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <>
        <div className='subMenuBox' ref={ref}>
            <Link onClick={() => handleClick(usRef)} className={isActive?'menu-item':"menu-item-selected"}>
              <p>EMPRESA</p>
            </Link>
            <h5 className='menu-item'>|</h5>
            <h5 className='menu-item'>EQUIPO</h5>
            <h5 className='menu-item'>|</h5>
            <Link onClick={() => handleClick(reinsurersRef)} className={isActive?'menu-item':"menu-item-selected"}>
              <p>REASEGURADORES</p>
            </Link>
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