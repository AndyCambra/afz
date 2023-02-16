import React from 'react'
import { FraudItem } from '../FraudItem/FraudItem'

const items =[
    {
    number: 1,
    text:"El fraude es un delito y, como tal, las personas que lo cometen deben ser penadas."
    },
    {
    number: 2,
    text:"El fraude ocurre cuando se engaña a la compañía –y/o al productor asesor– de seguros para cobrar dinero u obtener alguna ventaja a la que no tiene derecho. Esto incide en el costo de las primas y causa daños a toda la comunidad. "
    },
    {
    number: 3,
    text:"Algunas de las formas más comunes de fraude son: la variación, simulación o tergiversación de circunstancias personales, temporales, objetivas, de causalidad o de lugar o la  provocación deliberada o la simulación total o parcial de un siniestro. "
    },
    {
    number: 4,
    text:"El fraude es un acontecimiento tan común que termina siendo admitido como natural, desconociendo su gravedad.   "
     },
]
const items2 =[
    {
    number: 5,
    text:"Las declaraciones falsas o toda reticencia de circunstancias conocidas por el asegurado que de ser tomadas en cuenta hubiesen impedido el contrato o modificado sus condiciones, aun las hechas de buena fe, hacen nulo el contrato. Esto resulta de mayor gravedad cuando se trata de actitudes dolosas o de mala fe. "
    },
    {
    number: 6,
    text:"Siempre existe el riesgo de ser involucrados en una maniobra de fraude. "
    }
]

const FirstFraudBox = () => {
  return (
    <div className='fraud-box'>
      <div /* className='fraud-column-1' */>
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
    {/* </div>
    <div> */}
    {items2.map((item, key)=>
    <FraudItem key={item.number} number={item.number} text={item.text}/>
    )}
    
    </div>
</div>
  )
}

export default FirstFraudBox