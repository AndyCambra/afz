import React from 'react'
import './balancesCard.css'
import { Icon } from '@iconify/react'

const BalanceNumbersBottom = ({number, fileDownload, isShown}) => {
  return (
    <div className='number-alone-container-bottom'>
     <div className='number-alone-block-bottom'>
      <h5 className='card-number'>{number}</h5>   
      <a href={fileDownload} target="_blank" rel="noopener noreferrer" download={fileDownload}> 
      <Icon icon="gg:software-download" className={isShown ===true?'download-icon':"display-none"} /> </a>
      </div>
    </div>
  )
}

export default BalanceNumbersBottom