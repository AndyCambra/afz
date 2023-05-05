import React from 'react'
import { Link } from 'react-router-dom'
import './cotizadordirectores.css'
import CotizadorDirectoresForm from './CotizadorDirectoresForm'
import { useState, useEffect } from 'react'
import CotizadorDirectoresQuestion from './CotizadorDirectoresQuestion'
import CotizadorDirectiresResponse from './CotizadorDirectiresResponse'
import CotizadorDirectoresClientForm from './CotizadorDirectoresClientForm'
import BigButton from '../utils/BigButton/BigButton'
import { validation } from '../utils/validation'
import { BrowserView, MobileView } from 'react-device-detect'
import SubmenuCotizadores from '../CotizadorAlquiler/SubmenuCotizadores'
import cotizadoresTexts from '../utils/Texts/cotizadoresTexts.json'
import { useLangContext } from '../../Context/LangContext'

const directorsAmounts=[
  {id:1, amount:300000, bondPrice: "13000"},
  {id:2, amount:400000, bondPrice: "15000"},
  {id:3, amount:500000, bondPrice: "17000"},
  {id:4, amount:600000, bondPrice: "19000"},
  {id:5, amount:700000, bondPrice: "21000"},
  {id:6, amount:800000, bondPrice: "22000"},
  {id:7, amount:900000, bondPrice: "23000"},
  {id:8, amount:1000000, bondPrice: "24000"}
]


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
        clientAmount: "",
        quantity: 1,
        customAmount: ""
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

    useEffect(()=>{
      window.scrollTo(0,0);
    },[])

    const formatter = new Intl.NumberFormat('es-ar', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    });

    let finalAmount= (amount.customAmount*.6)/amount.quantity
    let result = 0
    if(amount.quantity !== 1){
      amount.clientAmount= finalAmount
    }
    if(amount.clientAmount <= directorsAmounts[0].amount){
      result= 13000
    }if(amount.clientAmount <= 400000 && amount.clientAmount > 300000){
      result= 15000
    }if(amount.clientAmount <= 500000 && amount.clientAmount > 400000){
      result= 17000
    }if(amount.clientAmount <= 600000 && amount.clientAmount > 500000){
      result= 19000
    }if(amount.clientAmount <= 700000 && amount.clientAmount > 600000){
      result= 21000
    }if(amount.clientAmount <= 800000 && amount.clientAmount > 700000){
      result= 22000
    }if(amount.clientAmount <= 900000 && amount.clientAmount > 800000){
      result= 23000
    }if(amount.clientAmount > 900000){
      result= 24000
    }


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
      console.log(amount)
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
          {sentThanks === true? <div className='button-container'>
            <Link to= "/" >
                <BigButton className='school-button' name="HOME" /></Link>
        </div>: 
          goToBill=== true && <div></div>}
          {
            showForm === true && sentThanks===false ? 
                    <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} directorData={text.directorData} placeholders={text.placeholders} /> :
            sent === true && sentThanks===false? <div className='rent-form' >
                <CotizadorDirectiresResponse result={result} amount={amount} handleCancel={handleCancel} handleClick={handleClick} responseData={text.responseData} formatter={formatter}/></div>:
            <div className='rent-form' >
                {goToQuestion === true && sentThanks===false &&<CotizadorDirectoresQuestion handleSubmitData={handleSubmitData} amount={amount}  handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} formText={text.formTexts} /> }
            <div>
            {goToQuestion === false && sentThanks===false &&<CotizadorDirectoresForm handleSubmitData={handleSubmitData} amount={amount} handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} handleClickToQuestion={handleClickToQuestion} formTexts={text.formTexts}  directorsAmounts={directorsAmounts} formatter={formatter}/>}
            </div>
            </div>}
    </div>
    </section>
    </BrowserView>
    <MobileView>
    <div className='first-box-mobile'>
        <SubmenuCotizadores text={text}/>
        <div className='img-box'>
        <img src="/img/MobileImages/DirectoresMobile.jpg" alt="" />
        </div>
      </div>
      <div className='bordeax-background-director'>
      {sentThanks === true? 
            <div ><h2>{text.thanks1} {clientData.name}{text.thanks2}</h2><p>{text.confirmation}</p> </div>: 
         
            showForm === true ?  <div> <h2 className='director-subtitle'>{text.formTitle}</h2></div> :
            <div>
            <div><h2 className='director-subtitle'>{text.dataTitleMobile}</h2></div>
            </div>}
        
          {
            showForm === true && sentThanks===false ? 
                   <div> <CotizadorDirectoresClientForm handleSubmitThanks={handleSubmitThanks} handleChange={handleChange} clientData={clientData} handleCancel={handleCancel} errors={errors} goToBillData={goToBillData} goToBill={goToBill} directorData={text.directorData} placeholders={text.placeholders} /> </div>:
            sent === true && sentThanks===false? <div className='bill-first-form' >
                <CotizadorDirectiresResponse result={result} amount={amount} handleCancel={handleCancel} handleClick={handleClick} responseData={text.responseData} formatter={formatter}/></div>:
            <div className='bill-first-form' >
                {(goToQuestion === true && sentThanks===false) && <CotizadorDirectoresQuestion handleSubmitData={handleSubmitData} amount={amount}  handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} formText={text.formTexts}  /> }
            <div>
            {goToQuestion === false && sentThanks===false &&<CotizadorDirectoresForm handleSubmitData={handleSubmitData} amount={amount} handleChangeDirectorData={handleChangeDirectorData} errors={errors} sent={sent} handleClickToQuestion={handleClickToQuestion} formTexts={text.formTexts} directorsAmounts={directorsAmounts} formatter={formatter}/>}
            </div>
            </div>}
            </div>

        

    </MobileView>
    </>
  )
}
export default CotizadorDirectores