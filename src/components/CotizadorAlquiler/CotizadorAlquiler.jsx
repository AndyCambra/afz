import React from 'react'
import { Link } from 'react-router-dom'
import './cotizadoralquiler.css'
import { useState } from 'react'
import CotizadorForm from './CotizadorForm'
import CotizadorResponse from './CotizadorResponse'
import BigButton from '../utils/BigButton/BigButton'
import CotizadorAlquilerCliente from './CotizadorAlquilerCliente'


const CotizadorAlquiler = () => {
    const [sent, setSent]= useState(false)
    const [sentThanks, setSentThanks]= useState(false)
    const [showForm, setShowForm]= useState(false)
    const [errors, setErrors]= useState({})

    let [rentData, setRentData]=useState({
        rent: null,
        expenses: null,
        years:"",
      })
      let [rentUser, setRentUser]=useState({
        userName: "",
        userLastName: "",
        email: "",
        phone:"",
        cuit:"",
        contract:"",
        paycheck:"",
      })

      const handleChangeRentData=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const value= e.target.value
        const changedinfoInput = { ...rentData, [e.target.name]:value };
        const err = { ...errors }
        switch (type) {
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
              default:
                break;
              }
              setErrors(err);
              setRentData({...changedinfoInput, [e.target.name]:value});
            }

    const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const value= e.target.value
        
        const changedInfoInputUser = { ...rentUser, [e.target.name]:value };
        const err = { ...errors }
        const noNumbers = /^[a-zA-Z][a-zA-Z ]*$/;
        const filterMail = /.*@[a-z0-9.-]*/i;
        switch (type) {
          case 'text':
            changedInfoInputUser[name] = e.target.value;
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
          
            changedInfoInputUser[name] = e.target.value;
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
            changedInfoInputUser[name] = e.target.value;
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
              case 'file':
              changedInfoInputUser[name] = e.target.value;
              if(required) {
              err[name] = e.target.value ? false : 'El campo es requerido';
              }
              if(value.includes('.pdf') === false){
              err[name] = 'Seleccione un archivo válido'
              }
              break;
              default:
              break;
            }

        setErrors(err);
        
        setRentUser({...changedInfoInputUser, [e.target.name]:value})
    } 
 console.log(rentData, errors)

      const handleSubmitRentData=(e)=>{
        e.preventDefault();
        for (const error in errors) {
          if (errors[error]) {
            return;
          }
        }
        setSent(true)
      }

      console.log(rentData)
      const handleSubmitThanks=(e)=>{
          e.preventDefault();
          for (const error in errors) {
            if (errors[error]) {
              return;
            }
          }
          setSent(true)
          setSentThanks(true)
        }
    const result = ((parseInt(rentData.rent) + parseInt(rentData.expenses))*.1)*parseInt(rentData.years)
    const finalResult = parseInt(result)
    

   const handleClick=(e)=>{
    e.preventDefault();
    setShowForm(true)
   }
   const handleCancel = ()=>{
    setSent(false)
    rentData.rent=null
    rentData.expenses=null
    rentData.years=""
    setShowForm(false)
   }

 
  return (
    <section className='rent-backgound' >
    <div  className='rent-hero'>
        <div className="rent-block">
        <div className='rent-sub-menu'>
            <div className='items'>
                <h5 className="item-rent-selected">ALQUILER</h5>   
              <Link to="" >
                <h5 className="item-rent">DIRECTORES</h5>   
              </Link> 
            </div>
            <div>
              <Link to="/productos/5" className='rent-home-link'>
                <h5>VOLVER</h5>
              </Link>
            </div> 
          </div>
          {sentThanks === true? <div className='rent-title'><h2>GRACIAS {rentUser.userName} POR CONTACTARNOS!</h2><p>Vas a recibir un mail de confirmación a la brevedad</p> </div>: 
          showForm === true? 
          <div className='rent-title'><h2>COMPLETÁ EL FORMULARIO</h2></div>:
          <div className='rent-title'>
            <h2>INGRESÁ LOS DATOS</h2><h2>Y COTIZÁ DE FORMA INSTANTÁNEA</h2>
          </div>}
        </div>
        {sentThanks === true? <div className='rent-form'>
            <Link to= "/" >
                <BigButton className='school-button' name="HOME" /></Link>
        </div>: 
        showForm === true? <div className='rent-form'>
            <CotizadorAlquilerCliente handleChange={handleChange} handleSubmitThanks={handleSubmitThanks} rentUser={rentUser} handleCancel={handleCancel} errors={errors}/>
            </div>:
        <div className='rent-form'>
        {sent === true ? <CotizadorResponse sent={sent} result={finalResult} rentData={rentData} handleClick={handleClick} handleCancel={handleCancel}/>:
          <CotizadorForm handleChangeRentData={handleChangeRentData} handleSubmitRentData={handleSubmitRentData} rentData={rentData} sent={sent} handleClick={handleClick} errors={errors}/>}
        </div>  }
        </div>
    </section>
  )
}

export default CotizadorAlquiler