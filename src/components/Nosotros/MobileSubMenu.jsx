import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'
import './mobilesubmenu.css'
import { useState } from 'react'

const MobileSubMenu = forwardRef(({title, reinsurersRef, usRef, comRef, teamRef}, ref) => {
  const [isActive, setIsActive]=useState(false)

 const handleClick = nextRef => {
    setIsActive(!isActive)
    console.log(nextRef)
    nextRef?.current?.scrollIntoView({ behavior: "smooth" });
  } 

  return (
    <>
        <div className='sub-menu-box' ref={ref}>
            <Link>
             <h5 className={title==="LA EMPRESA" ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={() => handleClick(usRef)}>EMPRESA</h5>
            </Link>
            
            <Link>
              <h5 className={title==="EL EQUIPO" ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={() => handleClick(teamRef)}>EQUIPO</h5>
            </Link>
            
            <Link>
              <h5 className={title==="REASEGURADORES" ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={() => handleClick(reinsurersRef)}>REASEGURADORES</h5>
            </Link>
           
            <Link>
              <h5 className={title==="NUESTRO COMPROMISO" ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={() => handleClick(comRef)}>COMPROMISO</h5>
            </Link>
           
            <Link to="/">
              <h5 className='item-home-mobile'>HOME</h5>
            </Link>
        </div>
        
        </>
  )
})

export default MobileSubMenu