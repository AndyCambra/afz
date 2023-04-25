import React from 'react'
import { Icon } from '@iconify/react'


const BalancesCardBottom = ({cardTopImg, cardTopAlt, isShown, number, fileDownload}) => {
  return (
    <>
    <div className='card-container'>
        
     <div className='number-block-bottom' >
        <div className={isShown ===true? "background-black-bottom":"background-none-bottom"}>
           <div>
            <h5 className='card-number'>{number}</h5>
            </div>
            <div>  
            <a href={fileDownload} target="_blank" rel="noopener noreferrer" download={fileDownload}> 
            <Icon icon="gg:software-download" className={isShown ===true?'download-icon':"dowload-none"} /> </a>
      </div>
      </div>
      </div>
     {isShown===true &&
     <div className='slider-box-bottom'>
        <div className='cover-box-bottom'>
      <img src={cardTopImg} alt={cardTopAlt}/>
      </div>
      </div>}
    </div>
    </>
  )
}

export default BalancesCardBottom