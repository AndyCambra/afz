import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'
import './trabaja.css'

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
    
      const handleChange=(e)=>{
        const value= e.target.value
      setCandidateInfo({...candidateInfo, [e.target.name]:value});
      } 
      const handleSubmit=(e)=>{
        e.preventDefault();
        setSent(true)
    
      }
    console.log(1, candidateInfo)
    
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
                <input name="userName" className="dark-input" value={candidateInfo.userName} type="text" onChange={handleChange} placeholder="Nombre" required={true}/>
                <input name="userLastName" value={candidateInfo.userLastName} className='dark-input' type="text" onChange={handleChange} placeholder='Apellido' required={true}/> 
                <input name="email" className="dark-input" value={candidateInfo.email} type="email" onChange={handleChange} placeholder="Email" required={true}/>
                <input name="phone" className="dark-input" value={candidateInfo.phone} type="text" onChange={handleChange} placeholder="Teléfono" required={true}/>
                <input name="dni" className="dark-input" value={candidateInfo.dni} type="text" onChange={handleChange} placeholder="DNI" required={true}/>
                <p className="cv-attach">ADJUNTÁ TU CV</p>
                <input name="cv"className="dark-input" value={candidateInfo.cv} type="file" onChange={handleChange} placeholder="DNI"  accept="pdf" required={true}/>
                <textarea name="content" className="dark-area" value={candidateInfo.content} type="text" onChange={handleChange} placeholder="Mensaje" required={true}/>
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