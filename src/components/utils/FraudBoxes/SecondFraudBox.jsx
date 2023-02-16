import React from 'react'
import { FraudItem } from '../FraudItem/FraudItem'
import { Link } from 'react-router-dom'

const items =[
    {
    id: 1,
    number: "!",
    text:"Nunca firmar en blanco formularios de reclamos o denuncias de siniestros."
    },
    {
    id: 2,
    number: "!",
    text:"No aceptar dinero o suscribir documentos o acordar apoderamientos sin comprender por completo sus alcances y efectos."
    },
    { 
    id: 3,
    number: "!",
    text:"No reconocer hechos que no han sucedido ni aceptar asistencia letrada proporcionada por desconocidos.  "
    },
    {
    id: 4,
    number: "!",
    text:"No modificar el estado de los objetos dañados por un siniestro, no exagerar fraudulentamente los daños, no emplear pruebas falsas ni proporcionar información falsa."
    },
    
]
const items2 =[
    {
        id: 5,
        number: "!",
        text: "Nunca avenirse a cooperar en la realización de una maniobra de fraude. "  
        },
    {
    id: 6,
    number: "!",
    text:"Nunca facilitar a terceros sin justificación los datos ni el acceso a las pólizas. "
    },
    {
    id: 7,
    number: "!",
    text:"No permitir que se sustituyan o simulen las reales circunstancias personales, temporales, objetivas o causales, relativas al acaecimiento de un siniestro. "
    },
    {
        id: 8,
        number: "!",
        text:"Siempre consultar con su aseguradora ante cualquier duda o eventualidad, y comunicar las novedades que surjan."
    },
    {
        id: 9,
        number: "!",
        text:"El pago del seguro debe ser realizado exclusivamente por los canales indicados por la aseguradora o el productor asesor de seguros. "
    }
]

const SecondFraudBox = () => {

  return (
    <div className='fraud-box'>  
        <div>
            <h5 className='fraud-subtitle'>RECOMENDACIONES</h5>
            {items.map((item, key)=>
            <FraudItem key={item.id} number={item.number} text={item.text}/>
            )}
        
            {items2.map((item, key)=>
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