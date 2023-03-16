import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './descargarform.css'
import DescargarItem from '../utils/DescargarItem/DescargarItem'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'
import { formTexts } from '../utils/Texts/downloadForms'
import '../utils/ProductMenu/productmenu.css'


const DescargarFormularios = () => {
 
  return (
    <div className='forms-background'>
      <div className='forms-content'>
        <div className='form-box'> 
        <div>
            <ProductMenu /> 
            </div>  
            <h5 className='form-title'>{formTexts.title}</h5>
            <div className='first-col'>
              <p>{formTexts.firstText}</p>
              </div>
              <div className='first-col-second-part'>
               <DescargarItem title="Último balance" />
               <DescargarItemComplex title="Formulario de Solicitud Convenio" text="Este formulario es utilizado en conjunto con el “Aval” y se utiliza para describir los bienes patrimonio del avalista. Deberá ser firmado por el avalista, y con certificación de Contador Público acerca de la veracidad de los valores expresados en el formulario."/>
                <DescargarItem title="Información de Facturación (CUIT, Ingresos Brutos, etc.)" />              
                </div>
            
            <div className='second-col'>
                  <p>{formTexts.secondText}</p>
                  </div>
                  <div className='second-col-second-part'>
                  <DescargarItemComplex title="Formulario de Solicitud Convenio" text="Este formulario es utilizado en conjunto con el “Aval” y se utiliza para describir los bienes patrimonio del avalista. Deberá ser firmado por el avalista, y con certificación de Contador Público acerca de la veracidad de los valores expresados en el formulario."/>
                  <DescargarItemComplex title="Formulario de Aval" text="Compromete al firmante (avalista) a responder con su patrimonio en caso de incumplimiento del avalado (Tomador). Deberá ser firmado por el avalista y su cónyuge, ambos por derecho propio, lo cual deberá constar en la certificación ante escribano. En caso que el avalista sea otra empresa, deberá ser firmado por el titular un apoderado de la misma, con facultades suficientes para dicho acto, lo cual deberá constar en la certificación ante escribano." />
                  <DescargarItemComplex title= "Detalle de Deudas" text="Nos brinda información acerca de los pasivos de la empresa, en cuanto a montos, plazos y características. Deberá ser firmado por el titular de la empresa con certificación de Contador Público" /> 
            </div>
            <div className='tirth-col'>
              <p>{formTexts.finalText}</p>
            </div>
            <div className='tirth-col-second-part'> 
              <DescargarItemComplex title="Personas Físicas" />
              <DescargarItemComplex title="Personas Jurídicas" />

            </div>
             
          </div>
   <img src="/img/DescargarForm.jpg" alt="Descargar Formularios" className='forms-photo'/>
      </div>
    </div>
  )
}

export default DescargarFormularios