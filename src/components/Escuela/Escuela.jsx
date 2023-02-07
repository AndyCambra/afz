import React from 'react'
import "./escuela.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'

const Escuela = () => {
  return (
    <section className='school-backgound' >
     <video playsinline autoplay muted loop poster className='hexa-video'>
        <source src="img/videos/HexaBlancos.mp4"></source>
     </video>
        <div  className='school-hero'>
        <div className='school-title'>
        <img src="img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        <div>
        <h1>Una capacitación <br></br>imprescindible.</h1>
        <div className='school-buttons'>
        <Link to='/escuela/info'>  
        <BigButton className="school-button" name={'VER MÁS'} />
        </Link> 
        <Link to='/escuela/inscripcion'>  
        <BigButton className="school-button" name={'INSCRIBITE'} />
        </Link>
        </div>
        </div>
        </div>
        </div>  
      </section>
  )
}

export default Escuela