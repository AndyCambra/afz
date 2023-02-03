import React from 'react'
import { useEffect } from 'react'

const Title = ({title}) => {
   

    useEffect(()=>{
     
    },[])
  return (
    <div className='title-box'>
    <div className='product-titles'>
    <p className='product-subtitle'>GARANTÍA</p>
    <h5 className='product-title'>{title}</h5>
    </div>
    <div className='requisites-title'>
    <p className='product-subtitle'>REQUISITOS</p>
    </div>
  </div>
  )
}

export default Title