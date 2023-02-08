import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'

const EscuelaPrograma = () => {
  return (
    <section className='info-backgound' >
    <img src="/img/HexaBlur.png" alt="Fondo escuela" className='info-img'></img>
    <div  className='info-hero'>
        <div  className="video-youtube" >
        <ReactPlayer
        url="https://www.youtube.com/embed/pUVgzwUjVbc?rel=0&amp;autoplay=1"
        controls
        width='100%'
        height='133%' /> 
        </div>
        <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        <div className="info-block">
        <div className='sub-menu-balance'>
            <div className='items'>
            <Link to="/escuela/info">
                <h5 className='item-program'>LA ESCUELA</h5>
            </Link>
                  <h5 className="item-program-selected">EL PROGRAMA</h5>    
            </div>
            <div>
              <Link to="/" className='school-home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
          <h5 className='info-title'>CONTENIDOS</h5>
        </div>
            
            <div className='program-block'>
            <h4>Introducción al Seguro de Caución y Comercialización</h4>
            <h6 className='program-list' >El ABC del seguro de caución, empezando desde cero.</h6>
            <h6 className='program-list'>Toda la información necesaria para detectar alternativas de negocio.</h6>
            <h6 className='program-list'>Estrategias para la venta.</h6>
            <h6 className='program-list'>Técnicas de cross selling para, a partir del seguro de caución, incrementar la cartera de Patrimoniales, ART y otros intereses asegurables.</h6>
            <h4 className='program-subtitle'>Suscripción de Riesgos y Análisis de Tomadores</h4>
            <h6 className='program-list'>Parámetros de calificación.</h6>
            <h6 className='program-list'>Cómo presentar los negocios de manera exitosa.</h6>
            <h6 className='program-list'>Cuestiones estratégicas a tener en cuenta al presentar un negocio.</h6>
            </div>
            <div className='program-block2'>
            <h4>Garantías Judiciales y Siniestros</h4>
            <h6 className='program-list' >Herramientas para detección de garantías judiciales.</h6>
            <h6 className='program-list'>Comó asesorar al cliente.</h6>
            <h6 className='program-list'>Mecanismos de ejecución de garantías de caución.</h6>
            <h6 className='program-list'>El siniestro como parte del negocio.</h6>
            <h4 className='program-subtitle'>Cobranza y Refacturación</h4>
            <h6 className='program-list'>Cómo gestionar las cobranzas de manera profesional..</h6>
            <h6 className='program-list'>Cómo administrar refacturaciones.</h6>
            <h6 className='program-list'>La tecnología como aliada para la solución del “talón de Aquiles” del negocio.</h6>
            <div className='program-buttons'>
                <Link to='/escuela/inscripcion'>  
                <BigButton className="school-button" name={'INSCRIBITE'} />
                </Link>
                </div>
            </div>
      </div>
  
      </section>
  )
}
export default EscuelaPrograma