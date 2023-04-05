import React from 'react'
import MobileSubMenu from './MobileSubMenu'
import SixLogos from './SixLogos'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import nosotrosTexts from '.././utils/Texts/nosotrosTexts.json'
import { useLangContext } from '../../Context/LangContext'

const NosotrosMobile = ({us, usRef, teamRef, comRef, reinsurersRef, handleButtonClicked, staff, reisurance, compromise}) => {
  const {selectedLanguage} = useLangContext()
  const text = nosotrosTexts[selectedLanguage];
  return (
    <div>
         <div className='top-section'title="us-backgound" id="section1"  ref={usRef}>
            <MobileSubMenu title={text.us.title} text={text.us.text} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef}  onClick={handleButtonClicked}/>    
        </div>
          <img src="/img/MobileImages/EmpresaMobile.jpg" alt="Sala de reuniones Afianzadora" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{text.us.title}</h5>
          <p className='text-us-mobile'>{text.us.text}</p>
        </div>

        <div ref={teamRef}>
        <img src="img/MobileImages/StaffMobile.jpg" alt="Foto grupal del staff" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{text.staff.title}</h5>
          <p className='text-us-mobile'>{text.staff.text}</p>
          <div className='center-button'>
            <Link to='/carrousel'>
          <BigButton name={text.buttonMobile.name} className={'dark-button'} />
          </Link>
          </div>
        </div>
        </div>
        <div ref={reinsurersRef}>
        <img src="img/Reaseguradores.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{text.reisurance.title}</h5>
          <p className='text-us-mobile'>{text.reisurance.text}</p>
          <SixLogos />
        </div>
        </div>
        <div ref={comRef}>
        <img src="img/MobileImages/PatioMobile.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{text.compromise.title}</h5>
          <p className='text-us-mobile'>{text.compromise.text}</p>
        </div>
        </div>
        <div className='fundations-box'>
        <a href='https://www.asdra.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/Asdra.jpg' alt={text.alts.logo1} className='fundations' /></a> 
          <a href='https://www.fev.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/EspaciosVerdes.jpg' alt={text.alts.logo2} className='fundations-bigger' /></a> 
          <a href='https://www.haciendocamino.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/HaciendoCamino.jpg' alt={text.nosotrosTexts.alts.logo3} className='fundations' /></a>
         
            </div>
            <div className='fundations-box'>
            <a href='https://www.bancodealimentos.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/BancoAlimentos.jpg' alt={text.alts.logo4} className='fundations' /></a>
          <a href='https://www.cuerpoyalma.org.ar/' target="_blank" rel="noreferrer">   <img src='img/LogosCompromiso/CuerpoAlma.jpg' alt={text.alts.logo5} className='fundations' /></a>
          </div>
    </div>
  )
}

export default NosotrosMobile