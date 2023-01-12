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
     
    </div>
  )
}

export default Nosotros