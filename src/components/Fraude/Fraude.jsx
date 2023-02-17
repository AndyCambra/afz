import React from 'react'
import FraudMenu from '../utils/FraudMenu/FraudMenu'
import './fraude.css'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'
import FirstFraudBox from '../utils/FraudBoxes/FirstFraudBox'
import { useState, useEffect } from 'react'
import SecondFraudBox from '../utils/FraudBoxes/SecondFraudBox'


const Fraude = () => {
const [isShow, setIsShow] = useState(true);
const [isShow2, setIsShow2] = useState(false);

const handleClick = () => {
    setIsShow(true)
    setIsShow2(false)
}
const handleClick2 = () => {
    setIsShow(false)
    setIsShow2(true)
}

useEffect(()=>{
    window.scrollTo(0,0);
  },[])

console.log(1,  isShow, isShow2)

  return (
    <div className='fraud-background'>
    <div className='digital-content'>
    <div className='digital-box'>   
        <div className='fraud-title'>
        <h5 className='digital-title'>PREVENCIÓN DEL FRAUDE</h5>
        </div>
        <div className='fraud-menu'>
        <FraudMenu handleClick={handleClick} handleClick2={handleClick2} className={isShow? "menu-link-selected":"menu-link"} className2={isShow2? "menu-link-selected":"menu-link"}/> 
        </div>
      {isShow ? 
      <FirstFraudBox /> : 
      <SecondFraudBox />}  
    </div>
   {/*  {isShow ?
    <HorizontalPhoto img='/img/DescargarForm.jpg' alt="Prevención del Fraude" />: null} */}
    </div> 
    </div>
  )
}

export default Fraude