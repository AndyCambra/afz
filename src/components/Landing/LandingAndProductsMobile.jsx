import React from 'react'
import { Icon } from '@iconify/react'
import { productsMobile } from '../utils/Texts/productsMobile'
import ProductTitleMobile from './ProductTitleMobile'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'


const LandingAndProductsMobile = ({handleClick}) => {

  return (
    <>
    <div className='landing-backgound-mobile'>
         
    <div className='landing-title-mobile'>
    <h1>El seguro<br></br> de caución que necesitás está acá.</h1>
    <div className='icon-section'>
    <Icon icon="material-symbols:keyboard-arrow-down-rounded" className='down-arrow'/>
    </div>
   
  </div>
</div>
    { productsMobile.map((item, key)=>
        <ProductTitleMobile title={item.title} key={item.id} text={item.text} id={item.id}/>  
    )}  
    <div className='product-mobile-text'>
    <p className='claim-text'>Ingresá desde tu computadora para obtener información ampliada, requisitos y formularios descargables.</p>
    </div>
    <div className='call-mobile'>
          <p><Link to='/contacto' >
          <BigButton name='CONTACTATE' className="small-button-call-mobile"/>
          </Link></p>
          <p>CON NOSOTROS O A TRAVÉS DE TU PRODUCTOR<br></br> ASESOR DE SEGUROS</p>
          </div> 
</>
  )
}

export default LandingAndProductsMobile