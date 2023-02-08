
import React from 'react'
import "./home.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div>
    <div className='homeBackgound'>
      <div  className='hero'>
        <div className='homeTitle'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
        <Link to="/landing">
        <BigButton className="dark-button" name={'CONOCENOS'} />
        </Link>
        <BigButton className="dark-button" name={'CONTACTANOS'} />
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Home