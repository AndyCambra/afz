import React from 'react'

const HorizontalPhoto = ({img, title}) => {
  return (
    <div className='product-photo'>
        <img className='product-photo' src={img} alt={title} />
        </div>
  )
}

export default HorizontalPhoto