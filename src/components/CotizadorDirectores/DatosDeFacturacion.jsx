import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

const DatosDeFacturacion = ({handleSubmitThanks, clientData, errors, handleChange, handleCancel}) => {
  return (
    <form className="inscripcion" onSubmit={handleSubmitThanks}>
    <p className='rent-label'>Datos de facturación</p>
    <div className='input-box'>
      <input name="billName" className="light-input-client" value={clientData.billName} type="text" onChange={e => handleChange(e, 'billName', 'text', true, 75, 3)} placeholder="Nombre" required={true}/>
      {errors['billName'] && <p className='error-white'>{errors['billName']}</p>}
    </div>
    <div className='input-box'>
      <input name="billEmail" className="light-input-client" value={clientData.billEmail} type="email" onChange={e => handleChange(e, 'billEmail', 'email', true, 75, 3)} placeholder="Email" required={true}/>
      {errors['billEmail'] && <p className='error-white'>{errors['billEmail']}</p>}
    </div>
    <div className='input-box'>
      <input name="billCuit" className="light-input-client" value={clientData.billCuit} type="number" onChange={e => handleChange(e, 'billCuit', 'number', true, 15, 7)} placeholder="CUIT/CUIL" required={true}/>
      {errors['billCuit'] && <p className='error-white'>{errors['billCuit']}</p>}
    </div>
    <div className='input-box'>
      <input name="billPhone" value={clientData.billPhone} className='light-input-client' type="number" onChange={e => handleChange(e, 'billPhone', 'number', true, 15, 7)} placeholder='Teléfono' required={true}/> 
      {errors['billPhone'] && <p className='error-white'>{errors['billPhone']}</p>}
    </div>
    <div className='input-box'>
      <input name="billAdress" value={clientData.billAdress} className='light-input-client' type="text" onChange={e => handleChange(e, 'billAdress', 'text', true, 100, 10)} placeholder='Domicilio legal' required={true}/> 
      {errors['billAdress'] && <p className='error-white'>{errors['billAdress']}</p>}
    </div>
    <div className='rent-result-box'>
    <button type="button" className="rent-button-secondary" onClick={handleCancel}>CANCELAR</button>
    <BigButton type="submit" name= "ENVIAR" className="rent-button"/>
    </div>
    </form>
  )
}

export default DatosDeFacturacion