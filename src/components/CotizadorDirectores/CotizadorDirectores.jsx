import React from 'react'
import { Link } from 'react-router-dom'
import './cotizadordirectores.css'
import CotizadorDirectoresForm from './CotizadorDirectoresForm'
import { useState } from 'react'
import CotizadorDirectoresQuestion from './CotizadorDirectoresQuestion'
import CotizadorDirectiresResponse from './CotizadorDirectiresResponse'
import CotizadorDirectoresClientForm from './CotizadorDirectoresClientForm'
import DatosDeFacturacion from './DatosDeFacturacion'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorDirectores = () => {
    const [sent, setSent]= useState(false)
    const [errors, setErrors]= useState({})
    const [showForm, setShowForm]= useState(false)
    const [goToQuestion, setGoToQuestion]= useState(false)
    const [goToBill, setGoToBill]= useState(false)
    const [sentThanks, setSentThanks]= useState(false)
    let [amount, setAmount]=useState({
        clientAmount: null,
        quantity: 1,
    })
    let [clientData, setClientData]=useState({
        name: "",
        lastName: "",
        email: "",
        cuit: null,
        adress:"",
        companyName:"",
        companyAdress:""
      })
    let [billTo, setBillTo]=useState({
        billName: "",
        billEmail: "",
        billCuit: null,
        billPhone: null,
        billAdress:"",
      })
    const [allDirectorData, setAllDirectorData]= useState([])
    const result = 10000


      const handleChangeDirectorData=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const value= e.target.value
        const changedinfoInput = { ...amount, [e.target.name]:value};
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
              setAmount({...changedinfoInput, [e.target.name]:value});
            }

const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const value= e.target.value
        const changedInfoInputUser = { ...clientData, [e.target.name]:value };
        const changedInfoBillData = { ...billTo, [e.target.name]:value }
        const err = { ...errors }
       /*  const noNumbers = /^[a-zA-Z][a-zA-Z ]*$/; */
        const filterMail = /.*@[a-z0-9.-]*/i;
        switch (type) {
          case 'text':
            changedInfoBillData[name] = e.target.value;
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
              default:
              break;
            }

        setErrors(err);
        setClientData({...changedInfoInputUser, [e.target.name]:value})
        setBillTo( {...changedInfoBillData, [e.target.name]:value})
    } 

            const handleSubmitData=(e)=>{
                e.preventDefault();
                for (const error in errors) {
                  if (errors[error]) {
                    return;
                  }
                }
                setSent(true)
              }
            const handleClickToQuestion=()=>{
                setGoToQuestion(true)
                amount.clientAmount=null
                amount.quantity=null
            }
    const handleCancel = ()=>{
        setSent(false)
        amount.clientAmount=null
        amount.quantity=null  
        setShowForm(false)
        setGoToBill(false)
    }
    
    const handleClick=(e)=>{
        e.preventDefault();
        setShowForm(true)
       }
    const goToBillData=(e)=>{
        e.preventDefault();
        setGoToBill(true)
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
        setAllDirectorData({...amount, ...clientData, ...billTo})
      }
   
       console.log(22, allDirectorData)
  return (
    <section className='directors-backgound' >
    <div  className='rent-hero'>
        <div className="rent-block">
        <div className='rent-sub-menu'>
            <div className='items'>
            <Link to="/cotizador-alquiler" >
                <h5 className="item-directors">ALQUILER</h5>   
            </Link> 
                <h5 className="item-directors-selected">DIRECTORES</h5>   
            </div>
            <div>
              <Link to="/productos/6" className='rent-home-link'>
                <h5>VOLVER</h5>
              </Link>
            </div> 
          </div>
          {sentThanks === true? 
          <div className='rent-title'><h2>GRACIAS {clientData.name} POR CONTACTARNOS!</h2><p>Vas a recibir un mail de confirmación a la brevedad</p> </div>: 
         
            showForm === true ?  <div className='rent-title'> <h2>COMPLETÁ EL FORMULARIO</h2></div> :
            <div className='rent-title'>
            <div><h2>INGRESÁ LOS DATOS</h2><h2>Y COTIZÁ DE FORMA INSTANTÁNEA</h2></div>
          </div>}
          </div>
          {sentThanks === true? <div className='rent-form'>
            <Link to= "/" >
                <BigButton className='school-button' name="HOME" /></Link>
        </div>: 
          goToBill=== true && <div className='bill-form'>
           <DatosDeFacturacion handleSubmitThanks={handleSubmitThanks} billTo={billTo} errors={errors} handleChange={handleChange} handleCancel={handleCancel}/>
            </div>}
          {
            showForm === true && sentThanks===false ? 
                    <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} billTo={billTo}/> :
            sent === true && sentThanks===false? <div className='rent-form' >
                <CotizadorDirectiresResponse result={result} amount={amount} handleCancel={handleCancel} handleClick={handleClick}/></div>:
            <div className='rent-form' >
                {goToQuestion === true && <CotizadorDirectoresQuestion handleSubmitData={handleSubmitData} amount={amount}  handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} /> }
            <div>
            {goToQuestion === false && sentThanks===false &&<CotizadorDirectoresForm handleSubmitData={handleSubmitData} amount={amount} handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} handleClickToQuestion={handleClickToQuestion}/>}
            </div>
            </div>}
    </div>
    </section>
  )
}
export default CotizadorDirectores