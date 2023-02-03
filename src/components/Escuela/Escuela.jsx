import React from 'react'
import "./escuela.css"
import LightButton from '../utils/BigButton/LightButton'

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
        <a href='./escuelainfo'>  
        <LightButton name={'VER MÁS'} />
        </a> 
        <a href='./escuelainscripcion'>  
        <LightButton name={'INSCRIBITE'} />
        </a>
        </div>
        </div>
        </div>
        </div>  
      </section>
  )
}

export default Escuela