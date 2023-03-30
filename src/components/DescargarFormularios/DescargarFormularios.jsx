import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './descargarform.css'
import DescargarItem from '../utils/DescargarItem/DescargarItem'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'
import { formTexts, cols } from '../utils/Texts/downloadForms'
import '../utils/ProductMenu/productmenu.css'


  
const DescargarFormularios = () => {
 
  return (
    <div className='forms-background'>
      <div className='forms-content'>
        <div className='form-box'> 
        <div>
            <ProductMenu /> 
            </div>  
            <h5 className='form-title'>{formTexts.title}</h5>
            <div className='first-col'>
              <p>{formTexts.firstText}</p>
              </div>
              <div className='first-col-second-part'>
               <DescargarItem title={cols.item1.title}/>
               <DescargarItemComplex title={cols.item2.title} text={cols.item2.text} fileDownload={cols.item2.fileDownload}/>
                <DescargarItem title={cols.item3.title} />              
                </div>
            
            <div className='second-col'>
                  <p>{formTexts.secondText}</p>
                  </div>
                  <div className='second-col-second-part'>
                  <DescargarItemComplex title={cols.item4.title} text={cols.item4.text} fileDownload={cols.item4.fileDownload}/>
                  <DescargarItemComplex title={cols.item5.title} text={cols.item5.text} fileDownload={cols.item5.fileDownload} />
                  <DescargarItemComplex title={cols.item6.title} text={cols.item6.text} /> 
            </div>
            <div className='tirth-col'>
              <p>{formTexts.finalText}</p>
            </div>
            <div className='tirth-col-second-part'> 
              <DescargarItemComplex title={cols.item7.title} fileDownload={cols.item7.fileDownload}/>
              <DescargarItemComplex title={cols.item8.title} fileDownload={cols.item8.fileDownload}/>

            </div>
             
          </div>
   <img src="/img/DescargarForm.jpg" alt="Descargar Formularios" className='forms-photo'/>
      </div>
    </div>
  )
}

export default DescargarFormularios