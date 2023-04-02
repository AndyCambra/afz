import React from 'react'
import "./home.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { useLangContext } from '../../Context/LangContext'
import homeTexts from '.././utils/Texts/homeTexts.json'

const Home = () => {
const { selectedLanguage } = useLangContext()
const text = homeTexts[selectedLanguage];

  return (
   
    <div>
    <div className='homeBackgound'>
      <div className='hero'>
        <div className='homeTitle'>
        <h1>{text.title1}<br></br>en seguros de caución.</h1>
        <div className='mobile-button-box'>
        <Link to="/landing">
        <BigButton className="dark-button" name={'PRODUCTOS'} />
        </Link>
        <Link to="/contacto">
        <BigButton className="dark-button" name={'CONTACTO'} />
        </Link>
        </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Home
