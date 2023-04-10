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
import cotizadoresTexts from '../utils/Texts/cotizadoresTexts.json'
import { useLangContext } from '../../Context/LangContext'

const CotizadorDirectores = () => {
  const {selectedLanguage} = useLangContext()
  const text = cotizadoresTexts[selectedLanguage];
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
                <h5 className="item-directors">{text.menuCategory1}</h5>   
            </Link> 
                <h5 className="item-directors-selected">{text.menuCategory2}</h5>   
            </div>
            <div>
              <Link to="/productos/6" className='rent-home-link'>
                <h5>{text.back}</h5>
              </Link>
            </div> 
          </div>
          {sentThanks === true? 
          <div className='rent-title'><h2>{text.thanks1} {clientData.name} {text.thanks2}</h2><p>{text.confirmation}</p> </div>: 
         
            showForm === true ?  <div className='rent-title'> <h2>{text.formTitle}</h2></div> :
            <div className='rent-title'>
            <div><h2>{text.dataTitle1}</h2><h2>{text.dataTitle2}</h2></div>
          </div>}
          </div>
          {sentThanks === true? <div className='rent-form'>
            <Link to= "/" >
                <BigButton className='school-button' name="HOME" /></Link>
        </div>: 
          goToBill=== true && <div className='bill-form'>
           <DatosDeFacturacion handleSubmitThanks={handleSubmitThanks} clientData={clientData} errors={errors} handleChange={handleChange} handleCancel={handleCancel} directorData={text.directorData} placeholders={text.placeholders}/>
            </div>}
          {
            showForm === true && sentThanks===false ? 
                    <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} directorData={text.directorData} placeholders={text.placeholders} /> :
            sent === true && sentThanks===false? <div className='rent-form' >
                <CotizadorDirectiresResponse result={result} amount={amount} handleCancel={handleCancel} handleClick={handleClick} responseData={text.responseData} /></div>:
            <div className='rent-form' >
                {goToQuestion === true && <CotizadorDirectoresQuestion handleSubmitData={handleSubmitData} amount={amount}  handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} formText={text.formTexts} /> }
            <div>
            {goToQuestion === false && sentThanks===false &&<CotizadorDirectoresForm handleSubmitData={handleSubmitData} amount={amount} handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} handleClickToQuestion={handleClickToQuestion} formTexts={text.formTexts} />}
            </div>
            </div>}
    </div>
    </section>
    </BrowserView>
    <MobileView>
    <div className='first-box-mobile'>
        <SubmenuCotizadores/>
        <div className='img-box'>
        <img src="/img/MobileImages/DirectoresMobile.jpg" alt="" />
        </div>
      </div>
      <div className='bordeax-background-director'>
      {sentThanks === true? 
            <div className='rent-title'><h2>{text.thanks1} {clientData.name}{text.thanks2}</h2><p>{text.confirmation}</p> </div>: 
         
            showForm === true ?  <div> <h2 className='director-subtitle'>{text.formTitle}</h2></div> :
            <div className='rent-title'>
            <div><h2 className='director-subtitle'>{text.dataTitleMobile}</h2></div>
            </div>}
        
          {sentThanks === true? <div></div>: 
       
          goToBill=== true && <div className='bill-form'>
           <DatosDeFacturacion handleSubmitThanks={handleSubmitThanks} clientData={clientData} errors={errors} handleChange={handleChange} handleCancel={handleCancel} directorData={text.directorData} placeholders={text.placeholders}/>
            </div>}
          {
            showForm === true && sentThanks===false ? 
                   <div> <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} directorData={text.directorData} placeholders={text.placeholders} /> </div>:
            sent === true && sentThanks===false? <div className='bill-first-form' >
                <CotizadorDirectiresResponse result={result} amount={amount} handleCancel={handleCancel} handleClick={handleClick} responseData={text.responseData} /></div>:
            <div className='bill-first-form' >
                {goToQuestion === true && <CotizadorDirectoresQuestion handleSubmitData={handleSubmitData} amount={amount}  handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} formText={text.formText} /> }
            <div>
            {goToQuestion === false && sentThanks===false &&<CotizadorDirectoresForm handleSubmitData={handleSubmitData} amount={amount} handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} handleClickToQuestion={handleClickToQuestion} formTexts={text.formTexts} />}
            </div>
            </div>}
            </div>

        

    </MobileView>
    </>
  )
}
export default CotizadorDirectores