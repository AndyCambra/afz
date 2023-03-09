import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'


const EscuelaInscripcion = () => {
  let [infoInput, setinfoInput]=useState({
    userName: "",
    userLastName: "",
    company: "",
    email: "",
    phone:"",
    dni:"",
    course:""
  })
  const [sent, setSent]= useState(false)
  const [errors, setErrors]= useState({})

  const handleChange = (e, name, type, required = false, maxLength = false, minLength = false) => {
    const value= e.target.value
    const changedinfoInput = { ...infoInput, [e.target.name]:value };
    const err = { ...errors }
    const filterMail = /.*@[a-z0-9.-]*/i;
    const noNumbers = /^[a-zA-Z][a-zA-Z ]*$/;
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
          if(noNumbers.test(value) === false){
            err[name] = 'Ingresar solo letras'
          }
          break;
      case 'number':
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
        setinfoInput({...changedinfoInput, [e.target.name]:value});
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
console.log(infoInput)
  return (
    <section className='info-backgound' >
    <img src="/img/HexaBlur.png" alt="Fondo escuela" className='info-img'></img>
    <div  className='info-hero'>
        <div className='place-logo'>
        <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
        <div className="inscription-block">
        <div className='sub-school-menu'>
            <div className='items'>
                <h5 className="item-school-selected">INSCRIPCIÓN</h5>   
              <Link to="/escuela/info" >
                <h5 className="item-school">VOLVER</h5>   
              </Link> 
            </div>
            <div>
              <Link to="/" className='school-home-link'>
                <h5>HOME</h5>
              </Link>
            </div> 
          </div>
          <div className='inscription-title'>
            {sent===true ? <div><h2>Gracias {infoInput.userName} por inscribirte!</h2><p>Te llegará en breve un mail de confirmación.</p></div>:<h2>COMPLETÁ EL FORMULARIO</h2>}
          </div>  
            <form className= {sent===true ? 'display-none':'inscription-form'}  onSubmit={handleSubmit}>
            <div className='input-box'>
              <input name="userName" className="light-input" value={infoInput.userName} type="text" onChange={ e => handleChange(e, 'userName', 'text', true, 75, 3)} placeholder="Nombre" required={true}/>
              {errors['userName'] && <p className='error'>{errors['userName']}</p>}
            </div>
            <div className='input-box'>
              <input name="userLastName" value={infoInput.userLastName} className='light-input' type="text" onChange={e => handleChange(e, 'userLastName', 'text', true, 75, 3)} placeholder='Apellido' required={true}/> 
              {errors['userLastName'] && <p className='error'>{errors['userLastName']}</p>}
            </div>
            <div className='input-box'>
              <input name="company" className="light-input" value={infoInput.company} type="text" onChange={e => handleChange(e, 'company', 'text', true, 75, 2)} placeholder="Organización a la que pertenece" required={true}/>
              {errors['company'] && <p className='error'>{errors['company']}</p>}
            </div>
            <div className='input-box'>
              <input name="email" className="light-input" value={infoInput.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 8)} placeholder="Email" required={true}/>
              {errors['email'] && <p className='error'>{errors['email']}</p>}
            </div>
            <div className='input-box'>
              <input name="phone" className="light-input" value={infoInput.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder="Teléfono" required={true}/>
              {errors['phone'] && <p className='error'>{errors['phone']}</p>}
            </div>
            <div className='input-box'>
              <input name="dni" className="light-input" value={infoInput.dni} type="number" onChange={e => handleChange(e, 'dni', 'number', true, 15, 7)} placeholder="DNI" required={true}/>
              {errors['dni'] && <p className='error'>{errors['dni']}</p>}
            </div>
            </form>
            <form className= {sent===true ? 'display-none':'selection-box'} onSubmit={handleSubmit}>
            
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
            <input name="Garantías Judiciales y Siniestros" value="Garantías Judiciales y Siniestros" className='check' type="checkbox" onChange={handleChange}/> 
            <p className='school-label'>Garantías Judiciales y Siniestros</p> 
            </div>
            <div className='inscription-send'>
            <BigButton type="submit" name= "ENVIAR" className="inscription-button"/>
            </div>
            </form>
            </div>
          </div>
       
      </section>
  )
}

export default EscuelaInscripcion
