import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'
import './trabaja.css'
import { Validation } from '../utils/validation'
import { CvForm } from './CvForm'
import contactTexts from '../utils/Texts/contactTexts.json'
import { useLangContext } from '../../Context/LangContext'
import errorTexts from '../utils/Texts/errorTexts.json'

const TrabajaConNosotros = () => {
  const {selectedLanguage} = useLangContext()
  const text = contactTexts[selectedLanguage];
  const errorMessages = errorTexts[selectedLanguage];
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
        const {changedInfoInput, value, err}= Validation(e, name, type, required,maxLength, minLength, infoInput, errors, errorMessages)
        
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
                    <div><h5 className="item-work-selected">{text.workButton}</h5></div>
                    <div><Link to="/" className='school-home-link'><h5>HOME</h5></Link></div> 
                </div>
            </div>
            <div className='work-title'>
                {sent===true ? <div>
                <h2 className='contact-thanks'>{text.thanks1} {candidateInfo.userName} {text.thanks2}</h2>
                <p className='contact-thanks-text'>{text.confirmation}</p>
                <div><Link to="/"><BigButton name= "HOME" className="contact-dark-button"/></Link></div></div>
                :<h2>{text.cvTitle}</h2>}
            </div>     
             <CvForm sent={sent} handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} candidateInfo={candidateInfo} className={'dark-input'} classDark={'dark-area'} formTexts={text.formTexts} sendButton={text.sendButton} placeholders={text.placeholders} />
            </div>
          </section>
      )
  
}

export default TrabajaConNosotros