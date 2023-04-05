import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import '../../Productos/productos.css'
import './productmenu.css'

const ProductMenu = ({category1, category2, category3, category4, category5, category6, category7, category8, category9}) => {
const {id} = useParams()

return(
    <div className='menu-box'>
    <Link className={parseInt(id) === 1 ? "menu-link-selected" :'menu-link'} to='/productos/1'>{category1}</Link>
    <Link className={parseInt(id) === 2 ? "menu-link-selected" :'menu-link'} to='/productos/2'>{category2}</Link>
    <Link className={parseInt(id) === 3 ? "menu-link-selected" :'menu-link'} to='/productos/3'>{category3}</Link>
    <Link className={parseInt(id) === 4 ? "menu-link-selected" :'menu-link'} to='/productos/4'>{category4}</Link>
    <Link className={parseInt(id) === 5 ? "menu-link-selected" :'menu-link'} to='/productos/5'>{category5}</Link>
    <Link className={parseInt(id) === 6 ? "menu-link-selected" :'menu-link'} to='/productos/6'>{category6}</Link>
    <Link className={parseInt(id) === 7 ? "menu-link-selected" :'menu-link'} to='/productos/7'>{category7}</Link>
    <NavLink to='/productos/descargar-formularios' className={({isActive})=>isActive ? 'menu-link-selected' :'menu-link'}>{category8}</NavLink>
    <Link to='/' className='home-menu-link'>HOME</Link>
    <div>
    <NavLink to='/productos/poliza-digital' className={({isActive})=>isActive ? 'last-menu-link-selected' :'last-menu-link'}>{category9}</NavLink>
    </div>
    
    </div>
)}
export default ProductMenu