import React from 'react'

export const FraudItem = ({number, text}) => {
  return (
    <div className='fraud-column-2'>
    <div><div className='fraud-caracter'>{number}</div></div>
    <div className='fraud-text'><p>{text}</p></div>
</div>
  )
}
