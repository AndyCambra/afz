import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import schoolText from '../utils/Texts/schoolText.json'
import { useLangContext } from '../../Context/LangContext'



const EscuelaPrograma = () => {
  const {selectedLanguage} = useLangContext()
  const text = schoolText[selectedLanguage];

  return (
    <>
    <section className='info-backgound'>
    <div  className='info-hero'>
        <div  className={selectedLanguage === "EN"? "display-none" : "video-youtube"}>
        <ReactPlayer
        url="https://www.youtube.com/embed/pUVgzwUjVbc?rel=0&amp;autoplay=1"
        controls
        width='100%'
        height='133%' /> 
        </div>
        <div className='place-logo-info'>
            <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
        <div className="info-block">
        <div className='sub-menu-balance'>
            <div className='items'>
            <Link to="/escuela/info">
                <h5 className='item-program'>{text.schoolInfo.menuSchool}</h5>
            </Link>
                  <h5 className="item-program-selected">{text.schoolInfo.menuProgram}</h5>    
            </div>
            <div>
              <Link to="/" className='school-home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
          <h5 className='info-title'>{text.programTitle}</h5>
        </div>
            
            <div className='program-block'>
              {text.firstColumn.map((item, key)=>{
                return(
                  <>
                <h4 className='program-subtitle'>{item.title}</h4>
                <h6 className='program-list'>{item.topic}</h6>
                </>
                )
              })}
            </div>
            <div className='program-block2'>
            {text.secondColumn.map((item, key)=>{
                return(
                  <>
                <h4 className='program-subtitle'>{item.title}</h4>
                <h6 className='program-list'>{item.topic}</h6>
                </>
                )
              })}
           
            <div className={selectedLanguage === "EN" ? "display-none" : 'program-buttons'}>
                <Link to='/escuela/inscripcion'>  
                <BigButton className="school-button" name={text.incriptionButton} />
                </Link>
                </div>
            </div>
            
      </div>
      <div class="push"></div>
      </section>
     
      </>
  )
}
export default EscuelaPrograma