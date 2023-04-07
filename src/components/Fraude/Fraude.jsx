import React from 'react'
import FraudMenu from './FraudMenu'
import './fraude.css'
import FirstFraudBox from './FirstFraudBox'
import { useState, useEffect } from 'react'
import SecondFraudBox from './SecondFraudBox'
import  fraudText from '../utils/Texts/fraudText.json'
import { useLangContext } from '../../Context/LangContext'


const Fraude = () => {
const [selectNumber, setSelectNumber] = useState(1);
const {selectedLanguage} = useLangContext()
const text = fraudText[selectedLanguage];


const handleClick = i => {
    setSelectNumber(i)
}
const selectComponent=()=>{
  if(selectNumber===1){
    return <FirstFraudBox text={text.firstFraudBox.text} subtitle={text.firstFraudBox.subtitle}  item1={text.firstFraudBox.item1} item2={text.firstFraudBox.item2} item3={text.firstFraudBox.item3} firstFraudContent={text.firstFraudContent}  />
  }else{
    return <SecondFraudBox subtitle1={text.secondFraudBox.subtitle1} subtitle2={text.secondFraudBox.subtitle2} secondFraudContent={text.secondFraudContent} text1={text.secondFraudBox.text1} text2={text.secondFraudBox.text2} text3={text.secondFraudBox.text3} text4={text.secondFraudBox.text4} text5={text.secondFraudBox.text5} link={text.secondFraudBox.link} />
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
        <h5 className='digital-title'>{text.title}</h5>
        </div>
        <div className='fraud-menu'>
        <FraudMenu handleClick={handleClick} className1={selectNumber ===1? "menu-link-selected":"menu-link"} className2={selectNumber===2? "menu-link-selected":"menu-link"} fraudMenu1={text.fraudMenu1} fraudMenu2={text.fraudMenu2} /> 
        </div>
      {selectComponent()}
    </div>
    </div> 
    </div>
  )
}

export default Fraude