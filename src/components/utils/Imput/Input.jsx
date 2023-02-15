import React from 'react'
import './input.css'

const Input = ({name, className, value, handleChange, placeholder, type, required}) => {
  return (
   <input name={name} className={className} value={value} type={type} onChange={handleChange} placeholder={placeholder} required={required}/>
  )
}

export default Input