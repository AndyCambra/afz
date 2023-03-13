import React from 'react'
import './balancesCard.css'
import { Icon } from '@iconify/react'

const BalancesCardBottom = ({cardTopImg, cardTopAlt, number}) => {
  return (
    <div className='balances-card-container-bottom'>
     <div className='number-block-bottom'>
     <div>
      <h5 className='card-number'>{number}</h5> 
      </div>
      <div>
      <Icon icon="gg:software-download" className='download-icon' />
      </div>
      </div>
      <img src={cardTopImg} alt={cardTopAlt}/>
    </div>
  )
}

export default BalancesCardBottom