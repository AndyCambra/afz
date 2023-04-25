import React from 'react'
import { Icon } from '@iconify/react'

const BalancesCardTop = ({cardTopImg, cardTopAlt, number, fileDownload}) => {
  return (
    <div className='balances-card-container'>
     
      <img src={cardTopImg} alt={cardTopAlt}/>
     
     <div className='number-block'>
     <div>
      <h5 className='card-number'>{number}</h5> 
      </div>
      <div>
      <a href={fileDownload} target="_blank" rel="noopener noreferrer" download={fileDownload}> 
      <Icon icon="gg:software-download" className='download-icon' /> </a>
      </div>
      </div>
    </div>
  )
}

export default BalancesCardTop

