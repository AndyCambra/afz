import React from 'react'
import './escuela.css'
import { Link } from 'react-router-dom'
import CourseTitle from '../utils/CourseTitle/CourseTitle'
import Button from '../utils/BigButton/Button'

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
        <img src="./img/HexaBlur.png" alt="Fondo escuela" className='info-img'></img>
        <div  className='info-hero'>
            <p className='info-text'>Somos especialistas y líderes en seguros de caución. Por eso, tenemos la única escuela de caución del mercado que te ofrece capacitación para ampliar exponencialmente las oportunidades con tus clientes, no solo en Seguros de Caución sino en todos los otros riesgos. Técnicas de comercialización (cómo vender), características de los principales productos; cómo asesorar a tus clientes de manera asertiva y cómo ser efectivo en la cobranza son solo algunas de las temáticas que encontrarás en la escuela. Un programa único que abarca todo lo que necesitás para profesionalizarte,</p>
            <p className='info-text-second'>desarrollar habilidades específicas y adquirir confianza. Dictado por un equipo multidisciplinario de nivel gerencial y altamente capacitado, que hará de esta experiencia una simulación del negocio en tiempo real. Contenidos que van desde el conocimiento básico, como la introducción al mundo del seguro de caución, hasta las cuestiones más particulares de productos específicos como pueden ser las Garantías Judiciales. Transformate vos también en un especialista. Inscribite y accedé a una capacitación única en el mercado del seguro: Escuela de Caución.</p> 
            <img src="./img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
            <div className="info-block">
            <div className='sub-menu-balance'>
                <div className='items'>
                    <h5 className="item-balance">LA ESCUELA</h5>
                    <Link to="/certificaciones">
                      <h5 className='item'>EL PROGRAMA</h5>
                    </Link>
                </div>
                <div>
                  <Link to="/" className='home-link'>
                    <h5 className='item-home'>HOME</h5>
                  </Link>
                </div> 
              </div>
                <h5 className='info-title'>PRÓXIMAS ACTIVIDADES</h5>
          </div>
          <div className='courses-block'>
            {courses.map((course,id)=>{
                return(
            <CourseTitle date={course.date} title={course.title}/>
            )
            })} 
            <div className='school-buttons'>
                <a href='./escuelainscripcion'>  
                <Button name={'INSCRIBITE'} />
                </a>
                </div>
            </div> 
      </div>
      </section>
  )
}

export default EscuelaInfo