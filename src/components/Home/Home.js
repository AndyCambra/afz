
import React from 'react'
import "./home.css"
import Header from '../Header/Header'

const Home = () => {
  return (
    
    <div className='homeBackgound'>
      <Header />
      <div  className='hero'>
        <h1>Somos líderes <br></br>en seguros de caución.</h1>
       <button className='bigButton' type="button">CONOCÉ</button>
       <button className='bigButton' type="button">COTIZÁ</button>
      </div>
    </div>
    
    
  )
}

export default Home