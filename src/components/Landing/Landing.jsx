import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './landing.css'
import products from'../utils/Texts/products.json'
import { useState } from 'react'
import { MobileView, BrowserView } from 'react-device-detect'
import LandingAndProductsMobile from './LandingAndProductsMobile'


const Landing = () => {
    const [product, setProduct]=useState({})
    const handleClick= id =>{
        let pro= products.find(oneProduct=> oneProduct.id === id)
        setProduct(pro)
    }

    return (
        <div>
          <BrowserView>
        <div className='landing-backgound'>
          <div  className='landing-hero'>
            <ProductMenu handleClick={handleClick} id={product?.id} />
            <div className='landing-title'>
            <h1>El seguro de caución<br></br>que necesitás está acá.</h1>
            </div>
          </div>
        </div>
        </BrowserView>
        <MobileView>
          <LandingAndProductsMobile />
        </MobileView>
        </div>
        
        
      )
  
}

export default Landing