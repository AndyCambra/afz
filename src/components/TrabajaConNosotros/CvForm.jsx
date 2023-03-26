import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

export const CvForm = ({sent, handleSubmit, handleChange, errors, candidateInfo, className, classDark}) => {
  return (
    <div className='cv-form'>
    <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
    <div className='input-box'>
    <label className='label-white'>Nombre</label>
      <input name="userName" className={className} value={candidateInfo.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder="Ingresá tu nombre" required={true}/>
      {errors['userName'] && <p className='error-white '>{errors['userName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Apellido</label>
      <input name="userLastName" value={candidateInfo.userLastName} className={className} type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder='Ingresá tu apellido' required={true}/> 
      {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Email</label>
      <input name="email" className={className} value={candidateInfo.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Ingresá tu mail" required={true}/>
      {errors['email'] && <p className='error-white'>{errors['email']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Teléfono</label>
      <input name="phone" className={className} value={candidateInfo.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder="Ingresá tu número con código de área" required={true}/>
      {errors['phone'] && <p className='error-white'>{errors['phone']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>DNI</label>
      <input name="dni" className={className} value={candidateInfo.dni} type="text" onChange={e => handleChange(e, 'dni', 'number', true, 15, 7)} placeholder="Ingresá tu número sin puntos" required={true}/>
      {errors['dni'] && <p className='error-white'>{errors['dni']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Adjuntá tu CV</label>
      <input name="cv" className={className} value={candidateInfo.cv} type="file" onChange={e => handleChange(e, 'cv', 'file', true, false, 3)} accept="pdf" required={true}/>
      {errors['cv'] && <p className='error-white'>{errors['cv']}</p>}
    </div>
    <div className='input-box-content'>
    <label className='label-white'>Mensaje</label>  
      <textarea name="content" className={classDark} value={candidateInfo.content} type="text" onChange={e => handleChange(e, 'content', 'text', true, 250, 3)} placeholder="Dejanos un mensaje" required={true}/>
      {errors['content'] && <p className='error-white'>{errors['content']}</p>}
    </div>
    <div className='inscription-send'>
    <BigButton type="submit" name= "ENVIAR" className="contact-dark-button"/>
    </div>
    </form>
    </div>
  )
}
