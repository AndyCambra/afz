import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './landing.css'
import products from'../utils/Texts/products.json'
import { useState } from 'react'

const Landing = () => {
    const [product, setProduct]=useState({})
    const handleClick= id =>{
        let pro= products.find(oneProduct=> oneProduct.id === id)
        setProduct(pro)
    }

    return (
        <div>
        <div className='landing-backgound'>
          <div  className='landing-hero'>
            <ProductMenu handleClick={handleClick} id={product?.id} />
            <div className='landing-title'>
            <h1>El seguro que caución<br></br>que necesitás está acá.</h1>
            </div>
          </div>
        </div>
        </div>
        
        
      )
  
}

export default Landing