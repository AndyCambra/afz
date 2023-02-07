import React from 'react'
import "./escuela.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'

const Escuela = () => {
  return (
    <section className='school-backgound' >
    <video poster="../imagenes/video_instructivo_polizas.jpg" title="¿Como visualizar las pólizas con Legalización y Certificación?" preload="auto" autoplay loop src="/img/videos/HexaBlancos.mp4" type="video/mp4" className='hexa-video'></video>
     {/* <video  playsinline preload="auto" autoplay  muted type="video/mp4" loop poster src="/img/videos/HexaBlancos.mp4" className='hexa-video'></video> */}
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