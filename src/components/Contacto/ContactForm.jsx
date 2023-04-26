import React from 'react'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'

const ContactForm = ({sent, contactInfo, handleSubmit, errors, handleChange, thanks1, thanks2, confirmation, formTitle, send, formTexts, placeholders}) => {
  return (
    <div className='contact-form'>
    {sent===true ? 
        <div>
            <h2 className='contact-thanks'>{thanks1} {contactInfo.userName} {thanks2}</h2>
            <p className='contact-thanks-text'>{confirmation}</p>
            <div className='inscription-send'>
            <Link to="/"><BigButton name= "HOME" className="contact-dark-button"/></Link></div>
        </div> : <h6 className='contact-subtitle'>{formTitle}</h6>}
    
        <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
        <div className='input-box'>
          <label className='label-white'>{formTexts.firstName}</label>  
            <input name="userName" className="white-input" value={contactInfo.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder={placeholders.firstName} required={true}/>
            {errors['userName'] && <p className='error-white'>{errors['userName']}</p>}
        </div> 
        <div className='input-box'>
        <label className='label-white'>{formTexts.lastName}</label>  
            <input name="userLastName" value={contactInfo.userLastName} className='white-input' type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder={placeholders.lastName}  required={true}/> 
            {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
        </div>
        <div className='input-box'> 
        <label className='label-white'>Email</label>  
            <input name="email" className="white-input" value={contactInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder={placeholders.email}  required={true}/>
            {errors['email'] && <p className='error-white'>{errors['email']}</p>}
        </div>   
        <div className='radio-box'>
        <p className='radio-title'>Sos productor de seguros?</p>
        <p className='rent-label'>SI</p>
            <input name="broker" value={true}  className='radio' type="radio" onChange={handleChange} required={true}/> 
        <p className='rent-label'>NO</p>
            <input name="broker" value={false} className='radio' type="radio" onChange={handleChange} required={true}/> 
    </div>
        <div className='input-box-content'> 
        <label className='label-white'>{formTexts.message}</label>
            <textarea name="content" className="white-area" value={contactInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder={placeholders.message}  required={true}/>
            {errors['content'] && <p className='error-white'>{errors['content']}</p>}
        </div>               
            <div className='inscription-send'>
            <BigButton type="submit" name={send} className="contact-dark-button"/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm

