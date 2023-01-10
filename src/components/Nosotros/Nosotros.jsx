import React from 'react'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import './nosotros.css'


const Nosotros = () => {

  const us=
      {title: "LA EMPRESA",
      text:'Somos una compañía especialista en Seguros de Caución que reúne experiencia e innovación. Brindamos las mejores herramientas para satisfacer la demanda de Productores, Tomadores y Asegurados en un mercado dinámico y competitivo.'
  }
  const staff={
    title: "EL EQUIPO",
    text: "Contamos con un grupo directivo conformado por reconocidos referentes del mercado internacional. Nuestro equipo está integrado por profesionales de diferentes disciplinas, cada uno con la más alta capacitación en su especialidad. "
  }

  return (
    <div>
      <div className='usBackgound'>
       
        <div className='usHero'>
          <div className="usBlock">
          <HorizontalSubMenu title={us.title} text={us.text} />
          </div>
        </div>
      </div>
      <div className='staffBackgound'>
        <div className='staffHero'>
        <div className="staffBlock">
       <HorizontalSubMenu title={staff.title} text={staff.text} />
        </div>
        <div className='staffPositions'>
        <h5 >SOCIOS</h5>
        </div>
        <div className='staffPositionsRight'> 
          <h5 >DIRECTOR</h5></div>
        </div>
        

      </div>
    </div>
  )
}

export default Nosotros