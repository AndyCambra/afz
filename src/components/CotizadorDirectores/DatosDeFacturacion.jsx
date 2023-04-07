import React from 'react'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const DatosDeFacturacion = ({handleSubmitThanks, clientData, errors, handleChange, handleCancel, directorData, placeholders}) => {
  return (
    <form className="inscripcion" onSubmit={handleSubmitThanks}>
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
    <BigButton type="submit" name= {directorData.send}  className={isMobile ? "contact-dark-button":"rent-button"}/>
    </div>
    </form>
  )
}

export default DatosDeFacturacion