import React from 'react'
import { FraudItem } from './FraudItem'
import { Link } from 'react-router-dom'



const SecondFraudBox = ({subtitle1, subtitle2, secondFraudContent, text1, text2, text3, text4, text5, link}) => {

  return (
    <div className='fraud-box'>  
        <div className='fraud-in-box'>
            <h5 className='fraud-subtitle'>{subtitle1}</h5>
            {secondFraudContent.map((item, key)=>
            <FraudItem key={item.id} number={item.number} text={item.text}/>
            )}
        </div>
        <div className='second-boxes'>
            <h5 className='fraud-subtitle'>{subtitle2}</h5>
            <p className='second-text'>{text1}</p>
            <Link to="/landing"><p className='second-mail'>{link}</p> </Link>
            <p className='second-text'>{text2}</p>
            <a href='https://www.argentina.gob.ar/superintendencia-de-seguros' rel="noreferrer" target="_blank" className='second-mail'>https://www.argentina.gob.ar/superintendencia-de-seguros</a> 
            <p className='second-text'>{text3}</p>
            <div className='second-box'>
            <p className='second-text'>{text4}</p>
            <p className='second-text'>{text5}</p>
            <p className='second-name'>Dra. Verónica Inglés Martín</p>
            <p className='second-phone'>(+5411) 3986 2800</p>
            <p className='second-mail'>vingles@afianzadora.com.ar</p> 
            </div>
        </div>
</div>
  )
}

export default SecondFraudBox