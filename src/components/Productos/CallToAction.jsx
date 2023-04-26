import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'

export const CallToAction = ({name, callToAction}) => {
  return (
    <div className='call-to-action'>     
    <Link to='/contacto' >
    <BigButton name={name} className="small-button-call"/>
    </Link>
    <p>{callToAction}</p>
</div>
  )
}
