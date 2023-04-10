import React from 'react'
import "./home.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { useLangContext } from '../../Context/LangContext'
import homeTexts from '.././utils/Texts/homeTexts.json'
import HomeVideo from './video/AFZ01.mp4'

const Home = () => {
const { selectedLanguage } = useLangContext()
const text = homeTexts[selectedLanguage];

  return (
   
    <div>
    <div className='homeBackgound'>
      <video autoPlay playsInline muted className='home-video'>
        <source src={HomeVideo} type='video/mp4' />
      </video>
      <div className='gradient'>
      <div className='hero'>
        <div className='homeTitle'>
        <h1>{text.title1}<br></br>{text.title2}</h1>
        <div className='mobile-button-box'>
        <Link to="/landing">
        <BigButton className="dark-button" name={text.productButton} />
        </Link>
        <Link to="/contacto">
        <BigButton className="dark-button" name={text.contactButton} />
        </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
   
  )
}

export default Home
