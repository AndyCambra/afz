import React from 'react'
import './balancesCard.css'
import { Icon } from '@iconify/react'

const BalancesCardTop = ({cardTopImg, cardTopAlt}) => {
  return (
    <div className='balances-card-container'>
     
      <img src={cardTopImg} alt={cardTopAlt}/>
     
     <div className='number-block'>
      
      <Icon icon="gg:software-download" className='download-icon' />
      </div>
    </div>
  )
}

export default BalancesCardTop