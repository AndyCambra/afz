import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'
import './trabaja.css'
import { validation } from '../utils/validation'
import { CvForm } from './CvForm'

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
             <CvForm sent={sent} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} candidateInfo={candidateInfo} className={'dark-input'} classDark={'dark-area'}/>
            </div>
          </section>
      )
  
}

export default TrabajaConNosotros