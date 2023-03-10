import React from 'react'
import { FraudItem } from './FraudItem'
import { Link } from 'react-router-dom'
import items from '../utils/Texts/secondFraudText'


const SecondFraudBox = () => {

  return (
    <div className='fraud-box'>  
        <div>
            <h5 className='fraud-subtitle'>RECOMENDACIONES</h5>
            {items.map((item, key)=>
            <FraudItem key={item.id} number={item.number} text={item.text}/>
            )}
        </div>
        <div className='second-boxes'>
            <h5 className='fraud-subtitle'>PARA TENER EN CUENTA</h5>
            <p className='second-text'>Sus coberturas pueden tener limitaciones en orden a ítems, riesgos o conceptos no cubiertos.</p>
            <Link to="/landing"><p className='second-mail'>Ver el listado de coberturas</p> </Link>
            <p className='second-text'>Para consultar acerca de oferta de coberturas de costo por debajo de la media del mercado por parte de comercializadores no autorizados, dirigirse a la Superintendencia de Seguros de la Nación. </p>
            <a href='https://www.argentina.gob.ar/superintendencia-de-seguros' rel="noreferrer" target="_blank" className='second-mail'>https://www.argentina.gob.ar/superintendencia-de-seguros</a> 
            <p className='second-text'>Si bien está permitido asegurar el mismo interés y el mismo riesgo con más de un asegurador, esto debe ser notificado a todas las entidades. No es lícito que la indemnización supere el monto del daño sufrido, como tampoco lo es perseguir el cobro respecto de un siniestro que ya fue reparado por alguna otra aseguradora. </p>
            <div className='second-box'>
            <p className='second-text'>Contamos con un departamento especializado en análisis y prevención del fraude.</p>
            <p className='second-text'>Ante cualquier duda o consulta, comuníquese con: </p>
            <p className='second-name'>Dra. Verónica Inglés Martín</p>
            <p className='second-phone'>(+5411) 3986 2800</p>
            <p className='second-mail'>vingles@afianzadora.com.ar</p> 
            </div>
        </div>
</div>
  )
}

export default SecondFraudBox