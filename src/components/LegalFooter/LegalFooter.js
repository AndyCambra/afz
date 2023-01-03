import React from 'react'
import './legalFooter.css'

const LegalFooter = () => {
  return (
    <div className='legalFooterBox'>
        <div class="wrapper">
          <div  className='dataFiscalLogo'>
          <img src="img/datafiscal.png" alt="Logo Data Fiscal"className='fiscalLogo'/>
          </div>
          <div className='legalText'>
              <p >AFIANZADORA LATINOAMERICANA COMPAÑÍA DE SEGUROS S.A. 
              Tucumán 117 P.3 - (C1049AAC) Ciudad de Buenos Aires. Teléfono: 3986-2800 
              Afianzadora Latinoamericana Compañía De Seguros S.A. 
              se encuentra inscripta en la Direccion Nacional de Proteccion de Datos Personales (DNPDP). 
              Ver Disp. 10/08 | Servicio de Atención al Asegurado. Formulario Nº 960/NM</p>
        </div>
        <div className='ssnLogoBox'>
          <img src="img/ssn.png" alt="Logo Superintendencia de Seguros de la Nación"className='ssnLogo'/>
          </div>
          <div className='ssnText'>
              <p >Superintendencia de Seguros de la Nación Órgano de Control de la Actividad Aseguradora y Reaseguradora
              0800-666-8400.   www.ssn.gob.ar  N° de inscripción: 0755</p>
          </div>
        <div className='registroLogoBox'>
          <img src="img/Registro_de_Bases.jpeg" alt="Logo Registro de Bases de Datos"className='registroLogo'/>
          </div>
        </div>
        


        
    
    </div>
  )
}

export default LegalFooter