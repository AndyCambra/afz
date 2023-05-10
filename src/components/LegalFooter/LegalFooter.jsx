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
        <div className='registroLogoBox'>
          <img src="/img/Registro_de_Bases.jpeg" alt="Logo Registro de Bases de Datos"className='registroLogo'/>
          </div>
        </div>
    </div>
 
  )
}

export default LegalFooter