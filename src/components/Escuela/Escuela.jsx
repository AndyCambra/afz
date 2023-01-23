import React from 'react'
import { Link } from 'react-router-dom'
import "./escuela.css"
import Button from '../utils/BigButton/Button'

const Escuela = () => {
  return (
    <section className='school-backgound' >
     <video playsinline autoplay muted loop poster className='hexa-video'>
        <source src="./img/videos/HexaBlancos.mp4"></source>
     </video>
        <div  className='school-hero'>
        <div className='school-title'>
        <img src="./img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        <div>
        <h1>Una capacitación <br></br>imprescindible.</h1>
        <div className='school-buttons'>
        <Button name={'VER MÁS'} />
        <Button name={'INSCRIBITE'} />
        </div>
        </div>
        </div>
        </div>  
      </section>
  )
}

export default Escuela