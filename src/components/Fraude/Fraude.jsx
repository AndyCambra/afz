import React from 'react'
import FraudMenu from '../utils/FraudMenu/FraudMenu'
import './fraude.css'
import FirstFraudBox from '../utils/FraudBoxes/FirstFraudBox'
import { useState, useEffect } from 'react'
import SecondFraudBox from '../utils/FraudBoxes/SecondFraudBox'


const Fraude = () => {
const [selectNumber, setSelectNumber] = useState(1);


const handleClick = i => {
    setSelectNumber(i)
}
const selectComponent=()=>{
  if(selectNumber===1){
    return <FirstFraudBox />
  }else{
    return <SecondFraudBox />
  }
}
useEffect(()=>{
    window.scrollTo(0,0);
  },[])

console.log(1,  selectNumber)

  return (
    <div className='fraud-background'>
    <div className='digital-content'>
    <div className='digital-box'>   
        <div className='fraud-title'>
        <h5 className='digital-title'>PREVENCIÓN DEL FRAUDE</h5>
        </div>
        <div className='fraud-menu'>
        <FraudMenu handleClick={handleClick} className1={selectNumber ===1? "menu-link-selected":"menu-link"} className2={selectNumber===2? "menu-link-selected":"menu-link"} /> 
        </div>
      {selectComponent()}
    </div>
    </div> 
    </div>
  )
}

export default Fraude