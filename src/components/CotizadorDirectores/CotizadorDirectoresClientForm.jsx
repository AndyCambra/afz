import React from 'react'
import { isMobile } from 'react-device-detect'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorDirectoresClientForm = ({handleChange, clientData, errors, handleSubmitThanks, goToBillData, goToBill, directorData, placeholders, handleCancel, text}) => {
    return (
        <>
        <div className={isMobile? "":'director-form'} > 
        <form className="form" onSubmit={handleSubmitThanks}>
          <div className={isMobile? "":'first-section'}>
        <p className={isMobile? "":'director-subtitle-form'}>{directorData.subtitle1}</p>
        <div className='input-box'>
        <label className='label-white'>{directorData.firstName}</label>
          <input name="name" className="light-input-client" value={clientData.name} type="onlyletters" onChange={e => handleChange(e, 'name', 'onlyletters', true, 75, 3)} placeholder={placeholders.firstName} required={true}/>
          {errors['name'] && <p className='error-white'>{errors['name']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>{directorData.lastName}</label>
          <input name="lastName" value={clientData.lastName} className='light-input-client' type="onlyletters" onChange={e => handleChange(e, 'lastName', 'onlyletters', true, 75, 3)} placeholder={placeholders.lastName} required={true}/> 
          {errors['lastName'] && <p className='error-white'>{errors['lastName']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>Email</label>
          <input name="email" className="light-input-client" value={clientData.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 3)} placeholder={placeholders.email} required={true}/>
          {errors['email'] && <p className='error-white'>{errors['email']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>CUIT/CUIL</label>
          <input name="cuit" className="light-input-client" value={clientData.cuit} type="number" onChange={e => handleChange(e, 'cuit', 'number', true, 15, 7)} placeholder={placeholders.cuit} required={true}/>
          {errors['cuit'] && <p className='error-white'>{errors['cuit']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>{directorData.adress}</label>
          <input name="adress" value={clientData.adress} className='light-input-client' type="text" onChange={e => handleChange(e, 'adress', 'text', true, 100, 10)} placeholder={placeholders.adress}required={true}/> 
          {errors['adress'] && <p className='error-white'>{errors['adress']}</p>}
        </div>
        <p className={isMobile? "":'second-director-subtitle-form'}>{directorData.subtitle2}</p>
        <div className='input-box'>
        <label className='label-white'>{directorData.company}</label>
          <input name="companyName" className="light-input-client" value={clientData.companyName} type="text" onChange={e => handleChange(e, 'companyName', 'text', true, 75, 3)} placeholder={placeholders.company} required={true}/>
          {errors['companyName'] && <p className='error-white'>{errors['companyName']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>{directorData.adress}</label>
          <input name="companyAdress" value={clientData.companyAdress} className='light-input-client' type="text" onChange={e => handleChange(e, 'companyAdress', 'text', true, 75, 3)} placeholder={placeholders.adress} required={true}/> 
          {errors['companyAdress'] && <p className='error-white'>{errors['companyAdress']}</p>}
        </div>
        <div className='inscription-send'>
        <button name="DATOS DE FACTURACIÓN" type="button" className={goToBill=== false? (isMobile ? "small-bordeaux" : "small-button"):"display-none"} onClick={goToBillData}>{directorData.button}</button>
        </div>
        </div>

        <div className={goToBill=== true ? (isMobile ? "":'bill-form'): "display-none"}>
        <p className='director-subtitle-form'>{directorData.subtitle3}</p>
    <div className='input-box'>
    <label className='label-white'>{directorData.name}</label>
      <input name="billName" className="light-input-client" value={clientData.billName} type="text" onChange={e => handleChange(e, 'billName', 'text', true, 75, 3)} placeholder={placeholders.name} required={true}/>
      {errors['billName'] && <p className='error-white'>{errors['billName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Email</label>
      <input name="billEmail" className="light-input-client" value={clientData.billEmail} type="email" onChange={e => handleChange(e, 'billEmail', 'email', true, 75, 3)} placeholder={placeholders.email} required={true}/>
      {errors['billEmail'] && <p className='error-white'>{errors['billEmail']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>CUIT</label>
      <input name="billCuit" className="light-input-client" value={clientData.billCuit} type="number" onChange={e => handleChange(e, 'billCuit', 'number', true, 15, 7)} placeholder={placeholders.cuit} required={true}/>
      {errors['billCuit'] && <p className='error-white'>{errors['billCuit']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{directorData.phone}</label>
      <input name="billPhone" value={clientData.billPhone} className='light-input-client' type="number" onChange={e => handleChange(e, 'billPhone', 'number', true, 15, 7)} placeholder={placeholders.phone} required={true}/> 
      {errors['billPhone'] && <p className='error-white'>{errors['billPhone']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{directorData.adress}</label>
      <input name="billAdress" value={clientData.billAdress} className='light-input-client' type="text" onChange={e => handleChange(e, 'billAdress', 'text', true, 100, 10)} placeholder={placeholders.adress} required={true}/> 
      {errors['billAdress'] && <p className='error-white'>{errors['billAdress']}</p>}
    </div>
    <div className='director-result-box'>
    <button type="button" className="rent-button-secondary" onClick={handleCancel}>{directorData.cancel}</button>
    <BigButton type="submit" name= {directorData.send}  className={isMobile ? "contact-dark-button":"director-button"}/>
    </div>
      </div>

        </form>
        </div>
      
        </>
       
  )
}

export default CotizadorDirectoresClientForm