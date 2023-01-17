import React from 'react'
import './balancesCard.css'

const BalanceNumbersBottom = ({number}) => {
  return (
    <div className='number-alone-container-bottom'>
     <div className='number-alone-block'>
      <h5 className='card-number'>{number}</h5>   
      </div>
    </div>
  )
}

export default BalanceNumbersBottom