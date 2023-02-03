
import React from 'react'
import "./home.css"
import BigButton from '../utils/BigButton/BigButton'

const Home = () => {
  return (
    <div>
    <div className='homeBackgound'>
      <div  className='hero'>
        <div className='homeTitle'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
        <BigButton className="dark-button" name={'CONOCENOS'} />
        <BigButton className="dark-button" name={'CONTACTANOS'} />
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Home