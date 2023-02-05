import React, { useState, useEffect } from 'react'
import './productos.css'
import products from'../utils/Texts/products.json'
import Title from '../utils/Title/Title'
import TextComponent from '../utils/TextComponent.jsx/TextComponent'
import Requisites from '../utils/Requisites/Requisites'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'
import ListComponent from '../utils/TextComponent.jsx/ListComponent'
import SubTextComponent from '../utils/TextComponent.jsx/SubTextComponent'
import BigButton from '../utils/BigButton/BigButton'
import ProductMenu from '../utils/ProductMenu/ProductMenu'


const Productos = () => {
  const [product, setProduct]=useState({})
  const [lastUpdatedId, setLastUpdatedId] = React.useState(undefined);
  
 
  useEffect(() => {
    setProduct(products[0]);   
  }, []);
 
  useEffect(() => {
    setLastUpdatedId();
  }, [lastUpdatedId]);

  const handleClick= id =>{
    let pro= products.find(oneProduct=> oneProduct.id === id)
    setProduct(pro)

    if (lastUpdatedId !== id) {
      // If it's different: just set it and we are done.
      setLastUpdatedId(id);
    } 
    }

  
  return (
    <>
    <div className={product.id === 1 ? "product-background-extra":'product-background'}>
      <div className='product-content'>
        <div className='product-box'>   
          <ProductMenu  handleClick={handleClick} id={product?.id} /> 
            <Title title={product.title}/>
            <div className='product-text'>
            <TextComponent text={product.text}/>
            <div className={product.id===2? "list":"display-none"}><ListComponent /></div>
            <div className={product.id===1? "extra-text":"display-none"}><SubTextComponent /></div>
            <div className={product.id===5? "product-button":"display-none"}><BigButton className="light-button" name={'COTIZÁ'} /></div>
            <div className={product.id===6? "product-button":"display-none"}><BigButton className="light-button" name={'COTIZÁ'} /></div>
            </div>
            <Requisites requisitesText1={product.requisitesText1} 
                        requisitesText2={product.requisitesText2} 
                        requisitesText3={product.requisitesText3} 
                        isLastUpdated={lastUpdatedId === product.id}/>
                 
          </div>
        <HorizontalPhoto img={product.img} alt={product.title} />
        </div>
    </div>
        
    </>
  )
}

export default Productos
