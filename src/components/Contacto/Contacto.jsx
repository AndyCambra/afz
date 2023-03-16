import React from 'react'
import { useState } from 'react'
import'./contacto.css'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { validation } from '../utils/validation'

const Contacto = () => {
  let [contactInfo, setContactInfo]=useState({
        userName: "",
        userLastName: "",
        email: "",
        content:"",
  })
  const [sent, setSent]= useState(false)
  const [errors, setErrors]= useState({})
    
      
  const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
    const infoInput=contactInfo
    const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)     
      setContactInfo({...changedInfoInput, [e.target.name]:value});
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
console.log(contactInfo)

  return (
    <section className='contact-backgound' >
    <div className='contact-grid'>
      <div className="contact-block">
        <h5 className='horizontal-title'>COBERTURA SIN FRONTERAS</h5>
        <p className='horizontal-text'>Estés donde estés, te ofrecemos asesoramiento integral y nuestra póliza digital que te brinda una amplia cobertura a nivel del país y de la región.</p>
        </div>
       
        <div className='first-column'>
            <h6 className='contact-subtitle'>BUENOS AIRES</h6>
            <p>Tucumán 117 Piso 3</p>
            <p>(C1049AAC) Ciudad de Buenos Aires</p>
            <p>Argentina</p>
            <p className='highlight-top'>(+5411) 3986 2800</p>
            <p className='highlight'>info@afianzadora.com.ar</p>
        </div>  
        <div className='second-column'>
            <h6 className='contact-subtitle'>ROSARIO</h6>
            <p>Entre Ríos 655 Piso 3, Of. B</p>
            <p>(2000) Rosario</p>
            <p>Santa Fe, Argentina</p>
            <p className='highlight-top'>(0341) 527-1315</p>
            <p className='highlight'>rosario@afianzadora.com.ar</p>
        </div> 
        <div className='work-button-in-contact'>
            <Link to="/trabaja-con-nosotros">
        <BigButton name="TRABAJÁ CON NOSOTROS" className="small-button" />
        </Link>
        </div>
        <div className='contact-form'>
        {sent===true ? 
            <div>
                <h2 className='contact-thanks'>Muchas gracias {contactInfo.userName} por tu consulta!</h2>
                <p className='contact-thanks-text'>Te llegará en breve un mail de confirmación.</p>
                <div className='inscription-send'>
                <Link to="/"><BigButton name= "HOME" className="contact-dark-button"/></Link></div>
            </div> : <h6 className='contact-subtitle'>DEJANOS UN MENSAJE</h6>}
        
            <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
            <div className='input-box'>
              <label className='label-white'>Nombre</label>  
                <input name="userName" className="white-input" value={contactInfo.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder="Ingresá tu nombre" required={true}/>
                {errors['userName'] && <p className='error-white'>{errors['userName']}</p>}
            </div> 
            <div className='input-box'>
            <label className='label-white'>Apellido</label>  
                <input name="userLastName" value={contactInfo.userLastName} className='white-input' type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder='Ingresá tu apellido' required={true}/> 
                {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
            </div>
            <div className='input-box'> 
            <label className='label-white'>Email</label>  
                <input name="email" className="white-input" value={contactInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Ingresá tu mail" required={true}/>
                {errors['email'] && <p className='error-white'>{errors['email']}</p>}
            </div>   
            <div className='input-box-content'> 
            <label className='label-white'>Mensaje</label>
                <textarea name="content" className="white-area" value={contactInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder="Dejanos un mensaje" required={true}/>
                {errors['content'] && <p className='error-white'>{errors['content']}</p>}
            </div>               
                <div className='inscription-send'>
                <BigButton type="submit" name= "ENVIAR" className="contact-dark-button"/>
                </div>
            </form>
        </div>
    
    </div>
    
      </section>
  )
}

export default Contacto