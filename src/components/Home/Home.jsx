
import React from 'react'
import "./home.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { LangContext } from '../../Context/LangContext'
import homeTexts from '.././utils/Texts/homeTexts.json'


const Home = () => {
const {selectedlanguage } = useContext(LangContext)
const text = homeTexts.find((t => t.lang === selectedlanguage))

/* console.log(333, selectedlanguage) */

  return (
   
    <div>
    <div className='homeBackgound'>
      <div className='hero'>
        <div className='homeTitle'>
        <h1>{/* {text.title1} */}<br></br>en seguros de caución.</h1>
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