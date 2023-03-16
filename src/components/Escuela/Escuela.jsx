import React from 'react'
import "./escuela.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import HexaBlancos from './videos/HexaBlancos.mp4'
import SocialIcons from '../Footer/SocialIcons'


const Escuela = () => {
  return (
    <section className='school-backgound' >
     <video  autoPlay loop playsInLine className='hexa-video'>
      <source src={HexaBlancos} type='video/mp4'/>
     </video>
        <div  className='school-hero'>
          <div className='school-title'>
          <img src="img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
          <div>
          <h1>Una capacitación <br></br>imprescindible.</h1>
          <div>
          <Link to='/escuela/info'>  
          <BigButton className="school-button" name={'VER MÁS'} />
          </Link> 
          <Link to='/escuela/inscripcion'>  
          <BigButton className="school-button" name={'INSCRIBITE'} />
          </Link>
          </div>
          </div>
          </div>
          <p className='social-text'>Seguinos para conocer todas las convocatorias y los nuevos cursos.</p>
          <SocialIcons className="social-school-box" classCircle="icon-circle-bordeaux" classIcon="social-icon" classIconBig="social-icon-big"/>
        </div>  
      </section>
  )
}

export default Escuela