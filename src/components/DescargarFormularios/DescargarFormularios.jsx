import React from 'react'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import './descargarform.css'
import DescargarItem from '../utils/DescargarItem/DescargarItem'
import DescargarItemComplex from '../utils/DescargarItem/DescargarItemComplex'
import '../utils/ProductMenu/productmenu.css'
import productTexts from '../utils/Texts/productText.json'
import { useLangContext } from '../../Context/LangContext'
import downloadFormsText from '../utils/Texts/downloadFormsTexts.json'


  
const DescargarFormularios = () => {
  const {selectedLanguage} = useLangContext()
  const text = productTexts[selectedLanguage];
  const textDownload = downloadFormsText[selectedLanguage];
 
  return (
    <div className='forms-background'>
      <div className='forms-content'>
        <div className='form-box'> 
        <div>
            <ProductMenu category1={text.productMenu.category1} category2={text.productMenu.category2} category3={text.productMenu.category3} category4={text.productMenu.category4} 
            category5={text.productMenu.category5} category6={text.productMenu.category6} category7={text.productMenu.category7} category8={text.productMenu.category8} category9={text.productMenu.category9}/> 
            </div>  
            <h5 className='form-title'>{textDownload.formTexts.title}</h5>
            <div className='first-col'>
              <p>{textDownload.formTexts.firstText}</p>
              </div>
              <div className='first-col-second-part'>
               <DescargarItem title={textDownload.cols.item1.title}/>
               <DescargarItemComplex title={textDownload.cols.item2.title} text={textDownload.cols.item2.text} fileDownload={textDownload.cols.item2.fileDownload}/>
                <DescargarItem title={textDownload.cols.item3.title} />              
                </div>
            
            <div className='second-col'>
                  <p>{textDownload.formTexts.secondText}</p>
                  </div>
                  <div className='second-col-second-part'>
                  <DescargarItemComplex title={textDownload.cols.item4.title} text={textDownload.cols.item4.text} fileDownload={textDownload.cols.item4.fileDownload}/>
                  <DescargarItemComplex title={textDownload.cols.item5.title} text={textDownload.cols.item5.text} fileDownload={textDownload.cols.item5.fileDownload} />
                  <DescargarItemComplex title={textDownload.cols.item6.title} text={textDownload.cols.item6.text} /> 
            </div>
            <div className='tirth-col'>
              <p>{textDownload.formTexts.finalText}</p>
            </div>
            <div className='tirth-col-second-part'> 
              <DescargarItemComplex title={textDownload.cols.item7.title} fileDownload={textDownload.cols.item7.fileDownload}/>
              <DescargarItemComplex title={textDownload.cols.item8.title} fileDownload={textDownload.cols.item8.fileDownload}/>

            </div>
             
          </div>
   <img src="/img/DescargarForm.jpg" alt="Descargar Formularios" className='forms-photo'/>
      </div>
    </div>
  )
}

export default DescargarFormularios