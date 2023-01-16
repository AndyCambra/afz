import React from 'react'
import {useState} from 'react'
import BalancesCardTop from './BalancesCardTop'
import BalanceNumbers from './BalanceNumbers'
import './balancesgroup.css'

const BalancesGroup = ({cardTopImg, cardTopAlt, number}) => {
    const [isShown, setIsShown] = useState(false);

  return (
    <>
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  className='fixed-number'>
  <BalanceNumbers />
    </div>
{isShown &&(
  <div>
        <BalancesCardTop />
  </div>)}
</> 
  )
}

export default BalancesGroup