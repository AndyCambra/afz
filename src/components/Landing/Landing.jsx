import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './landing.css'
import { useState } from 'react'
import { MobileView, BrowserView } from 'react-device-detect'
import LandingAndProductsMobile from './LandingAndProductsMobile'
import productTexts from '../utils/Texts/productText.json'
import { useLangContext } from '../../Context/LangContext'


const Landing = () => {
    const [product, setProduct]=useState({})
    const {selectedLanguage} = useLangContext()
    const text = productTexts[selectedLanguage];
    

    const handleClick= id =>{
        let pro= text.products.find(oneProduct=> oneProduct.id === id)
        setProduct(pro)
    }

    return (
        <div>
          <BrowserView>
        <div className='landing-backgound'>
          <div  className='landing-hero'>
            <ProductMenu handleClick={handleClick} id={product?.id} category1={text.productMenu.category1} category2={text.productMenu.category2} category3={text.productMenu.category3} category4={text.productMenu.category4} 
            category5={text.productMenu.category5} category6={text.productMenu.category6} category7={text.productMenu.category7} category8={text.productMenu.category8} category9={text.productMenu.category9} />
            <div className='landing-title'>
            <h1>{text.landingTitle1}<br></br>{text.landingTitle2}</h1>
            </div>
          </div>
        </div>
        </BrowserView>
        <MobileView>
          <LandingAndProductsMobile productsMobile={text.productsMobile} claim={text.claim} titleMobile1={text.titleMobile1} titleMobile2={text.titleMobile2} callToActionMobile1={text.callToActionMobile1} callToActionMobile2={text.callToActionMobile2} callToActionButton={text.callToActionButton} subtitle={text.productSubtitle} name={text.button}/>
        </MobileView>
        </div>
        
        
      )
  
}

export default Landing