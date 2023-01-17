import {useState} from 'react'
import BalanceNumbersBottom from './BalanceNumberBottom';
import BalancesCardBottom from './BalancesCardBottom';



const BalancesGroupBottom = ({number, cardTopImg, cardTopAlt}) => {
    const [isShown, setIsShown] = useState(false);


  return (
    <>
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
  <BalanceNumbersBottom number={number} /> 
{isShown &&(
        <BalancesCardBottom cardTopImg={cardTopImg} cardTopAlt={cardTopAlt} number={number}/>
  )}
   </div>
</> 
  )
}

export default BalancesGroupBottom