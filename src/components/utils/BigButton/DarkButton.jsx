import React from 'react'
import './button.css'

const DarkButton = ({name}) => {
  return (
    <button className='dark-button' type="button">{name}</button>
  )
}

export default DarkButton