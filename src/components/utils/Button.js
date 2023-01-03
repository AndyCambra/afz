import React from 'react'
import './button.css'

const Button = ({name}) => {
  return (
    <button className='bigButton' type="button">{name}</button>
  )
}

export default Button