import React from 'react'
import { FraudItem } from './FraudItem'

const FirstFraudBox = ({text, subtitle,item1,item2,item3,firstFraudContent}) => {
  return (
    <div className='fraud-box'>
      <div className='fraud-in-box'>
      <p className='fraud-column-1'>{text}</p>
      <h6 className='fraud-subtitle'>{subtitle}</h6>
      <h6 className='final-list'>{item1}</h6>
      <h6 className='final-list'>{item2}</h6>
      <h6 className='final-list'>{item3}</h6>
      </div>
    <div className='fraud-items'>
    {firstFraudContent.map((item, key)=>
    <FraudItem key={item.number} number={item.number} text={item.text}/>
    )}
    </div>
</div>
  )
}

export default FirstFraudBox