import React from 'react'
import './productos.css'
import Title from '../utils/Title/Title'
import TextComponent from './TextComponent'
import Requisites from './Requisites'
import HorizontalPhoto from '../utils/HorizontalPhoto/HorizontalPhoto'
import ListComponent from './ListComponent'
import SubTextComponent from './SubTextComponent'
import BigButton from '../utils/BigButton/BigButton'
import ProductMenu from '../utils/ProductMenu/ProductMenu'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BrowserView} from 'react-device-detect';
import productTexts from '../utils/Texts/productText.json'
import { useLangContext } from '../../Context/LangContext'
import { CallToAction } from './CallToAction'

const Productos = () => {
  const {id} = useParams()
  const {selectedLanguage} = useLangContext()
  const text = productTexts[selectedLanguage];
  const product = text.products.find(p=> p.id=== parseInt(id))

  return (
   <>
   <BrowserView>
      <div className='product-background'>
      <div className='product-content'>
        <div className='product-box'>   
            <ProductMenu category1={text.productMenu.category1} category2={text.productMenu.category2} category3={text.productMenu.category3} category4={text.productMenu.category4} 
            category5={text.productMenu.category5} category6={text.productMenu.category6} category7={text.productMenu.category7} category8={text.productMenu.category8} category9={text.productMenu.category9}/> 
            <Title title={product.title} requisitesTitle={text.requisitesTitle} subtitle={text.productSubtitle}/>
            <div className='product-text'>
            <TextComponent text={product.text} />
            <div className={product.id===2? "list":"display-none"}><ListComponent customs={text.customs} /></div>
            <div className={product.id===1? "extra-text":"display-none"}><SubTextComponent productsExtras={text.productsExtras}/></div>
            <div className={product.id===5? "product-button":"display-none"}><Link to='/cotizador-alquiler'><BigButton className="light-button" name={text.button} /></Link></div>
            <div className={product.id===6? "product-button":"display-none"}><Link to='/cotizador-directores'><BigButton className="light-button" name={text.button} /></Link></div>
            <CallToAction callToAction={text.callToAction} name={text.callToActionButton} className={selectedLanguage==="ES" ? "call-to-action" : "call-to-action-en"} />
            </div>
            
            <Requisites requisitesText1={product.requisitesText1} 
                        requisitesText2={product.requisitesText2} 
                        requisitesText3={product.requisitesText3} 
                        />                
          </div>
        <HorizontalPhoto img={product.img} alt={product.title} />
        </div>
        <div class="push"></div>
    </div>
    </BrowserView>
   
    </>
  )
}

export default Productos
