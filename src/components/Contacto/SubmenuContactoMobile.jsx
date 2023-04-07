import { Link } from 'react-router-dom'
import '../Nosotros/mobilesubmenu.css'


const SubmenuContactoMobile = ({handleClick, change, contactCategory, workButton}) => {
  

  return (
    <>
        <div className='sub-menu-box-contacto'>
             <h5 className={change === false ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={handleClick}>{contactCategory}</h5>
              <h5 className={change === true ? 'menu-item-selected-mobile': 'menu-item-mobile'} onClick={handleClick}>{workButton}</h5>
            <Link to="/">
              <h5 className='item-home-mobile'>HOME</h5>
            </Link>
        </div> 
    </>
  )
}

export default SubmenuContactoMobile