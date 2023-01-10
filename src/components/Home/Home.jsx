
import React from 'react'
import "./home.css"
import Button from '../utils/BigButton/Button'

const Home = () => {
  return (
    <div>
    <div className='homeBackgound'>
      <div  className='hero'>
        <div className='homeTitle'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
        <Button name={'CONOCÉ'} />
        <Button name={'COTIZÁ'} />
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Home