import React from 'react'
import { Link } from 'react-router-dom'

const FraudMenu = ({handleClick, className1, className2, fraudMenu1, fraudMenu2}) => {
  return (
    <div className='menu-box'>
    <Link className={className1}  onClick={()=>handleClick(1)}>{fraudMenu1}</Link>
    <Link className={className2}  onClick={()=>handleClick(2)}>{fraudMenu2}</Link>
    <Link to='/' className='home-menu-link'>HOME</Link>
    </div>
  )
}

export default FraudMenu