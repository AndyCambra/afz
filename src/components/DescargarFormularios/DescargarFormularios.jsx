import React from 'react'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './descargarform.css'
import DescargarItem from '../utils/DescargarItem/DescargarItem'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'

const DescargarFormularios = () => {
 
  return (
    <div className='forms-background'>
      <div className='forms-content'>
        <div className='form-box'>   
            <ProductMenu /> 
            <h5 className='form-title'>APERTURAS DE CARPETAS Y FORMULARIOS</h5>
            <div className='first-col'>
              <p>Para poder operar con nuestros clientes, necesitamos conocerlos para evaluar su capacidad de cumplir. Por ello es que debemos solicitar el armado de una carpeta con documentación, tratando de simplificar y facilitar al máximo este proceso, solicitando:</p>
               <DescargarItem title="Último balance" />
               <DescargarItemComplex title="Formulario de Solicitud Convenio" text="Este formulario es utilizado en conjunto con el “Aval” y se utiliza para describir los bienes patrimonio del avalista. Deberá ser firmado por el avalista, y con certificación de Contador Público acerca de la veracidad de los valores expresados en el formulario."/>
                <DescargarItem title="Estatuto o Contrato Social" />
                <DescargarItem title="Actas de Asamblea y de Directorio con distribución de cargos y utilidades" />
                <DescargarItem title="Información de Facturación (CUIT, Ingresos Brutos, etc.)" />              
            </div>
            <div className='second-col'>
                  <p>En algunos casos, según sea la forma jurídica de la persona que contrata el seguro, o por necesidad del riesgo a cubrir, podrá solicitarse también:</p>
                  <DescargarItemComplex title="Formulario de Solicitud Convenio" text="Este formulario es utilizado en conjunto con el “Aval” y se utiliza para describir los bienes patrimonio del avalista. Deberá ser firmado por el avalista, y con certificación de Contador Público acerca de la veracidad de los valores expresados en el formulario."/>
                  <DescargarItemComplex title="Formulario de Aval" text="Compromete al firmante (avalista) a responder con su patrimonio en caso de incumplimiento del avalado (Tomador). Deberá ser firmado por el avalista y su cónyuge, ambos por derecho propio, lo cual deberá constar en la certificación ante escribano. En caso que el avalista sea otra empresa, deberá ser firmado por el titular un apoderado de la misma, con facultades suficientes para dicho acto, lo cual deberá constar en la certificación ante escribano." />
                  <DescargarItemComplex title= "Detalle de Deudas" text="Nos brinda información acerca de los pasivos de la empresa, en cuanto a montos, plazos y características. Deberá ser firmado por el titular de la empresa con certificación de Contador Público" /> 
            </div>
            <div className='tirth-col'>
              <p>A su vez, el Estado a través de la U.I.F. requiere a quien opere con nosotros, según sea su forma legal y la magnitud de los riesgos contratados, la cumplimentación de la siguiente documentación según Resolución 202/2015</p>
              <DescargarItemComplex title="Personas Físicas" />
              <DescargarItemComplex title="Personas Jurídicas" />

            </div>
             
          </div>
        <HorizontalPhoto img="/img/DescargarForm.jpg" alt="Descargar Formularios"/>
      </div>
    </div>
  )
}

export default DescargarFormularios