import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import '../../Productos/productos.css'
import './productmenu.css'


const ProductMenu = () => {
const {id} = useParams()

return(
    <div className='menu-box'>
    <Link className={parseInt(id) === 1 ? "menu-link-selected" :'menu-link'} to='/productos/1'>GARANTÍAS DE OBRAS | SUMINISTROS | SERVICIOS</Link>
    <Link className={parseInt(id) === 2 ? "menu-link-selected" :'menu-link'} to='/productos/2'>GARANTÍAS ADUANERAS</Link>
    <Link className={parseInt(id) === 3 ? "menu-link-selected" :'menu-link'} to='/productos/3'>GARANTÍAS JUDICIALES</Link>
    <Link className={parseInt(id) === 4 ? "menu-link-selected" :'menu-link'} to='/productos/4'>GARANTÍAS DE EXTERIOR</Link>
    <Link className={parseInt(id) === 5 ? "menu-link-selected" :'menu-link'} to='/productos/5'>GARANTÍAS DE ALQUILER</Link>
    <Link className={parseInt(id) === 6 ? "menu-link-selected" :'menu-link'} to='/productos/6'>GARANTÍAS DE DIRECTORES</Link>
    <Link className={parseInt(id) === 7 ? "menu-link-selected" :'menu-link'} to='/productos/7'>GARANTÍAS DE ACTIVIDADES | PROFESIONES</Link>
    <NavLink to='/productos/descargar-formularios' className={({isActive})=>isActive ? 'menu-link-selected' :'menu-link'}>DESCARGAR FORMULARIOS</NavLink>
    <Link to='/' className='home-menu-link'>HOME</Link>
    <div>
    <NavLink to='/productos/poliza-digital' className={({isActive})=>isActive ? 'last-menu-link-selected' :'last-menu-link'}>PÓLIZA DIGITAL</NavLink>
    </div>
    
    </div>
)}
export default ProductMenu