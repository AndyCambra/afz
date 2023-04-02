import React from 'react'
import { useState } from 'react'
import'./contacto.css'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { validation } from '../utils/validation'
import ContactForm from './ContactForm'
import { BrowserView, MobileView } from 'react-device-detect'
import SubmenuContactoMobile from './SubmenuContactoMobile'
import ContactoTitleAndText from './ContactoTitleAndText'
import ContactoAdress from './ContactoAdress'
import { CvForm } from '../TrabajaConNosotros/CvForm'

const Contacto = () => {
  let [contactInfo, setContactInfo]=useState({
        userName: "",
        userLastName: "",
        email: "",
        content:"",
  })
  let [candidateInfo, setCandidateInfo]=useState({
    userName: "",
    userLastName: "",
    email: "",
    phone:"",
    dni:"",
    content:"",
    cv:""
  })
  const [sent, setSent]= useState(false)
  const [errors, setErrors]= useState({})
  const [change, setChange]= useState(false)
    
      
  const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
    const infoInput=contactInfo
    const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)     
      setContactInfo({...changedInfoInput, [e.target.name]:value});
      setErrors(err);
      } 

  const handleCandidate=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const infoInput=candidateInfo
        const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)
        
            setCandidateInfo({...changedInfoInput, [e.target.name]:value});
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
  
}
const handleClick=(e)=>{
  e.preventDefault();
  setChange(!change)
}
console.log(contactInfo)

  return (
    <>
    <BrowserView>
    <section className='contact-backgound' >
    <div className='contact-grid'>
     <ContactoTitleAndText />
      <ContactoAdress />
        <div className='work-button-in-contact'>
            <Link to="/trabaja-con-nosotros">
        <BigButton name="TRABAJÁ CON NOSOTROS" className="small-button" />
        </Link>
        </div>
        <ContactForm sent={sent} contactInfo={contactInfo} handleSubmit={handleSubmit} errors={errors} handleChange={handleChange}/>
      </div>
    </section>
    </BrowserView>
    <MobileView>
      <div className='first-box-mobile'>
        <SubmenuContactoMobile handleClick={handleClick} change={change}/>
        <div className='img-box'>
        <img src="/img/MobileImages/ContactoMobile.jpg" alt="" />
        </div>
      </div>
      <div className='bordeax-background'>
        {change === false ? (
          <>
          <ContactoTitleAndText />
          <ContactoAdress />
          <ContactForm sent={sent} contactInfo={contactInfo} handleSubmit={handleSubmit} errors={errors} handleChange={handleChange}/>
          </>) 
          :( 
          <>
          {sent===true ? <div>
                <h2 className='contact-thanks'>Muchas gracias {candidateInfo.userName} por contactarnos!</h2>
                <p className='contact-thanks-text'>Te llegará en breve un mail de confirmación.</p>
                <div><Link to="/"><BigButton name= "HOME" className="contact-dark-button"/></Link></div></div>
                :<h2 className='contact-subtitle'>CONTANOS SOBRE VOS</h2>}
          <CvForm sent={sent} handleSubmit={handleSubmit} handleChange={handleCandidate} errors={errors} candidateInfo={candidateInfo} classDark={'white-area'} className={'white-input'}/>
          </>
          )
        }
        </div>

    </MobileView>
    </>
  )
}

export default Contacto