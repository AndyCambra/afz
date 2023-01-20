import React, { useState } from 'react'
import './productos.css'
const product=[
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
  /* const [product, setProduct]=useState() */
 /*  const handleClick=()=>{
    setProduct()
  } */
  return (
    <>
    <div className='product-background'>
      <div className='product-content'>
        <div className='product-box'>    
            <div className='menu-box'>
                <h6 className='menu-link'>OBRAS | SUMINISTROS | SERVICIOS</h6>
                <h6 className='menu-link' /* onClick={handleClick} */>ADUANERAS</h6>
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
            
              <div className='title-box'>
                <div className='product-titles'>
                <p className='product-subtitle'>GARANTÍA</p>
                <h5 className='product-title'>{product[0].title}</h5>
                </div>
                <div className='requisites-title'>
                <p className='product-subtitle'>REQUISITOS</p>
                </div>
              </div>

          
              <div className='product-text'>
                  <p>{product[0].text}</p>
              </div>
              <div className='requisites'>
                <div className='requisites-box'>
                <h6 className='requisites-subtitle'>Información sobre la obligación a garantizar</h6>
                  <p>{product[0].requisitesText1}</p>
                  </div>
                  <div className='requisites-box'>
                  <h6 className='requisites-subtitle'>Información sobre el contratante</h6>
                  <p>{product[0].requisitesText2}</p>
                  </div>
                  <div className='requisites-box'>
                  <h6 className='requisites-subtitle'>Información adicional</h6>
                  <p>{product[0].requisitesText3}</p>
                  </div>
              </div> 
              
                    
    </div>
    <div className='product-photo'>
        <img src={product[0].img} alt={product[0].title} />
        </div>
        </div>
    </div>
        
    </>
  )
}

export default Productos
