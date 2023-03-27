import { Link } from 'react-router-dom'
import '../Nosotros/mobilesubmenu.css'
import { useLocation } from 'react-router-dom'


const SubmenuCotizadores = ({handleClick, change}) => {
    const location = useLocation()
  

  return (
    <>
        <div className='sub-menu-box-contacto'>
        <Link to="/cotizador-alquiler">
             <h5 className={location.pathname === '/cotizador-alquiler' ? 'menu-item-selected-mobile': 'menu-item-mobile'}>ALQUILER</h5>
             </Link>
             <Link to="/cotizador-directores">
              <h5 className={location.pathname === "/cotizador-directores" ? 'menu-item-selected-mobile': 'menu-item-mobile'} >DIRECTORES</h5>
              </Link>
            <Link to="/">
              <h5 className='item-home-mobile'>HOME</h5>
            </Link>
        </div> 
    </>
  )
}

export default SubmenuCotizadores