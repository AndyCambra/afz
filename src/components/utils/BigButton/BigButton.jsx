import React from 'react'
import './button.css'

const BigButton = ({name, className, type}) => {
  return (
    <button className={className} type={type}>{name}</button>
  )
}

export default BigButton