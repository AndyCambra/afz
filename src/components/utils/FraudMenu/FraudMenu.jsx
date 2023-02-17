import React from 'react'
import { Link } from 'react-router-dom'

const FraudMenu = ({handleClick, handleClick2, className, className2}) => {
  return (
    <div className='menu-box'>
    <Link className={className}  onClick={()=>handleClick()}>LA POLÍTICA ANTIFRAUDE Y SU INFLUENCIA EN LA COMPETITIVIDAD</Link>
    <Link className={className2}  onClick={()=>handleClick2()}>CLAVES PARA EVITAR EL FRAUDE</Link>
    <Link to='/' className='home-menu-link'>HOME</Link>
    </div>
  )
}

export default FraudMenu