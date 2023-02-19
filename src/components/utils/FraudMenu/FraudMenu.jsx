import React from 'react'
import { Link } from 'react-router-dom'

const FraudMenu = ({handleClick, className1, className2}) => {
  return (
    <div className='menu-box'>
    <Link className={className1}  onClick={()=>handleClick(1)}>LA POLÍTICA ANTIFRAUDE Y SU INFLUENCIA EN LA COMPETITIVIDAD</Link>
    <Link className={className2}  onClick={()=>handleClick(2)}>CLAVES PARA EVITAR EL FRAUDE</Link>
    <Link to='/' className='home-menu-link'>HOME</Link>
    </div>
  )
}

export default FraudMenu