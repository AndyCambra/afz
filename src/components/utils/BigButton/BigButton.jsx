import React from 'react'
import './button.css'

const BigButton = ({name, className}) => {
  return (
    <button className={className} type="button">{name}</button>
  )
}

export default BigButton