import React from 'react'
import './balancesCard.css'
import { Icon } from '@iconify/react'

const BalancesCardTop = ({cardTopImg, cardTopAlt, number}) => {
  return (
    <div className='balances-card-container'>
     
      <img src={cardTopImg} alt={cardTopAlt}/>
     
     <div className='number-block'>
     <div>
      <h5 className='card-number'>{number}</h5> 
      </div>
      <div>
      <Icon icon="gg:software-download" className='download-icon' />
      </div>
      </div>
    </div>
  )
}

export default BalancesCardTop