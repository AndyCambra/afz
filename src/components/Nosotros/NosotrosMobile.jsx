import React, {useState} from 'react'
import MobileSubMenu from './MobileSubMenu'
import SixLogos from './SixLogos'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'


const NosotrosMobile = ({usRef, teamRef, comRef, reinsurersRef, menuCategoryCompany, menuCategoryCompromise, menuCategoryReinsurers, menuCategoryStaff, handleButtonClicked,
usText, usTitle, staffText, staffTitle, reisuranceText,reisuranceTitle, compromiseText, compromiseTitle, buttonMobile, alt1, alt2, alt3, alt4, alt5, selectedLanguage}) => {
  const [isActive, setIsActive]=useState(false)

  const handleClick = nextRef => {
     setIsActive(!isActive)
     console.log(nextRef)
     nextRef?.current?.scrollIntoView({ behavior: "smooth" });
   } 
  
  return (
    <div>
         <div className='top-section'title="us-backgound" id="section1"  ref={usRef}>
            <MobileSubMenu reinsurersRef={reinsurersRef} usRef={usRef} comRef={comRef} teamRef={teamRef} menuCategoryCompany={menuCategoryCompany} menuCategoryStaff={menuCategoryStaff} menuCategoryReinsurers={menuCategoryReinsurers} menuCategoryCompromise={menuCategoryCompromise} handleClick={handleClick} onClick={handleButtonClicked}/>    
        </div>
          <img src="/img/MobileImages/EmpresaMobile.jpg" alt="Sala de reuniones Afianzadora" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{usTitle}</h5>
          <p className='text-us-mobile'>{usText}</p>
        </div>

        <div ref={teamRef}>
        <img src="img/MobileImages/StaffMobile.jpg" alt="Foto grupal del staff" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{staffTitle}</h5>
          <p className='text-us-mobile'>{staffText}</p>
          <div className='center-button'>
            <Link to='/carrousel'>
          <BigButton name={buttonMobile} className={selectedLanguage === 'EN' ? "learn-button": 'dark-button'} />
          </Link>
          </div>
        </div>
        </div>
        <div ref={reinsurersRef}>
        <img src="img/Reaseguradores.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{reisuranceTitle}</h5>
          <p className='text-us-mobile'>{reisuranceText}</p>
          <SixLogos />
        </div>
        </div>
        <div ref={comRef}>
        <img src="img/MobileImages/PatioMobile.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{compromiseTitle}</h5>
          <p className='text-us-mobile'>{compromiseText}</p>
        </div>
        </div>
        <div className='fundations-box'>
        <a href='https://www.asdra.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/Asdra.jpg' alt={alt1} className='fundations' /></a> 
          <a href='https://www.fev.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/EspaciosVerdes.png' alt={alt2} className='fundations-bigger' /></a> 
          <a href='https://www.haciendocamino.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/HaciendoCamino.jpg' alt={alt3} className='fundations' /></a>
         
            </div>
            <div className='fundations-box'>
            <a href='https://www.bancodealimentos.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/BancoAlimentos.png' alt={alt4} className='fundations' /></a>
          <a href='https://www.cuerpoyalma.org.ar/' target="_blank" rel="noreferrer">   <img src='img/LogosCompromiso/CuerpoAlma.jpg' alt={alt5} className='fundations' /></a>
          </div>
    </div>
  )
}

export default NosotrosMobile