import React, { useState, useEffect } from 'react'
import './productos.css'
import products from'../utils/Texts/products.json'
import Title from '../utils/Title/Title'
import TextComponent from '../utils/TextComponent.jsx/TextComponent'
import Requisites from '../utils/Requisites/Requisites'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'

const productFake=[
  { id:11,
    title: "ADUANERA",
    text: 'Dadas ciertas condiciones, algunas operaciones aduaneras admiten que se exceptúe o posponga el pago de tributos al comercio exterior. Estas excepciones se otorgan a condición de que el importador/exportador cumpla determinados requisitos y ofrezca una garantía para el caso de no cumplimiento. El seguro de caución es la opción más ágil y económica para obligaciones como:',
    requisitesText1: "De acuerdo al tipo de operación se requerirá información sobre el origen de las mercaderías, destino, plazos o cualquier otro detalle que colabore con la comprensión del negocio que se solicita cubrir.",
    requisitesText2: "Si es una sociedad, copia del último balance. Si es una persona física, resumen de los montos facturados durante los últimos 12 meses e información sobre activos. Solamente si es la primera vez que opera con nosotros.",
    requisitesText3: "De acuerdo a la evaluación del riesgo a garantizar.",
    img: './img/Aduaneras.jpg',
   }
]

const Productos = () => {
  const [product, setProduct]=useState()
  
  const handleClick=(i)=>{
  const pro= products.find(oneProduct=> oneProduct.id === i)
  console.log(pro)
 }  


  return (
    <>
    <div className='product-background'>
      <div className='product-content'>
        <div className='product-box'>    
            <div className='menu-box'>
                <h6 className='menu-link' onClick={handleClick(1)}>OBRAS | SUMINISTROS | SERVICIOS</h6>
                <h6 className='menu-link' onClick={() => this.handleClick(2)}>ADUANERAS</h6>
                <h6 className='menu-link'>JUDICIALES</h6>
                <h6 className='menu-link'>EXTERIOR</h6>
                <h6 className='menu-link'>ALQUILER</h6>
                <h6 className='menu-link'>DIRECTORES | ACTIVIDADES | PROFESIONES</h6>
                <h6 className='menu-link'>DESCARGAR FORMULARIOS</h6>
                <h6 className='home-menu-link'>HOME</h6>
                <div>
                <h6 className='last-menu-link'>PÓLIZA DIGITAL</h6>
                </div>
            </div>
            
            <Title title={productFake[0].title}/>
            <TextComponent text={productFake[0].text} />
            <Requisites requisitesText1={productFake[0].requisitesText1} 
                        requisitesText2={productFake[0].requisitesText2} 
                        requisitesText3={productFake[0].requisitesText3} />
                 
          </div>
        <HorizontalPhoto img={productFake[0].img} alt={productFake[0].title} />
        </div>
    </div>
        
    </>
  )
}

export default Productos
