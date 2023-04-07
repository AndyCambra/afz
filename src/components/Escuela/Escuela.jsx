import React from 'react'
import "./escuela.css"
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import HexaBlancos from './videos/HexaBlancos.mp4'
import SocialIcons from '../Footer/SocialIcons'
import { BrowserView, MobileView } from 'react-device-detect';
import HexaMobile from './videos/HexaMobile.mp4'
import schoolText from '../utils/Texts/schoolText.json'
import { useLangContext } from '../../Context/LangContext'


const Escuela = () => {
  const {selectedLanguage} = useLangContext()
  const text = schoolText[selectedLanguage];

  return (
    <>
    <BrowserView>
    <section className='school-backgound' >
     <video  autoPlay loop playsInline className='hexa-video'>
      <source src={HexaBlancos} type='video/mp4'/>
     </video>
        <div  className='school-hero'>
          <div className='school-title'>
          <img src="img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
          <div>
          <h1>{text.title1}<br></br>{text.title2}</h1>
          <div>
          <Link to='/escuela/info'>  
          <BigButton className="school-button" name={text.moreButton} />
          </Link> 
          <Link to='/escuela/inscripcion'>  
          <BigButton className={ selectedLanguage === "EN" ? "display-none":"school-button" } name={text.incriptionButton} />
          </Link>
          </div>
          </div>
          </div>
          <p className='social-text'>{text.socialText}</p>
          <SocialIcons className="social-school-box" classCircle="icon-circle-bordeaux" classIcon="social-school-icon" classIconBig="social-school-icon-big"/>
        </div>  
      </section>
      </BrowserView>
      <MobileView>
      <video loop autoPlay playsInline className='hexa-video-mobile'>
        <source src={HexaMobile} type='video/mp4'/>
      </video>
      <div className='school-mobile-logo-box'>
        <img src="img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        <div>
        <h1 className={ selectedLanguage === "EN"? "en-mobile-title" :'school-mobile-title'}>{text.titleMobile1}<br></br>{text.titleMobile2}</h1>
        <div className='school-button-box'>
        <Link to="/escuela/inscripcion">
        <BigButton className={ selectedLanguage === "EN" ? "display-none":"school-button" } name={text.incriptionButton} />
        </Link>
        <Link to="/escuela/info">
        <BigButton className="school-button" name={text.moreButton} />
        </Link>
        </div>
        </div>
      </div>
      </MobileView>
      </>
  )
}

export default Escuela