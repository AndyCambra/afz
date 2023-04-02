import React from 'react'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import Staff from './Staff'
import { useRef } from 'react'
import { handleButtonClicked } from 'react'
import './nosotros.css'
import SixLogos from './SixLogos'
import BigButton from '../utils/BigButton/BigButton'
import { BrowserView, MobileView } from 'react-device-detect';
import NosotrosMobile from './NosotrosMobile'
import { nosotrosTexts } from '../utils/Texts/nosotrosTexts'



const Nosotros = () => {
  const reinsurersRef= useRef(null)
  const usRef= useRef(null)
  const comRef= useRef(null)
  const teamRef= useRef(null)
  
 
  return (
    <div>
      <BrowserView>
      <section title="us-backgound" id="section1" className='us-backgound'  ref={usRef} >
        <div className='grid'>
          <div className="us-block">
          <HorizontalSubMenu title={nosotrosTexts.us.title} text={nosotrosTexts.us.text} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef}  onClick={handleButtonClicked} />
          </div>
        </div>
      </section>

      <section className='staffBackgound' ref={teamRef}>
        <div className='staffHero'>
        <div className="staffBlock">
       <HorizontalSubMenu title={nosotrosTexts.staff.title} text={nosotrosTexts.staff.text} usRef={usRef} reinsurersRef={reinsurersRef} teamRef={teamRef} comRef={comRef} onClick={handleButtonClicked}  />
        </div>
        </div>
        <div className='video-grid'>
        <Staff />
        </div>
        <div>
            <img src="img/GrupoAfz.jpg" alt="Foto grupal" className='group-photo'/>
            </div>
            <div className="work-button">
        <BigButton className="small-button" name={nosotrosTexts.button.name} />
        </div> 
      </section> 
      <section className='re-backgound'ref={reinsurersRef}>
      <div className='re-grid'>
          <div className="re-block">
          <HorizontalSubMenu  usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={nosotrosTexts.reisurance.title} text={nosotrosTexts.reisurance.text} />
          </div>
          <SixLogos />
        </div>

      </section>
      <section className='com-backgound'id='section4'ref={comRef}>
      <div className='re-grid'>
      <div className="team-block">
          <HorizontalSubMenu usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={nosotrosTexts.compromise.title} text={nosotrosTexts.compromise.text} />
          </div>
          </div>
      </section>
          <div className='fundations-box'>
          <a href='https://www.asdra.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/Asdra.jpg' alt={nosotrosTexts.alts.logo1} /></a> 
          <a href='https://www.fev.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/EspaciosVerdes.jpg' alt={nosotrosTexts.alts.logo2}/></a> 
          <a href='https://www.haciendocamino.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/HaciendoCamino.jpg' alt={nosotrosTexts.alts.logo3} /></a>
          <a href='https://www.bancodealimentos.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/BancoAlimentos.jpg' alt={nosotrosTexts.alts.logo4} /></a>
          <a href='https://www.cuerpoyalma.org.ar/' target="_blank" rel="noreferrer">   <img src='img/LogosCompromiso/CuerpoAlma.jpg' alt={nosotrosTexts.alts.logo5} /></a>
          </div>
{/*       <a href='/carrousel'>
          <BigButton name="CONOCENOS" className={'dark-button'} />
          </a> */}
      </BrowserView>
      <MobileView>
        <NosotrosMobile us={nosotrosTexts.us} usRef={usRef} teamRef={teamRef} comRef={comRef} reinsurersRef={reinsurersRef} handleButtonClicked={handleButtonClicked} staff={nosotrosTexts.staff} reisurance={nosotrosTexts.reisurance} compromise={nosotrosTexts.compromise}/>
      </MobileView>
    </div>
    
  )
}

export default Nosotros