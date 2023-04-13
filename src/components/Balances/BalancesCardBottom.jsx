import React from 'react'
import './balancesCard.css'


const BalancesCardBottom = ({cardTopImg, cardTopAlt, number, fileDownload}) => {
  return (
    <div className='balances-card-container-bottom'>
      <img src={cardTopImg} alt={cardTopAlt}/>
    </div>
  )
}

export default BalancesCardBottom