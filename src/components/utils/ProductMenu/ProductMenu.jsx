import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../Productos/productos.css'


const ProductMenu = () => {
const {id} = useParams()

return(
    <div className='menu-box'>
    <Link className={parseInt(id) === 1 ? "menu-link-selected" :'menu-link'} to='/productos/1' >OBRAS | SUMINISTROS | SERVICIOS</Link>
    <Link className={parseInt(id) === 2 ? "menu-link-selected" :'menu-link'} to='/productos/2'>ADUANERAS</Link>
    <Link className={parseInt(id) === 3 ? "menu-link-selected" :'menu-link'} to='/productos/3'>JUDICIALES</Link>
    <Link className={parseInt(id) === 4 ? "menu-link-selected" :'menu-link'} to='/productos/4'>EXTERIOR</Link>
    <Link className={parseInt(id) === 5 ? "menu-link-selected" :'menu-link'} to='/productos/5'>ALQUILER</Link>
    <Link className={parseInt(id) === 6 ? "menu-link-selected" :'menu-link'} to='/productos/6'>DIRECTORES | ACTIVIDADES | PROFESIONES</Link>
    <Link to='/productos/descargar-formularios' className='menu-link'>DESCARGAR FORMULARIOS</Link>
    <Link to='/' className='home-menu-link'>HOME</Link>
    <div>
    <Link to='/poliza-digital' className='last-menu-link'>PÓLIZA DIGITAL</Link>
    </div>
    
    </div>
)}
export default ProductMenu