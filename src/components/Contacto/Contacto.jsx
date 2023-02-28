import React from 'react'
import { useState } from 'react'
import'./contacto.css'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'

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
        const value= e.target.value
        const changedinfoInput = { ...contactInfo, [e.target.name]:value };
    const err = { ...errors }
    const filterMail = /.*@[a-z0-9.-]*/i;
    switch (type) {
      case 'text':
        changedinfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          break;
      case 'email':
        changedinfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          if(filterMail.test(value) === false){
            err[name] = 'Ingrese un mail válido'
          }
          break;
        
          default:
          break;
    }
      setContactInfo({...changedinfoInput, [e.target.name]:value});
      setErrors(err);
      } 
const handleSubmit=(e)=>{
  e.preventDefault();
  setSent(true)
}
console.log(contactInfo)

  return (
    <section className='contact-backgound' >
    <div className='contact-grid'>
      <div className="contact-block">
        <h5 className='horizontalTitle'>COBERTURA SIN FRONTERAS</h5>
        <p className='horizontalText'>Estés donde estés, te ofrecemos asesoramiento integral y nuestra póliza digital que te brinda una amplia cobertura a nivel del país y de la región.</p>
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
        <div className='work-button'>
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
                <input name="userName" className="white-input" value={contactInfo.userName} type="text" onChange={e => handleChange(e, 'userName', 'text', true, 75, 3)} placeholder="Nombre" required={true}/>
                {errors['userName'] && <p className='error-white'>{errors['userName']}</p>}
            </div> 
            <div className='input-box'>   
                <input name="userLastName" value={contactInfo.userLastName} className='white-input' type="text" onChange={e => handleChange(e, 'userLastName', 'text', true, 75, 3)} placeholder='Apellido' required={true}/> 
                {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
            </div>
            <div className='input-box'>   
                <input name="email" className="white-input" value={contactInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Email" required={true}/>
                {errors['email'] && <p className='error-white'>{errors['email']}</p>}
            </div>   
            <div className='input-box-content'>  
                <textarea name="content" className="white-area" value={contactInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder="Mensaje" required={true}/>
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