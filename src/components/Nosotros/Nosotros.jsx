import React from 'react'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import Staff from './Staff'
import { useRef, useEffect } from 'react'

import './nosotros.css'


const Nosotros = () => {
  const inRef= React.createRef()
  console.log(inRef)
  const us=
      {title: "LA EMPRESA",
      text:'Somos una compañía especialista en Seguros de Caución que reúne experiencia e innovación. Brindamos las mejores herramientas para satisfacer la demanda de Productores, Tomadores y Asegurados en un mercado dinámico y competitivo.'
  }
 
  return (
    <div>
      <section ref={inRef}  title="us-backgound" id="section1" className='us-backgound' >
        <div className='grid'>
          <div className="us-block">
          <HorizontalSubMenu title={us.title} text={us.text} />
          </div>
        </div>
       
      </section>
      <Staff />
     
    </div>
  )
}

export default Nosotros