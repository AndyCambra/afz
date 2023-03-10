import React from 'react'
import { FraudItem } from './FraudItem'
import items from '../utils/Texts/firstFraudText'

const FirstFraudBox = () => {
  return (
    <div className='fraud-box'>
      <div>
      <p className='fraud-column-1'>Las aseguradoras no escapan a la necesidad de cualquier empresa de ser rentables y eficientes, por lo que no pueden soportar pérdidas sin tomar medidas correctivas que terminan incidiendo en el costo del servicio que brindan. Por eso, una gestión proactiva y eficaz de la política de prevención de fraudes se convierte en una poderosa herramienta para mejorar la competitividad, además de un acto de responsabilidad que beneficia a todas las partes. El compromiso y la acción de productores, asesores, brokers o agentes institorios ayuda a todos los participantes del mercado. </p>
      <h6 className='fraud-subtitle'>ACCIONES IMPORTANTES PARA DESCUBRIR FRAUDES:</h6>
      <h6 className='final-list'>Cruce de datos</h6>
      <h6 className='final-list'>Colaboración entre aseguradoras</h6>
      <h6 className='final-list'>Redes sociales</h6>
      </div>
    <div>
    {items.map((item, key)=>
    <FraudItem key={item.number} number={item.number} text={item.text}/>
    )}
    </div>
</div>
  )
}

export default FirstFraudBox