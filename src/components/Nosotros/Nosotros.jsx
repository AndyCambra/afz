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
import nosotrosTexts from '.././utils/Texts/nosotrosTexts.json'
import { useLangContext } from '../../Context/LangContext'


const Nosotros = () => {
  const reinsurersRef= useRef(null)
  const usRef= useRef(null)
  const comRef= useRef(null)
  const teamRef= useRef(null)
  const {selectedLanguage} = useLangContext()
  const text = nosotrosTexts[selectedLanguage];
  
 
  return (
    <div>
      <BrowserView>
      <section title="us-backgound" id="section1" className='us-backgound'  ref={usRef} >
        <div className='grid'>
          <div className="us-block">
          <HorizontalSubMenu id={text.us.id} menuCategoryCompany={text.us.menuCategory} menuCategoryStaff={text.staff.menuCategory} menuCategoryReinsurers={text.reisurance.menuCategory} menuCategoryCompromise={text.compromise.menuCategory} title={text.us.title} text={text.us.text} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef}  onClick={handleButtonClicked} />
          </div>
        </div>
      </section>

      <section className='staffBackgound' ref={teamRef}>
        <div className='staffHero'>
        <div className="staffBlock">
       <HorizontalSubMenu id={text.staff.id} menuCategoryCompany={text.us.menuCategory} menuCategoryStaff={text.staff.menuCategory} menuCategoryReinsurers={text.reisurance.menuCategory} menuCategoryCompromise={text.compromise.menuCategory} title={text.staff.title} text={text.staff.text} usRef={usRef} reinsurersRef={reinsurersRef} teamRef={teamRef} comRef={comRef} onClick={handleButtonClicked}  />
        </div>
        </div>
        <div className='video-grid'>
        <Staff videos={text.videos} videos2={text.videos2}/>
        </div>
        <div>
            <img src="img/GrupoAfz.jpg" alt="Foto grupal" className='group-photo'/>
            </div>
            <div className="work-button">
        <a href="/trabaja-con-nosotros"><BigButton className="small-button" name={text.button.name} /></a>
        </div> 
      </section> 
      <section className='re-backgound'ref={reinsurersRef}>
      <div className='re-grid'>
          <div className="re-block">
          <HorizontalSubMenu id={text.reisurance.id} menuCategoryCompany={text.us.menuCategory} menuCategoryStaff={text.staff.menuCategory} menuCategoryReinsurers={text.reisurance.menuCategory} menuCategoryCompromise={text.compromise.menuCategory} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={text.reisurance.title} text={text.reisurance.text} />
          </div>
          <SixLogos />
        </div>

      </section>
      <section className='com-backgound'id='section4'ref={comRef}>
      <div className='compromise-grid'>
      <div className="team-block">
          <HorizontalSubMenu id={text.compromise.id} menuCategoryCompany={text.us.menuCategory} menuCategoryStaff={text.staff.menuCategory} menuCategoryReinsurers={text.reisurance.menuCategory} menuCategoryCompromise={text.compromise.menuCategory} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={text.compromise.title} text={text.compromise.text} />
          </div>
          </div>
      </section>
          <div className='fundations-box'>
          <a href='https://www.asdra.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/Asdra.jpg' alt={text.alts.logo1} /></a> 
          <a href='https://www.fev.org.ar/' target="_blank" rel="noreferrer"> <img src='img/LogosCompromiso/EspaciosVerdes.png' alt={text.alts.logo2}/></a> 
          <a href='https://www.haciendocamino.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/HaciendoCamino.jpg' alt={text.alts.logo3} /></a>
          <a href='https://www.bancodealimentos.org.ar/' target="_blank" rel="noreferrer">  <img src='img/LogosCompromiso/BancoAlimentos.png' alt={text.alts.logo4} /></a>
          <a href='https://www.cuerpoyalma.org.ar/' target="_blank" rel="noreferrer">   <img src='img/LogosCompromiso/CuerpoAlma.jpg' alt={text.alts.logo5} /></a>
          </div>
      </BrowserView>
      <MobileView>
        <NosotrosMobile usRef={usRef} teamRef={teamRef} comRef={comRef} reinsurersRef={reinsurersRef} handleButtonClicked={handleButtonClicked} 
        menuCategoryCompany={text.us.menuCategory} menuCategoryCompromise={text.compromise.menuCategory} menuCategoryReinsurers={text.reisurance.menuCategory} menuCategoryStaff={text.staff.menuCategory} 
        usText={text.us.text} usTitle={text.us.title} staffText={text.staff.text} staffTitle={text.staff.title} reisuranceText={text.reisurance.text} reisuranceTitle={text.reisurance.title} compromiseText={text.compromise.text} compromiseTitle={text.compromise.title} 
        buttonMobile={text.buttonMobile.name}  alt1={text.alts.logo1} alt2={text.alts.logo2} alt3={text.alts.logo3} alt4={text.alts.logo4} alt5={text.alts.logo5} />
      </MobileView>
    </div>
    
  )
}

export default Nosotros