import React from 'react'
import './escuela.css'
import { Link } from 'react-router-dom'
import CourseTitle from './CourseTitle'
import BigButton from '../utils/BigButton/BigButton'
import { BrowserView, MobileView } from 'react-device-detect';
import schoolText from '../utils/Texts/schoolText.json'
import { useLangContext } from '../../Context/LangContext'

const textSchool={
  text:"Somos especialistas y líderes en seguros de caución. Por eso, tenemos la única escuela de caución del mercado y te ofrecemos una capacitación imprescindible para ampliar tus oportunidades de negocio. Para dominar los diferentes tipos de riesgo y las mejores técnicas de comercialización. Para asesorar mejor a tus clientes. Para gestionar con efectividad las cobranzas. Un programa único que abarca todo lo que necesitás para profesionalizarte, desarrollar habilidades específicas y adquirir confianza. Dictado por un equipo multidisciplinario y altamente capacitado. Transformate vos también en un especialista. Inscribite y accedé a una capacitación única en el mercado del seguro de caución."
}


const EscuelaInfo = () => {
  const {selectedLanguage} = useLangContext()
  const text = schoolText[selectedLanguage];
  console.log(text)

  return (
    <>
    <BrowserView>
    <section className='info-backgound' > 
        <div  className='info-hero'>
            <p className='info-text'>{text.schoolInfo.text}</p> 
            <div className='place-logo-info'>
              <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
            </div>
            <div className="info-block">
            <div className='sub-menu-balance'>
                <div className='items'>
                    <h5 className="item-school-selected">{text.schoolInfo.menuSchool}</h5>
                    <Link to="/escuela/programa">
                      <h5 className='item-school'>{text.schoolInfo.menuProgram}</h5>
                    </Link>
                </div>
                <div>
                  <Link to="/" className='school-home-link'>
                    <h5>HOME</h5>
                  </Link>
                </div> 
              </div>
                <h5 className='info-title'>{text.schoolInfo.infoTitle}</h5>
          </div>
          <div className='courses-block'>
            {text.courses.map((course,id)=>{
                return(
            <CourseTitle key={id} date={course.date} title={course.title} className={"course-title-block"}/>
            )
            })} 
            <div className='school-buttons'>
                <Link to='/escuela/inscripcion'>  
                <BigButton className={selectedLanguage === "EN"? "display-none" :"school-button"} name={text.incriptionButton} />
                </Link>
                </div>
            </div> 
      </div>
      <div class="push"></div>
      </section>
      </BrowserView>
      <MobileView>
      <section className='info-backgound' > 
        <div className='info-school-mobile-box'>
          <Link to='/escuela/inscripcion'>  
                  <BigButton className={selectedLanguage === "EN"? "display-none" :"school-button"} name={text.incriptionButton} />
          </Link>
            <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
        <div className='info-school-mobile-text'>
        <p>{textSchool.text}</p> 
        </div>
        <div class="push"></div>
          </section>
          <section className='bordeax-background'>
          <h5>{text.schoolInfo.infoTitle}</h5>
          {text.courses.map((course,id)=>{
                return(
            <CourseTitle key={id} date={course.date} title={course.title} className={"course-mobile"}/>
            )
            })} 

          </section>
      </MobileView>
      </>
  )
}

export default EscuelaInfo