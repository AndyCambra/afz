
import React from 'react'
import "./home.css"
import DarkButton from '../utils/BigButton/DarkButton'

const Home = () => {
  return (
    <div>
    <div className='homeBackgound'>
      <div  className='hero'>
        <div className='homeTitle'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
        <DarkButton name={'CONOCENOS'} />
        <DarkButton name={'CONTACTANOS'} />
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Home