import React from 'react'
import { Link } from 'react-router-dom'
import './cotizadoralquiler.css'
import { useState, useEffect } from 'react'
import CotizadorForm from './CotizadorForm'
import CotizadorResponse from './CotizadorResponse'
import BigButton from '../utils/BigButton/BigButton'
import CotizadorAlquilerCliente from './CotizadorAlquilerCliente'
import { validation } from '../utils/validation'
import { BrowserView, MobileView } from 'react-device-detect'
import SubmenuCotizadores from './SubmenuCotizadores'


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
    const [allRentData, setAllRentData]= useState([])

    useEffect(()=>{
      window.scrollTo(0,0);
    },[])

      const handleChangeRentData=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const infoInput=rentData
        const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)
              setErrors(err);
              setRentData({...changedInfoInput, [e.target.name]:value});
            }

    const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
      const infoInput=rentUser
      const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)
        setErrors(err);
        setRentUser({...changedInfoInput, [e.target.name]:value})
    } 
 console.log(111, allRentData)

      const handleSubmitRentData=(e)=>{
        e.preventDefault();
        for (const error in errors) {
          if (errors[error]) {
            return;
          }
        }
        setSent(true)
      }

      
      const handleSubmitThanks=(e)=>{
          e.preventDefault();
          for (const error in errors) {
            if (errors[error]) {
              return;
            }
          }
          setSent(true)
          setSentThanks(true)
          setAllRentData({...rentData, ...rentUser})
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

   console.log(sentThanks)
  return (
    <>
    <BrowserView>
   
    <section className='rent-backgound' >
    <div  className='rent-hero'>
        <div className="rent-block">
        <div className='rent-sub-menu'>
            <div className='items'>
                <h5 className="item-rent-selected">ALQUILER</h5>   
              <Link to="/cotizador-directores" >
                <h5 className="item-rent">DIRECTORES</h5>   
              </Link> 
            </div>
            <div>
              <Link to="/productos/5" className='rent-home-link'>
                <h5>VOLVER</h5>
              </Link>
            </div> 
          </div>
          {sentThanks === true? 
          <div className='rent-title'><h2>GRACIAS {rentUser.userName} POR CONTACTARNOS!</h2><p>Vas a recibir un mail de confirmación a la brevedad</p> </div>: 
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
    </BrowserView>
    <MobileView>
    <div className='first-box-mobile'>
        <SubmenuCotizadores/>
        <div className='img-box'>
        <img src="/img/AlquilerLlaves.jpg" alt="" />
        </div>
      </div>
      <div className='bordeax-background'>
      {sentThanks === true? 
          <div className='rent-title'><h2>GRACIAS {rentUser.userName} POR CONTACTARNOS!</h2><p>Vas a recibir un mail de confirmación a la brevedad</p> </div>: 
          showForm === true? 
          <div className='rent-title'><h2>COMPLETÁ EL FORMULARIO</h2></div>:
          <div className='rent-title'>
            <h2 className='contact-subtitle'>INGRESÁ LOS DATOS Y COTIZÁ DE FORMA INSTANTÁNEA</h2>
          </div>}
          {sentThanks === true? <div className='rent-form'>
        </div>: 
           showForm === true? <div className='rent-form'>
            <CotizadorAlquilerCliente handleChange={handleChange} handleSubmitThanks={handleSubmitThanks} rentUser={rentUser} handleCancel={handleCancel} errors={errors}/>
            </div>:
        <div className='rent-form'>
        {sent === true ? <CotizadorResponse sent={sent} result={finalResult} rentData={rentData} handleClick={handleClick} handleCancel={handleCancel}/>:
          <CotizadorForm handleChangeRentData={handleChangeRentData} handleSubmitRentData={handleSubmitRentData} rentData={rentData} sent={sent} handleClick={handleClick} errors={errors}/>}
        </div>  }
          
        </div>

    </MobileView></>
  )
}

export default CotizadorAlquiler