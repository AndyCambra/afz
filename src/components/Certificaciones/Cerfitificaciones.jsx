import React from 'react'
import { Link } from 'react-router-dom'
import FourLogos from './FourLogos'
import './certificaciones.css'
import { useEffect } from 'react'
import  certificationsTexts  from '../utils/Texts/certificationsTexts.json'
import { useLangContext } from '../../Context/LangContext'


const Cerfitificaciones = () => {
  const {selectedLanguage} = useLangContext()
  const text = certificationsTexts[selectedLanguage];

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <section className='certifications-backgound' >
    <div className='balance-grid'>
      <div className="balance-block">
        <div className='sub-menu-balance'>
            <div className='items'>
                <Link to="/balances">
                <h5 className="item-desable">{text.balanceMenu}</h5>
                </Link>  
                  <h5 className='item-certifications'>{text.certificationMenu}</h5>            
            </div>
            <div>
              <Link to="/" className='home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
            <h5 className='horizontalTitle'>{text.title}</h5>
            {text.certificationsTexts.map((item, key)=>{
              return(
              <p className='horizontalText'>{item.text}</p>
            )})}
            
      </div>
      <FourLogos />
      </div>
      
      </section>
  )
}

export default Cerfitificaciones