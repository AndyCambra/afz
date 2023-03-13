import React from 'react'
import './escuela.css'
import { Link } from 'react-router-dom'
import CourseTitle from './CourseTitle'
import BigButton from '../utils/BigButton/BigButton'

const courses=[
    {id: 11,
     date: 'Miércoles 19 de octubre',
     title: 'Introducción al Seguro de Caución y Comercialización' },
     {id: 12,
     date: 'Miércoles 26 de octubre',
     title: 'Cobranza y Refacturación' },
     {id: 13,
     date: 'Miércoles 02 de noviembre ',
     title: 'Suscripción de Riesgos y Análisis de Tomadores' },
     {id: 14,
      date: 'Miércoles 09 de noviembre',
     title: 'Garantías Judiciales y Siniestros' },

]

const EscuelaInfo = () => {
  return (
    <section className='info-backgound' > 
        <div  className='info-hero'>
            <p className='info-text'>Somos especialistas y líderes en seguros de caución. Por eso, tenemos la única escuela de caución del mercado y te ofrecemos una capacitación imprescindible para ampliar tus oportunidades de negocio. Para dominar los diferentes tipos de riesgo y las mejores técnicas de comercialización. Para asesorar mejor a tus clientes. Para gestionar con efectividad las cobranzas. Un programa único que abarca todo lo que necesitás para profesionalizarte, desarrollar habilidades específicas y adquirir confianza. Dictado por un equipo multidisciplinario y altamente capacitado.
Transformate vos también en un especialista.
Inscribite y accedé a una capacitación única en el mercado del seguro de caución.

</p> 
            <div className='place-logo-info'>
              <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
            </div>
            <div className="info-block">
            <div className='sub-menu-balance'>
                <div className='items'>
                    <h5 className="item-school-selected">LA ESCUELA</h5>
                    <Link to="/escuela/programa">
                      <h5 className='item-school'>EL PROGRAMA</h5>
                    </Link>
                </div>
                <div>
                  <Link to="/" className='school-home-link'>
                    <h5>HOME</h5>
                  </Link>
                </div> 
              </div>
                <h5 className='info-title'>PRÓXIMAS ACTIVIDADES</h5>
          </div>
          <div className='courses-block'>
            {courses.map((course,id)=>{
                return(
            <CourseTitle key={id} date={course.date} title={course.title}/>
            )
            })} 
            <div className='school-buttons'>
                <Link to='/escuela/inscripcion'>  
                <BigButton className="school-button" name={'INSCRIBITE'} />
                </Link>
                </div>
            </div> 
      </div>
      <div class="push"></div>
      </section>
  )
}

export default EscuelaInfo