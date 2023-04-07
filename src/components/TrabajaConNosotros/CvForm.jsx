import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

export const CvForm = ({sent, handleSubmit, handleChange, errors, candidateInfo, className, classDark, formTexts, sendButton, placeholders}) => {
  return (
    <div className='cv-form'>
    <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
    <div className='input-box'>
    <label className='label-white'>{formTexts.firstName}</label>
      <input name="userName" className={className} value={candidateInfo.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder={placeholders.firstName} required={true}/>
      {errors['userName'] && <p className='error-white '>{errors['userName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{formTexts.lastName}</label>
      <input name="userLastName" value={candidateInfo.userLastName} className={className} type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder={placeholders.lastName} required={true}/> 
      {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Email</label>
      <input name="email" className={className} value={candidateInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder={placeholders.email} required={true}/>
      {errors['email'] && <p className='error-white'>{errors['email']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{formTexts.phone}</label>
      <input name="phone" className={className} value={candidateInfo.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder={placeholders.phone} required={true}/>
      {errors['phone'] && <p className='error-white'>{errors['phone']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>DNI</label>
      <input name="dni" className={className} value={candidateInfo.dni} type="text" onChange={e => handleChange(e, 'dni', 'number', true, 15, 7)} placeholder={placeholders.dni} required={true}/>
      {errors['dni'] && <p className='error-white'>{errors['dni']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{formTexts.attachCv}</label>
      <input name="cv" className={className} value={candidateInfo.cv} type="file" onChange={e => handleChange(e, 'cv', 'file', true, false, 3)} accept="pdf" required={true}/>
      {errors['cv'] && <p className='error-white'>{errors['cv']}</p>}
    </div>
    <div className='input-box-content'>
    <label className='label-white'>{formTexts.message}</label>  
      <textarea name="content" className={classDark} value={candidateInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder={placeholders.message} required={true}/>
      {errors['content'] && <p className='error-white'>{errors['content']}</p>}
    </div>
    <div className='inscription-send'>
    <BigButton type="submit" name={sendButton} className="contact-dark-button"/>
    </div>
    </form>
    </div>
  )
}
