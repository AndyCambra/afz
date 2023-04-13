import React from 'react'
import './balancesCard.css'
import { Icon } from '@iconify/react'

const BalancesCardBottom = ({cardTopImg, cardTopAlt, number, fileDownload}) => {
  return (
    <div className='balances-card-container-bottom'>
     <div className='number-block-bottom'>
     <div>
      <h5 className='card-number'>{number}</h5> 
      </div>
      <div>
      <a href={fileDownload} target="_blank" rel="noopener noreferrer" download={fileDownload}> 
      <Icon icon="gg:software-download" className='download-icon' /> </a>
      </div>
      </div>
      <img src={cardTopImg} alt={cardTopAlt}/>
    </div>
  )
}

export default BalancesCardBottom