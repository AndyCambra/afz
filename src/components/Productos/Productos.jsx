import React, { useState, useEffect } from 'react'
import './productos.css'
import products from'../utils/Texts/products.json'
import Title from '../utils/Title/Title'
import TextComponent from '../utils/TextComponent.jsx/TextComponent'
import Requisites from '../utils/Requisites/Requisites'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'
import ListComponent from '../utils/TextComponent.jsx/ListComponent'
import SubTextComponent from '../utils/TextComponent.jsx/SubTextComponent'
import LightButton from '../utils/BigButton/LightButton'


const Productos = () => {
  const [product, setProduct]=useState({})
 
  useEffect(() => {
        setProduct(products[0]);   
  }, []);
 
  const handleClick=(i)=>{
 let pro= products.find(oneProduct=> oneProduct.id === i)
    setProduct(pro)
 } 


  return (
    <>
    <div className={product.id === 1 ? "product-background-extra":'product-background'}>
      <div className='product-content'>
        <div className='product-box'>    
            <div className='menu-box'>
                <h6 className={product.id === 1 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(1)}>OBRAS | SUMINISTROS | SERVICIOS</h6>
                <h6 className={product.id === 2 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(2)}>ADUANERAS</h6>
                <h6 className={product.id === 3 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(3)}>JUDICIALES</h6>
                <h6 className={product.id === 4 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(4)}>EXTERIOR</h6>
                <h6 className={product.id === 5 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(5)}>ALQUILER</h6>
                <h6 className={product.id === 6 ? "menu-link-selected" :'menu-link'} onClick={() => handleClick(6)}>DIRECTORES | ACTIVIDADES | PROFESIONES</h6>
                <h6 className='menu-link'>DESCARGAR FORMULARIOS</h6>
                <h6 className='home-menu-link'>HOME</h6>
                <div>
                <h6 className='last-menu-link'>PÓLIZA DIGITAL</h6>
                </div>
            </div>
            
            <Title title={product.title}/>
            <div className='product-text'>
            <TextComponent text={product.text}/>
            <div className={product.id===2? "list":"display-none"}><ListComponent /></div>
            <div className={product.id===1? "extra-text":"display-none"}><SubTextComponent /></div>
            <div className={product.id===5? "product-button":"display-none"}><LightButton name={'COTIZÁ'} /></div>
            <div className={product.id===6? "product-button":"display-none"}><LightButton name={'COTIZÁ'} /></div>
            </div>
            <Requisites requisitesText1={product.requisitesText1} 
                        requisitesText2={product.requisitesText2} 
                        requisitesText3={product.requisitesText3} />
                 
          </div>
        <HorizontalPhoto img={product.img} alt={product.title} />
        </div>
    </div>
        
    </>
  )
}

export default Productos
