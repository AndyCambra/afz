import React from 'react'


const HorizontalPhoto = ({img, title}) => {
  return (
    <> 
      <img className='product-photo' src={img} alt={title} />
    </>
  )
}

export default HorizontalPhoto