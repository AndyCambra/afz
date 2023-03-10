import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './polizadigital.css'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'
import ReactPlayer from 'react-player'
import PolizaDigitalLinks from './PolizaDigitalLinks'

const PolizaDigital = () => {
  return (
    <div className='digital-background'>
    <div className='digital-content'>
    <div className='digital-box'>   
        <ProductMenu /> 
        <div className='digital-column'>
          <h5 className='digital-title'>PÓLIZA DE CAUCIÓN DIGITAL</h5>
          <h6 className='digital-subtitle'>¿Qué es una Póliza de Caución con Firma Digital?</h6>
          <p className='digital-text'>Se trata de una póliza guardada en formato PDF a la que se le agrega un certificado de firma digital. Este certificado hace imposible que alteres el contenido del PDF y acredita la identidad de la compañia de seguros conforme con lo establecido en el Código Civil y en la Ley de Firma Digital.
                A esto Afianzadora le agrega su propia seguridad, insertando un código QR y un link a nuestro sitio web para que puedas corroborar que los datos de la póliza que recibas coincidan y descargarte una copia de la misma si lo necesitás.
                Así de fácil. Recibís tu PDF firmado digitalmente y se lo hacés llegar al Asegurado.</p>
          <h6 className='digital-subtitle'>¿Cómo visualizar las pólizas con Legalización y Certificación?</h6>
          <p className='digital-text'>A continuación, un breve instructivo en el cual mostramos 4 simples pasos para acceder a nuestras pólizas Legalizadas o Certificadas.</p>
          
          <video poster="../imagenes/video_instructivo_polizas.jpg" title="¿Como visualizar las pólizas con Legalización y Certificación?" preload="auto" controls="controls" src="/img/PolizaDigitalTutoriales/tutorial_Afianzadora.mp4" type="video/mp4" className='digital-video'></video>
          <h6 className='digital-subtitle'>¿Cómo verificar la validez de una firma digital?</h6>
          <h6>POR ÚNICA VEZ</h6>
          <DescargarItemComplex title="Descargar e Instalar el Adobe Acrobat Reader DC" />
          <div className='vimeo-box'>
          <ReactPlayer
          url="https://player.vimeo.com/video/405943096?byline=0&amp;controls=false&amp;portrait=0&amp;title=0"
          controls
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
          url="https://player.vimeo.com/video/405943096?byline=0&amp;controls=false&amp;portrait=0&amp;title=0"
          controls
          />
          </div>
          <div className='digital-block'>
          <h6>CADA VEZ QUE NECESITES VERIFICAR UNA PÓLIZA DE AFIANZADORA:</h6>
          <p className='digital-text'>Abrir el PDF con tu Acrobat Reader y consultar el panel de firma digital para verificar su validez y acceder a los detalles de la misma.</p>
          </div>
          <div className='vimeo-box'>
          <ReactPlayer
          url="https://player.vimeo.com/video/405943096?byline=0&amp;controls=false&amp;portrait=0&amp;title=0"
          controls
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
  )
}

export default PolizaDigital