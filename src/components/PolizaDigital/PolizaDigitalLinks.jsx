import React from 'react'

const PolizaDigitalLinks = ({caracter, title, link, linkName}) => {
  return (
    <div><div className='digital-item'>
    <div className='caracter'>{caracter}</div>
    <div className='digital-grey'><p>{title}</p></div>
  </div>
  <div className='digital-links'>
    <a href={link} rel="noreferrer" target="_blank">{link}</a>
  </div>
  </div>
  )
}

export default PolizaDigitalLinks