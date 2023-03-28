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

const reisurance=
{title: "REASEGURADORES",
text:'Nuestro cuadro de reaseguro garantiza solvencia y dinamismo en la capacidad de operación, cualquiera sea la magnitud de los proyectos.'
}
const staff=
 {title: "EL EQUIPO",
    text: "Contamos con un grupo directivo conformado por reconocidos referentes del mercado internacional. Nuestro equipo está integrado por profesionales de diferentes disciplinas, cada uno con la más alta capacitación en su especialidad. "
  }
const us=
{title: "LA EMPRESA",
text:'Somos una compañía especialista en Seguros de Caución que reúne experiencia e innovación. Brindamos las mejores herramientas para satisfacer la demanda de Productores, Tomadores y Asegurados en un mercado dinámico y competitivo.'
}
const compromise=
{title: "NUESTRO COMPROMISO",
text:'Creemos en la Responsabilidad Social, tanto en las prácticas diarias que equilibran y mejoran la relación entre el trabajo y la vida personal, como en la extensión de esas prácticas a la construcción de una sociedad inclusiva que promueva el bienestar de todos. Por eso, además de traducir esta convicción en un apoyo permanente a nuestros colaboradores, somos parte de diferentes iniciativas que llevan adelante organizaciones del tercer sector.'
}


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
          <HorizontalSubMenu title={us.title} text={us.text} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef}  onClick={handleButtonClicked} />
          </div>
        </div>
      </section>

      <section className='staffBackgound' ref={teamRef}>
        <div className='staffHero'>
        <div className="staffBlock">
       <HorizontalSubMenu title={staff.title} text={staff.text} usRef={usRef} reinsurersRef={reinsurersRef} teamRef={teamRef} comRef={comRef} onClick={handleButtonClicked}  />
        </div>
        </div>
        <div className='video-grid'>
        <Staff />
        </div>
        <div>
            <img src="img/GrupoAfz.jpg" alt="Foto grupal" className='group-photo'/>
            </div>
            <div className="work-button">
        <BigButton className="small-button" name={"TRABAJÁ CON NOSOTROS"} />
        </div> 
      </section> 
      <section className='re-backgound'ref={reinsurersRef}>
      <div className='re-grid'>
          <div className="re-block">
          <HorizontalSubMenu  usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={reisurance.title} text={reisurance.text} />
          </div>
          <SixLogos />
        </div>

      </section>
      <section className='com-backgound'id='section4'ref={comRef}>
      <div className='re-grid'>
      <div className="team-block">
          <HorizontalSubMenu usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef} title={compromise.title} text={compromise.text} />
          </div>
          </div>
      </section>
      <a href='/carrousel'>
          <BigButton name="CONOCENOS" className={'dark-button'} />
          </a>
      </BrowserView>
      <MobileView>
        <NosotrosMobile us={us} usRef={usRef} teamRef={teamRef} comRef={comRef} reinsurersRef={reinsurersRef} handleButtonClicked={handleButtonClicked} staff={staff} reisurance={reisurance} compromise={compromise}/>
      </MobileView>
    </div>
    
  )
}

export default Nosotros