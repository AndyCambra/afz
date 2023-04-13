import React from 'react'
import {useState} from 'react'
import BalancesCardTop from './BalancesCardTop'
import BalanceNumbers from './BalanceNumbers'



const BalancesGroup = ({number, cardTopImg, cardTopAlt, fileDownload}) => {
    const [isShown, setIsShown] = useState(false);

console.log(isShown)
  return (
    <>
  
 <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
  <BalanceNumbers number={number} isShown={isShown} /> 
{isShown &&(
  <div className='slider'>
        <BalancesCardTop cardTopImg={cardTopImg} cardTopAlt={cardTopAlt} number={number} fileDownload={fileDownload}/>
  </div>)}
   </div> 
</> 
  )
}

export default BalancesGroup