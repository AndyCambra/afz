import React from 'react'
import { Icon } from '@iconify/react'
import ProductTitleMobile from './ProductTitleMobile'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'


const LandingAndProductsMobile = ({claim,titleMobile1,titleMobile2, callToActionMobile1, callToActionMobile2,callToActionButton, productsMobile, subtitle, name}) => {

  return (
    <>
    <div className='landing-backgound-mobile'>
         
    <div className='landing-title-mobile'>
    <h1>{titleMobile1}<br></br>{titleMobile2}</h1>
    <div className='icon-section'>
    <Icon icon="material-symbols:keyboard-arrow-down-rounded" className='down-arrow'/>
    </div>
   
  </div>
</div>
    { productsMobile.map((item, key)=>
        <ProductTitleMobile title={item.title} key={item.id} text={item.text} id={item.id} subtitle={subtitle} name={name}/>  
    )}  
    <div className='product-mobile-text'>
    <p className='claim-text'>{claim}</p>
    </div>
    <div className='call-mobile'>
          <p><Link to='/contacto' >
          <BigButton name={callToActionButton} className="small-button-call-mobile"/>
          </Link></p>
          <p>{callToActionMobile1}<br></br>{callToActionMobile2}</p>
          </div> 
</>
  )
}

export default LandingAndProductsMobile