import React from 'react'
import {useState} from 'react'
import BalancesCardTop from './BalancesCardTop'
import BalanceNumbers from './BalanceNumbers'


const BalancesGroup = ({number, cardTopImg, cardTopAlt}) => {
    const [isShown, setIsShown] = useState(false);


  return (
    <>
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
  <BalanceNumbers number={number} /> 
{isShown &&(
        <BalancesCardTop cardTopImg={cardTopImg} cardTopAlt={cardTopAlt} number={number} className='show-img'/>
  )}
   </div>
</> 
  )
}

export default BalancesGroup