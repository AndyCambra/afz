import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/Imput/input.css'
import { useState } from 'react'
import BigButton from '../utils/BigButton/BigButton'

const EscuelaInscripcion = () => {
  let [infoinput, setInfoInput]=useState({
    userName: "",
    userLastName: "",
    company: "",
    email: "",
    phone:"",
    dni:"",
    course:""
  })
  const [sent, setSent]= useState(false)

  
  const handleChange=(e)=>{
    const value= e.target.value
  setInfoInput({...infoinput, [e.target.name]:value});
  } 
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSent(true)

  }
console.log(1, infoinput)


  return (
    <section className='info-backgound' >
    <img src="/img/HexaBlur.png" alt="Fondo escuela" className='info-img'></img>
    <div  className='info-hero'>
        <div className='place-logo'>
        <img src="/img/LogoEscuelaAFZ.png" alt="Escuela de Caución AFZ"></img>
        </div>
        <div className="inscription-block">
        <div className='sub-menu-balance'>
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
            {sent===true ? <div><h2>Gracias {infoinput.userName} por inscribirte!</h2><p>Te llegará en breve un mail de confirmación.</p></div>:<h2>COMPLETÁ EL FORMULARIO</h2>}
          </div>  
            <form className= {sent===true ? 'display-none':'inscription-form'} onSubmit={handleSubmit}>
            <input name="userName" className="light-input" value={infoinput.userName} type="text" onChange={handleChange} placeholder="Nombre" required={true}/>
            <input name="userLastName" value={infoinput.userLastName} className='light-input' type="text" onChange={handleChange} placeholder='Apellido' required={true}/> 
            <input name="company" className="light-input" value={infoinput.company} type="text" onChange={handleChange} placeholder="Organización a la que pertenece" required={true}/>
            <input name="email" className="light-input" value={infoinput.email} type="email" onChange={handleChange} placeholder="Email" required={true}/>
            <input name="phone" className="light-input" value={infoinput.phone} type="text" onChange={handleChange} placeholder="Teléfono" required={true}/>
            <input name="dni" className="light-input" value={infoinput.dni} type="text" onChange={handleChange} placeholder="DNI" required={true}/>
            <select name="course" className="light-input" value={infoinput.course} type="list" onChange={handleChange} placeholder="Curso" required={true}>
              <option value="Introducción al Seguro de Caución">Introducción al Seguro de Caución</option>
              <option value="Cobranza y Refacturación">Cobranza y Refacturación</option>
              <option value="Suscripción de Riesgos">Suscripción de Riesgos</option>
              <option value="Garantías Judiciales y Siniestros">Garantías Judiciales y Siniestros</option>
            </select>
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
