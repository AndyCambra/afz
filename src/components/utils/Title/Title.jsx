import React from 'react'


const Title = ({title, requisitesTitle,subtitle}) => {
   
  return (
    <div className='title-box'>
    <div className='product-titles'>
    <p className='product-subtitle'>{subtitle}</p>
    <h5 className='product-title'>{title}</h5>
    </div>
    <div className='requisites-title'>
    <p className='product-subtitle'>{requisitesTitle}</p>
    </div>
  </div>
  )
}

export default Title