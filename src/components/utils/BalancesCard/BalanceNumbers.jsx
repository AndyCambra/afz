import React from 'react'
import './balancesCard.css'

const BalanceNumbers = ({number}) => {
  return (
    <div className='number-container'>
     <div className='number-block'>
      <h5 className='card-number'>{number}</h5>   
      </div>
    </div>
  )
}

export default BalanceNumbers