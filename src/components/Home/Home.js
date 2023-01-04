
import React from 'react'
import "./home.css"
import Header from '../Header/Header'
import Button from '../utils/Button'

const Home = () => {
  return (
    
    <div className='homeBackgound'>
      <Header />
      <div  className='hero'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
        <Button name={'CONOCÉ'} />
        <Button name={'COTIZÁ'} />
      </div>
    </div>
    
    
  )
}

export default Home