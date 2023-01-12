import React from 'react'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import Staff from './Staff'
import { useRef } from 'react'
import { handleButtonClicked } from 'react'
import './nosotros.css'
import SixLogos from '../utils/SixLogos/SixLogos'



const re=
{title: "REASEGURADORES",
text:'Nuestro cuadro de reaseguro garantiza eficacia y dinamismo en la capacidad de operación, cualquiera sea la magnitud de los proyectos.'
}
const us=
{title: "LA EMPRESA",
text:'Somos una compañía especialista en Seguros de Caución que reúne experiencia e innovación. Brindamos las mejores herramientas para satisfacer la demanda de Productores, Tomadores y Asegurados en un mercado dinámico y competitivo.'
}
const com=
{title: "NUESTRO COMPROMISO",
text:'Creemos en la Responsabilidad Social, tanto en las prácticas diarias que equilibran y mejoran la relación entre el trabajo y la vida personal, como en la extensión de esas prácticas a la construcción de una sociedad inclusiva que promueva el bienestar de todos. Por eso, además de traducir esta convicción en un apoyo permanente a nuestros colaboradores, somos parte de diferentes iniciativas que llevan adelante organizaciones del tercer sector.'
}

const Nosotros = () => {
  const reinsurersRef= useRef(null)
  const usRef= useRef(null)

  return (
    <div>
      <section title="us-backgound" id="section1" className='us-backgound' >
        <div className='grid'>
          <div className="us-block">
          <HorizontalSubMenu title={us.title} text={us.text} ref={usRef} reinsurersRef={reinsurersRef} onClick={handleButtonClicked} />
          </div>
        </div>
      </section>
      <Staff />
      <section className='re-backgound' >
      <div className='re-grid'>
          <div className="us-block">
          <HorizontalSubMenu ref={reinsurersRef} usRef={usRef} title={re.title} text={re.text} />
          </div>
          <SixLogos />
        </div>
      </section>
      <section className='com-backgound'id='section4'>
      <div className='re-grid'>
      <div className="us-block">
          <HorizontalSubMenu title={com.title} text={com.text} />
          </div>
          </div>
      </section>
    </div>
  )
}

export default Nosotros