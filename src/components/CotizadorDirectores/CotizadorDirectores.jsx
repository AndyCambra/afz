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
import { validation } from '../utils/validation'
import { BrowserView, MobileView } from 'react-device-detect'
import SubmenuCotizadores from '../CotizadorAlquiler/SubmenuCotizadores'

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
        companyAdress:"",
        billName: "",
        billEmail: "",
        billCuit: null,
        billPhone: null,
        billAdress:""
      })
   
    const [allDirectorData, setAllDirectorData]= useState([])
    const result = 10000


      const handleChangeDirectorData=(e, name, type, required = false, maxLength = false, minLength = false)=>{
        const infoInput=amount
        const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)
              setErrors(err);
              setAmount({...changedInfoInput, [e.target.name]:value});
            }

      const handleChange=(e, name, type, required = false, maxLength = false, minLength = false)=>{ 
        const infoInput= clientData
        const {changedInfoInput, value, err}= validation(e, name, type, required,maxLength, minLength, infoInput, errors)
        setErrors(err);
        setClientData({...changedInfoInput, [e.target.name]:value})
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
        setAllDirectorData({...amount, ...clientData})
      }
      console.log(allDirectorData)
  return (
    <>
    <BrowserView>
    <section className='directors-backgound' >
    <div  className='director-hero'>
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
           <DatosDeFacturacion handleSubmitThanks={handleSubmitThanks} clientData={clientData} errors={errors} handleChange={handleChange} handleCancel={handleCancel}/>
            </div>}
          {
            showForm === true && sentThanks===false ? 
                    <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} /> :
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
    </BrowserView>
    <MobileView>
    <div className='first-box-mobile'>
        <SubmenuCotizadores/>
        <div className='img-box'>
        <img src="/img/CotizadorDirectores.jpg" alt="" />
        </div>
      </div>
      <div className='bordeax-background'>
        </div>

    </MobileView>
    </>
  )
}
export default CotizadorDirectores