import React from 'react'

const PolizaDigitalLinks = ({caracter, title, link, linkName}) => {
    <a style={{display: "table-cell"}} href="someLink" target="_blank">text</a>
  return (
    <div><div className='digital-item'>
    <div className='caracter'>{caracter}</div>
    <div className='digital-grey'><p>{title}</p></div>
  </div>
  <div className='digital-links'>
    <a href={link}>{link}</a>
  </div>
  </div>
  )
}

export default PolizaDigitalLinks