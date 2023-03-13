import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../BigButton/BigButton'

const HorizontalPhoto = ({img, title}) => {
  return (
    <>
      <div className='call-to-action'>
        <div className='call-grid'>
          <div className='call-link'>
          <p><Link to='/contacto' >
          <BigButton name='CONTACTATE' className="small-button-call"/>
          </Link></p>
          <p>CON NOSOTROS O A TRAVÉS DE TU PRODUCTOR ASESOR DE SEGUROS</p>
          </div>
        </div> 
      </div>
      <img className='product-photo' src={img} alt={title} />
    </>
  )
}

export default HorizontalPhoto