import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'
import './horizontalSubMenu.css'
import { useState } from 'react'

const HorizontalSubMenu = forwardRef(({title, text, reinsurersRef, usRef, comRef, teamRef}, ref) => {
  const [isActive, setIsActive]=useState(false)

 const handleClick = nextRef => {
    setIsActive(!isActive)
    console.log(nextRef)
    nextRef?.current?.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <>
        <div className='subMenuBox' ref={ref}>
            <Link>
             <h5 className={isActive?'menu-item-selected':"menu-item"} onClick={() => handleClick(usRef)}>EMPRESA</h5>
            </Link>
            <h5 className='menu-item'>|</h5>
            <Link>
              <h5 className='menu-item' onClick={() => handleClick(teamRef)}>EQUIPO</h5>
            </Link>
            <h5 className='menu-item'>|</h5>
            <Link>
              <h5 className={isActive?'menu-item-selected':"menu-item"} onClick={() => handleClick(reinsurersRef)}>REASEGURADORES</h5>
            </Link>
            <h5 className='menu-item'>|</h5>
            <Link>
              <h5 className='menu-item' onClick={() => handleClick(comRef)}>COMPROMISO</h5>
            </Link>
            <h5 className='menu-item'>|</h5>
            <Link to="/">
              <h5 className='menu-item-home'>HOME</h5>
            </Link>
        </div>
        <h5 className='horizontalTitle'>{title}</h5>
        <p className='horizontalText'>{text}</p>
        
        </>
  )
})

export default HorizontalSubMenu