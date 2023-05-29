import React from 'react'
import './legalFooter.css'
import legalFooter from '../utils/Texts/legalFooter.json'
import { useLangContext } from '../../Context/LangContext'

const LegalFooter = () => {
  const {selectedLanguage} = useLangContext()
  const text = legalFooter[selectedLanguage];
  return (

    <div className='legalFooterBox'>
        <div className="wrapper">
          <div className='dataFiscalLogo'>
          <img src="/img/datafiscal.png" alt="Logo Data Fiscal"className='fiscalLogo'/>
          </div>
          <div className='legalText'>
              <p>{text.firstCol}</p>
        </div>
        <div className='ssnLogoBox'>
          <img src="/img/ssn.png" alt="Logo Superintendencia de Seguros de la Nación"className='ssnLogo'/>
          </div>
          <div className='ssnText'>
              <p >{text.secondCol}</p>
          </div>
          <div className='service'>
              <p className='service-text'>{text.service.firstText}</p>
              <p className='service-sub'>{text.service.subtitle}</p>
             <div className='service-responsables'>
             <div className='service-person-box'>
             <h5>{text.service.responsible}</h5>
             <p className='service-person'>Agustín Del Torchio</p>
             <p className='service-text'> Tel. 011 3986 2836 </p>
             <p className='service-text'> email: adeltorchio@afianzadora.com.ar</p>
             </div>
             <div>
             <h5>{text.service.substitute}</h5>
             <p className='service-person'>Nahuel Mainini</p>
             <p className='service-text'>Tel. 011 3986 2800</p>
             <p className='service-text'>email: nmainini@afianzadora.com.ar</p>
             </div>
             </div>
             <div className='service-responsables'>
             <p className='service-text'>{text.service.lastText}</p>
             </div>
          </div>
        </div>
      
    </div>
 
  )
}

export default LegalFooter