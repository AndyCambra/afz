import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'
import './trabaja.css'
import { validation } from '../utils/validation'

const TrabajaConNosotros = () => {
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
    
      const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
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
    console.log(1, candidateInfo, sent)
    
    return (
        <section className='work-backgound' >
        <div className='work-hero'>
            <div className="work-block">
                <div className='sub-menu-work'>
                    <div><h5 className="item-work-selected">TRABAJÁ CON NOSOTROS</h5></div>
                    <div><Link to="/" className='school-home-link'><h5>HOME</h5></Link></div> 
                </div>
            </div>
            <div className='work-title'>
                {sent===true ? <div>
                <h2 className='contact-thanks'>Muchas gracias {candidateInfo.userName} por contactarnos!</h2>
                <p className='contact-thanks-text'>Te llegará en breve un mail de confirmación.</p>
                <div><Link to="/"><BigButton name= "HOME" className="contact-dark-button"/></Link></div></div>
                :<h2>CONTANOS SOBRE VOS</h2>}
            </div> 
                
             
              
              <div className='cv-form'>
                <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
                <div className='input-box'>
                  <input name="userName" className="dark-input" value={candidateInfo.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder="Nombre" required={true}/>
                  {errors['userName'] && <p className='error-white '>{errors['userName']}</p>}
                </div>
                <div className='input-box'>
                  <input name="userLastName" value={candidateInfo.userLastName} className='dark-input' type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder='Apellido' required={true}/> 
                  {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
                </div>
                <div className='input-box'>
                  <input name="email" className="dark-input" value={candidateInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Email" required={true}/>
                  {errors['email'] && <p className='error-white'>{errors['email']}</p>}
                </div>
                <div className='input-box'>
                  <input name="phone" className="dark-input" value={candidateInfo.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder="Teléfono" required={true}/>
                  {errors['phone'] && <p className='error-white'>{errors['phone']}</p>}
                </div>
                <div className='input-box'>
                  <input name="dni" className="dark-input" value={candidateInfo.dni} type="text" onChange={e => handleChange(e, 'dni', 'number', true, 15, 7)} placeholder="DNI" required={true}/>
                  {errors['dni'] && <p className='error-white'>{errors['dni']}</p>}
                </div>
                <p className="cv-attach">ADJUNTÁ TU CV</p>
                <div className='input-box'>
                  <input name="cv"className="dark-input" value={candidateInfo.cv} type="file" onChange={e => handleChange(e, 'cv', 'file', true, false, 3)} accept="pdf" required={true}/>
                  {errors['cv'] && <p className='error-white'>{errors['cv']}</p>}
                </div>
                <div className='input-box-content'>  
                  <textarea name="content" className="dark-area" value={candidateInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder="Mensaje" required={true}/>
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

export default TrabajaConNosotros