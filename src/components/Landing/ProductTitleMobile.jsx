import React from 'react'
import { Icon } from '@iconify/react'
import { useState } from 'react';
import './landing.css'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'

const ProductTitleMobile = ({title, text, id}) => {
        const [isActive, setActive] = useState("false");
    
    const handleToggle = () => {
      setActive(!isActive);
     
    }
  return (
    <>
    <div className='title-box-mobile'>
            <div className='product-titles-mobile'>
                <p className='product-subtitle'>GARANTÍA</p>
                <h5 className='product-title-mobile'>{title}</h5>
            </div>
          
            <Icon icon="material-symbols:keyboard-arrow-down-rounded" className=  {isActive ? 'down-arrow-black down' : "rotate down"} onClick={handleToggle}/>
           
            </div>
             <div className={isActive ? "display-none" : 'product-mobile-text'}>
            <p>{text}</p>
            <div className={id===5? "button-section":"display-none"}><Link to='/cotizador-alquiler'><BigButton className="light-button" name={'COTIZÁ'} /></Link></div>
            <div className={id===6? "button-section":"display-none"} ><Link to='/cotizador-directores'><BigButton className="light-button" name={'COTIZÁ'} /></Link></div>
            </div>
            </>
  )
}

export default ProductTitleMobile

