import React from 'react'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import './nosotros.css'


const Nosotros = () => {

  const us=
      {title: "LA EMPRESA",
      text:'Somos una compañía especialista en Seguros de Caución que reúne experiencia e innovación. Brindamos las mejores herramientas para satisfacer la demanda de Productores, Tomadores y Asegurados en un mercado dinámico y competitivo.'
  }

  return (
    <div className='UsContainer'>
      <div className='usBackgound'>
       
        <div className='usHero'>
          <div className="usBlock">
          <HorizontalSubMenu title={us.title} text={us.text} />
          </div>
        </div>
      </div>
      <div className='staffBackgound'>
      {/*  <div className='usHero'>
          <div className="usBlock">
          <HorizontalSubMenu title={us.title} text={us.text} />
          </div>
        </div> */}<p>Staff</p>
      </div>
    </div>
  )
}

export default Nosotros