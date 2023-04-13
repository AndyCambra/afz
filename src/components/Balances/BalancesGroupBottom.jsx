import {useState} from 'react'
import BalanceNumbersBottom from './BalanceNumberBottom';
import BalancesCardBottom from './BalancesCardBottom'


const BalancesGroupBottom = ({number, cardTopImg, cardTopAlt, fileDownload}) => {
    const [isShown, setIsShown] = useState(false);


  return (
    <>
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
  <BalanceNumbersBottom number={number} isShown={isShown}/> 
{isShown &&(
   <div className='slider-bottom'>
        <BalancesCardBottom cardTopImg={cardTopImg} cardTopAlt={cardTopAlt} number={number} fileDownload={fileDownload}/>
 </div> )}
   </div>
</> 
  )
}

export default BalancesGroupBottom