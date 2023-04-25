import {useState} from 'react'
import BalancesCardBottom from './BalancesCardBottom'


const BalancesGroupBottom = ({number, cardTopImg, cardTopAlt, fileDownload}) => {
    const [isShown, setIsShown] = useState(false);


  return (
    <>
  
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
     <BalancesCardBottom number={number} fileDownload={fileDownload} isShown={isShown} cardTopAlt={cardTopAlt} cardTopImg={cardTopImg} />
      </div> 
   </> 
  )
}

export default BalancesGroupBottom