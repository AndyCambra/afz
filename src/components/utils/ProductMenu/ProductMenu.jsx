import React from 'react'
import { Link } from 'react-router-dom'
import '../../Productos/productos.css'


const ProductMenu = ({handleClick, id}) => 
    <div className='menu-box'>
    <Link className={id === 1 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(1)} >OBRAS | SUMINISTROS | SERVICIOS</Link>
    <Link className={id === 2 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(2)}>ADUANERAS</Link>
    <Link className={id === 3 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(3)}>JUDICIALES</Link>
    <Link className={id === 4 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(4)}>EXTERIOR</Link>
    <Link className={id === 5 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(5)}>ALQUILER</Link>
    <Link className={id === 6 ? "menu-link-selected" :'menu-link'} onClick={()=>handleClick(6)}>DIRECTORES | ACTIVIDADES | PROFESIONES</Link>
    <Link className='menu-link'>DESCARGAR FORMULARIOS</Link>
    <Link className='home-menu-link'>HOME</Link>
    <div>
    <Link className='last-menu-link'>PÓLIZA DIGITAL</Link>
    </div>
    
    </div>

export default ProductMenu