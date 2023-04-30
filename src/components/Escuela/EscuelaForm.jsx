import React from 'react'
import BigButton from '../utils/BigButton/BigButton'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'


const EscuelaForm = ({errors, infoInput, sent, handleSubmit, handleChange}) => {
  return (
    <>
    <div className={sent===true ? "thanks-message" :'inscription-title'}>
    {sent===true ? <div>
        <h2>Gracias {infoInput.userName} por inscribirte!</h2>
        <p>Te llegará en breve un mail de confirmación.</p>
        {sent === true && isMobile &&
        <div className='final-buttons-box'>
         <Link to="/"><h5 className='home-mobile-footer'>VOLVER</h5></Link>
          <Link to="/"><h5 className='home-mobile-footer'>HOME</h5></Link></div>}
          </div>:
          <h2>COMPLETÁ EL FORMULARIO</h2>}
  </div>  
    <form className= {sent===true ? 'display-none':'inscription-form'}  onSubmit={handleSubmit}>
    <div className='form-first-col'>
    <div className='input-box'>
    <label className='label-black'>Nombre</label>
      <input name="userName" className="light-input" value={infoInput.userName} type="onlyletters" onChange={ e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder="Ingresá tu nombre" required={true}/>
      {errors['userName'] && <p className='error'>{errors['userName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>Apellido</label>
      <input name="userLastName" value={infoInput.userLastName} className='light-input' type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder='Ingresá tu apellido' required={true}/> 
      {errors['userLastName'] && <p className='error'>{errors['userLastName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>Organización</label>
      <input name="company" className="light-input" value={infoInput.company} type="text" onChange={e => handleChange(e, 'company', 'text', true, 75, 2)} placeholder="Organización a la que pertenece" required={true}/>
      {errors['company'] && <p className='error'>{errors['company']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>Email</label>
      <input name="email" className="light-input" value={infoInput.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Ingresá tu mail" required={true}/>
      {errors['email'] && <p className='error'>{errors['email']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>Teléfono</label>
      <input name="phone" className="light-input" value={infoInput.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder="Ingresá tu número con código de área" required={true}/>
      {errors['phone'] && <p className='error'>{errors['phone']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>DNI</label>
      <input name="dni" className="light-input" value={infoInput.dni} type="number" onChange={e => handleChange(e, 'dni', 'number', true, 15, 7)} placeholder="Ingresá tu número sin puntos" required={true}/>
      {errors['dni'] && <p className='error'>{errors['dni']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-black'>¿Cómo llegaste a la Escuela de Caución?</label>
    <select value={infoInput.howToKnow} required={true} onChange={e => handleChange(e, 'howToKnow', 'text', true)} className="select-box-school">
       <option disabled value="" className='option'>Seleccione una opción</option>
       <option className='option' value="Redes">Redes</option>
       <option className='option' value="Ejecutivo de AFZ">Ejecutivo de AFZ</option>
       <option className='option' value="Charlas">Charlas</option>
       <option className='option' value="Referido">Referido</option>
       <option className='option' value="Otro">Otro</option>
           
    </select>
    </div>
    </div>
    <div className= {sent===true ? 'display-none':(isMobile? "":'selection-box')} >
    <h4 className='subtitle-school-form'>Elegí los cursos a los que querés asistir</h4>
    <div className='input-checkbox'>
    <input name="Introducción al Seguro de Caución" value="Introducción al Seguro de Caución" className='check' type="checkbox" onChange={handleChange} /> 
    <p className='school-label'>Introducción al Seguro de Caución</p> 
    </div>
    <div className='input-checkbox'>
    <input name="Cobranza y Refacturación" value="Cobranza y Refacturación" className='check' type="checkbox" onChange={handleChange}/> 
    <p className='school-label'>Cobranza y Refacturación</p> 
    </div>
    <div className='input-checkbox'>
    <input name="Suscripción de Riesgos" value="Suscripción de Riesgos" className='check' type="checkbox" onChange={handleChange} /> 
    <p className='school-label'>Suscripción de Riesgos</p> 
    </div>
    <div className='input-checkbox'>
    <input name="Garantías Judiciales y Siniestros" value="true" className='check' type="checkbox" onChange={handleChange}/> 
    <p className='school-label'>Garantías Judiciales y Siniestros</p> 
    </div>
    <div className='inscription-send'>
    <Link to="/escuela">
              <BigButton name="CANCELAR" className="inscription-cancel-button" /></Link>
    <BigButton type="submit" name= "ENVIAR" className="inscription-button"/>
   
    </div>
    </div>
    </form>
    </>
  )
}

export default EscuelaForm