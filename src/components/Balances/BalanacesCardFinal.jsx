import React from 'react'
import { Icon } from '@iconify/react'


const BalanacesCardFinal = ({number, fileDownload, isShown, cardTopAlt, cardTopImg}) => {
 
  return (
    <>
    <div className='card-container'>
        
     <div className='number-block-final' >
        <div className={isShown ===true? "background-black":"background-none"}>
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
     <div className='slider-box'>
        <div className='cover-box'>
      <img src={cardTopImg} alt={cardTopAlt}/>
      </div>
      </div>}
    </div>
    </>
  )
}

export default BalanacesCardFinal