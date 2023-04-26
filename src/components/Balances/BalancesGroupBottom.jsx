import {useState} from 'react'
import BalancesCardBottom from './BalancesCardBottom'


const BalancesGroupBottom = ({number, cardTopImg, cardTopAlt, fileDownload, id}) => {
    const [isShown, setIsShown] = useState(false);


  return (
    <>
  
    <div onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)}  >
     <BalancesCardBottom number={number} fileDownload={fileDownload} isShown={isShown} cardTopAlt={cardTopAlt} cardTopImg={cardTopImg} id={id} />
      </div> 
   </> 
  )
}

export default BalancesGroupBottom