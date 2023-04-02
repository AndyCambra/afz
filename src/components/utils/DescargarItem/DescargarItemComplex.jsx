import React from 'react'
import { Icon } from '@iconify/react'
import { useState } from 'react';

const DescargarItemComplex = ({ title ,text, fileDownload}) => {
    const [isActive, setActive] = useState("false");
    
    const handleToggle = () => {
      setActive(!isActive);
    }
   
  return (
    <>
    <div className='grey-box'>
    <div className='grey-item-icon'>
      <h6>{title}</h6>
    </div>
    <div className={text? 'icons':"display-none"} onClick={handleToggle}  >
      {isActive ? 
      <Icon icon="ic:baseline-plus" className='icon-on-grey' />
      :
      <Icon icon="ic:baseline-minus" className='icon-on-grey' />}
    </div>
    <div className={fileDownload ? 'icons-download' : 'display-none'}>
    <a href={fileDownload} target="_blank" rel="noopener noreferrer" download={fileDownload}> 
      <Icon icon="gg:software-download" className='icon-on-grey' />
      </a>
    </div>
    </div>
     <div className={isActive ? "display-none" : 'show-text' }>
     <p>{text}</p>
   </div>
   </>
  )
}

export default DescargarItemComplex

