import React from 'react'
import { Link } from 'react-router-dom'
import './productmenu.css'

const ProductMenu = () => {
  return (
    <div className='menu-box'>
    <Link className='menu-link'>OBRAS | SUMINISTROS | SERVICIOS</Link>
    <Link className='menu-link'>ADUANERAS</Link>
    <Link className='menu-link'>JUDICIALES</Link>
    <Link className='menu-link'>EXTERIOR</Link>
    <Link className='menu-link'>ALQUILER</Link>
    <Link className='menu-link'>DIRECTORES | ACTIVIDADES | PROFESIONES</Link>
    <Link className='menu-link'>DESCARGAR FORMULARIOS</Link>
    <Link className='home-menu-link'>HOME</Link>
    <div>
    <Link className='last-menu-link'>PÓLIZA DIGITAL</Link>
    </div>
    
    </div>
  )
}

export default ProductMenu