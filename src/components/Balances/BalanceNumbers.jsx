import React from 'react'
import './balancesCard.css'

const BalanceNumbers = ({number}) => {
  return (
    <div className='number-alone-container'>
     <div className='number-alone-block'>
      <h5 className='card-number'>{number}</h5>   
      </div>
    </div>
  )
}

export default BalanceNumbers