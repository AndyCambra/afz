import React from 'react'

const HorizontalPhoto = ({img, title}) => {
  return (
    <div className='product-photo'>
        <img src={img} alt={title} />
        </div>
  )
}

export default HorizontalPhoto