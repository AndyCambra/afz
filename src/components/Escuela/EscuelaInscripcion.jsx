import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import { Validation } from '../utils/validation'
import { BrowserView, MobileView } from 'react-device-detect';
import EscuelaForm from './EscuelaForm'


const EscuelaInscripcion = () => {
  let [infoInput, setinfoInput]=useState({
    userName: "",
    userLastName: "",
    company: "",
    email: "",
    phone:"",
    dni:"",
    howToKnow:""
  })
  const [sent, setSent]= useState(false)
  const [errors, setErrors]= useState({})

  const handleChange = (e, name, type, required = false, maxLength = false, minLength = false) => {
  const {changedInfoInput, value, err}= Validation(e, name, type, required,maxLength, minLength, infoInput, errors)
        setinfoInput({...changedInfoInput, [e.target.name]:value});
        setErrors(err);
      }

  const handleSubmit=(e)=>{
    e.preventDefault();
    for (const error in errors) {
      if (errors[error]) {
        return;
      }
    }
    setSent(true)
    window.scrollTo(0,0);

  }
console.log(infoInput)
  return (
    <>
    <BrowserView>
    <section className='info-backgound' >
    <div  className='info-hero'>
        <div className='place-logo'>
        <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
        <div className="inscription-block">
        <div className='sub-school-menu'>
            <div className='items'>
                <h5 className="item-school-selected">INSCRIPCIÓN</h5>   
              <Link to="/escuela/info" >
                <h5 className="item-school">VOLVER</h5>   
              </Link> 
            </div>
            <div>
              <Link to="/" className='school-home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
          <EscuelaForm errors={errors} infoInput={infoInput} sent={sent} handleSubmit={handleSubmit} handleChange={handleChange} />         
           </div>
          </div>
          <div class="push"></div>
      </section>
      </BrowserView>
      <MobileView>
      <section className='info-backgound' > 
        <div className='inscription-school-mobile-box'>
          <div className='logo-school-box-mobile'><img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img></div>
          <EscuelaForm errors={errors} infoInput={infoInput} sent={sent} handleSubmit={handleSubmit} handleChange={handleChange} />  
          </div>
          <div class="push"></div>
         </section>
      </MobileView>
      </>
  )
}

export default EscuelaInscripcion
