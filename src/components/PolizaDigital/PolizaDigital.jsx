import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './polizadigital.css'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'
import ReactPlayer from 'react-player'
import PolizaDigitalLinks from './PolizaDigitalLinks'
import { useLangContext } from '../../Context/LangContext';
import productTexts from '../utils/Texts/productText.json'
import digitalSurety from '.././utils/Texts/digitalSurety.json'

const PolizaDigital = () => {
  const {selectedLanguage} = useLangContext()
  const text = productTexts[selectedLanguage];
  const digitalText = digitalSurety[selectedLanguage];
console.log(selectedLanguage)
  return (
    <div className='digital-background'>
    <div className='digital-content'>
    <div className='digital-box'>   
    <ProductMenu category1={text.productMenu.category1} category2={text.productMenu.category2} category3={text.productMenu.category3} category4={text.productMenu.category4} 
            category5={text.productMenu.category5} category6={text.productMenu.category6} category7={text.productMenu.category7} category8={text.productMenu.category8} category9={text.productMenu.category9}/>
        <div className='digital-column'>
          <h5 className='digital-title'>{digitalText.title}</h5>
          <h6 className={selectedLanguage === "EN" ? 'display-none':'digital-subtitle'}>¿Qué es una Póliza de Caución con Firma Digital?</h6>
          <p className='digital-text'>{digitalText.firstText}</p>
          <h6 className={selectedLanguage === "EN" ? 'display-none':'digital-subtitle'}>¿Cómo visualizar las pólizas con Legalización y Certificación?</h6>
          <p className={selectedLanguage === "EN" ? 'display-none':'digital-text'}>A continuación, un breve instructivo en el cual mostramos 4 simples pasos para acceder a nuestras pólizas Legalizadas o Certificadas.</p>
          
          <video poster="../imagenes/video_instructivo_polizas.jpg" title="¿Como visualizar las pólizas con Legalización y Certificación?" preload="auto" controls="controls" src="/img/PolizaDigitalTutoriales/tutorial_Afianzadora.mp4" type="video/mp4" className={selectedLanguage === "EN" ? 'display-none':'digital-video'}></video>
          <h6 className={selectedLanguage === "EN" ? 'display-none':'digital-subtitle'}>¿Cómo verificar la validez de una firma digital?</h6>
          
          <div className={selectedLanguage ==="EN" && "display-none"}>
          <h6>POR ÚNICA VEZ</h6>
          <DescargarItemComplex title="Descargar e Instalar el Adobe Acrobat Reader DC" />
          <div className='vimeo-box'>
          <ReactPlayer
          url="https://www.youtube.com/watch?v=fhK2dO44WdI"
          controls="true"
          playsinline="true"
          playing="true"
          width="100%"
          className='video-size'
          />
          </div>
          <div className='two-column'>
          <div className='first'>
            <h6>DESCARGAR E INSTALAR LOS CERTIFICADOS NECESARIOS PARA HACER LA VALIDACIÓN:</h6>
            <PolizaDigitalLinks caracter={"A"} title='El Certificado Raiz de Argentina' link="https://acraiz.gov.ar/acraizra.crt" />
            <PolizaDigitalLinks caracter={"B"} title="El Certificado de la Autoridad Certificante de nuestra Firma Digital" link="https://www.encodesa.com.ar/firma-digital/encode.crt" />
            <PolizaDigitalLinks caracter={"C"} title="El Certificado de Afianzadora Latinoamericana" link="https://www.afianzadora.com.ar/afianzadora2.cer" />
          </div>
          <div className='second'>
            <h6>SI LA PÓLIZA ES CERTIFICADA:</h6>
            <PolizaDigitalLinks caracter={"D"} title='El Certificado de la Escribanía' link="http://www.afianzadora.com.ar/Certif_Escribania.cer" />
            <PolizaDigitalLinks caracter={"E"} title='El Certificado del Colegio de Escribanos de CABA' link="http://www.afianzadora.com.ar/Certif_Colegio_de_Escribanos.cer" />
            <p className='digital-foot'>(En caso de duda sobre cuál debés instalar, podés instalarlos todos y asegurarte que tu póliza valide en todos los casos)</p>
          </div>
          </div>
        <div className='vimeo-box'>
          <ReactPlayer
          url="https://www.youtube.com/watch?v=PEfrDlmvxik"
          controls
          width="100%"
          className='video-size'
          />
          </div>
          <div className='digital-block'>
          <h6>CADA VEZ QUE NECESITES VERIFICAR UNA PÓLIZA DE AFIANZADORA:</h6>
          <p className='digital-text'>Abrir el PDF con tu Acrobat Reader y consultar el panel de firma digital para verificar su validez y acceder a los detalles de la misma.</p>
          </div>
          <div className='vimeo-box'>
          <ReactPlayer
          url="https://www.youtube.com/watch?v=iKbw69UMfUg"
          controls
          width="100%"
          className='video-size'
          />
          </div>
          <div className='digital-block'>
          <h6 className='digital-subtitle'>¿Como Ejecutar/afectar una Garantia?</h6>
          <p className='digital-text'>Para iniciar el reclamo, podrán dirigirse a la compañia mediante carta documento o nota dirigida a la Aseguradora que mencione el Nro. de poliza afectada e indique el incumplimiento del Tomador que da origen al reclamo. En el caso que oportunamente la Aseguradora deba hacer frente al pago del siniestro, en el acuerdo correspondiente se dejará constancia de que se trata de una póliza entregada por medios electrónicos y no se exigirá devolución de original alguno por parte del Asegurado.</p>
          <h6 className='digital-subtitle'>¿Cómo Desafectar/Anular una Póliza Digital?</h6>
          <p className='digital-text'>Al momento de la finalización de tu obligación, deberás ponernos en conocimiento y aportarnos la documentación que acredite que has cumplido. Dependiendo del tipo de póliza que contrataras, las opciones son:</p>
          <h6 className='final-list'>Nota del Asegurado acreditando el cumplimiento de la obligación sin objeciones</h6>
          <h6 className='final-list'>Acta de Recepción Provisoria</h6>
          <h6 className='final-list'>Acta de Recepción Definitiva</h6>
          <h6 className='final-list'>Certificados de Avance</h6>
          <h6 className='final-list' >Remitos de entrega recibidos en forma fehaciente por el Asegurado.</h6>
          </div>
          </div>
        </div>  
      </div>
    </div>
    <img src="/img/digital1.jpg" alt="Descargar Formularios" className={selectedLanguage === "ES"? 'display-none':'forms-photo'} />
    <div class="push"></div>
    </div>
  )
}

export default PolizaDigital