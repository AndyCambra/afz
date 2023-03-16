import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import { firstColumn, secondColumn } from '../utils/Texts/schoolProgramText'



const EscuelaPrograma = () => {
  return (
    <>
    <section className='info-backgound'>
    <div  className='info-hero'>
        <div  className="video-youtube" >
        <ReactPlayer
        url="https://www.youtube.com/embed/pUVgzwUjVbc?rel=0&amp;autoplay=1"
        controls
        width='100%'
        height='133%' /> 
        </div>
        <div className='place-logo-info'>
            <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
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
              {firstColumn.map((item, key)=>{
                return(
                  <>
                <h4 className='program-subtitle'>{item.title}</h4>
                <h6 className='program-list'>{item.topic}</h6>
                </>
                )
              })}
            </div>
            <div className='program-block2'>
            {secondColumn.map((item, key)=>{
                return(
                  <>
                <h4 className='program-subtitle'>{item.title}</h4>
                <h6 className='program-list'>{item.topic}</h6>
                </>
                )
              })}
           
            <div className='program-buttons'>
                <Link to='/escuela/inscripcion'>  
                <BigButton className="school-button" name={'INSCRIBITE'} />
                </Link>
                </div>
            </div>
            
      </div>
      <div class="push"></div>
      </section>
     
      </>
  )
}
export default EscuelaPrograma