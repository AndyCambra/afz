import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../BigButton/BigButton'

const HorizontalPhoto = ({img, title, callToAction, name}) => {
  return (
    <>
      <div className='call-to-action'>
        <div className='call-grid'>
          <div className='call-link'>
          <p><Link to='/contacto' >
          <BigButton name={name} className="small-button-call"/>
          </Link></p>
          <p>{callToAction}</p>
          </div>
        </div> 
      </div>
      <img className='product-photo' src={img} alt={title} />
    </>
  )
}

export default HorizontalPhoto