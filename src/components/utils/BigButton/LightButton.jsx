import React from 'react'
import './button.css'

const LightButton = ({name}) => {
  return (
    <button className='light-button' type="button">{name}</button>
  )
}

export default LightButton