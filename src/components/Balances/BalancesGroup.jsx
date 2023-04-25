import React from 'react'
import {useState} from 'react'
import BalanacesCardFinal from './BalanacesCardFinal'




const BalancesGroup = ({number, cardTopImg, cardTopAlt, fileDownload}) => {
    const [isShown, setIsShown] = useState(false);

console.log(isShown)
  return (
    <>
  
 <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
  <BalanacesCardFinal number={number} fileDownload={fileDownload} isShown={isShown} cardTopAlt={cardTopAlt} cardTopImg={cardTopImg} />
   </div> 
</> 
  )
}

export default BalancesGroup