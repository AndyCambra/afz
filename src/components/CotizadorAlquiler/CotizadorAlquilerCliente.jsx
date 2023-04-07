import React from 'react'
import { isMobile } from 'react-device-detect'


const CotizadorAlquilerCliente = ({handleChange, handleSubmitThanks, rentUser, handleCancel, errors, clientData, placeholders}) => {
  return (
    <form className="inscripcion" onSubmit={handleSubmitThanks}>
    <div className='input-box'>
    <label className='label-white'>{clientData.firstName}</label>
      <input name="userName" className="rent-user-input" value={rentUser.userName} type="onlyletters" onChange={e => handleChange(e, 'userName', 'onlyletters', true, 75, 3)} placeholder={placeholders.firstName} required={true}/>
      {errors['userName'] && <p className='error-white'>{errors['userName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{clientData.lastName}</label>
      <input name="userLastName" value={rentUser.userLastName} className='rent-user-input' type="onlyletters" onChange={e => handleChange(e, 'userLastName', 'onlyletters', true, 75, 3)} placeholder={placeholders.lastName} required={true}/> 
      {errors['userLastName'] && <p className='error-white'>{errors['userLastName']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>Email</label>
      <input name="email" className="rent-user-input" value={rentUser.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 3)} placeholder={placeholders.email} required={true}/>
      {errors['email'] && <p className='error-white'>{errors['email']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{clientData.phone}</label>
      <input name="phone" className="rent-user-input" value={rentUser.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder={placeholders.phone} required={true}/>
      {errors['phone'] && <p className='error-white'>{errors['phone']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>CUIT</label>
      <input name="cuit" className="rent-user-input" value={rentUser.cuit} type="number" onChange={e => handleChange(e, 'cuit', 'number', true, 15, 7)} placeholder={placeholders.cuit} required={true}/>
      {errors['cuit'] && <p className='error-white'>{errors['cuit']}</p>}
    </div>
    <div className='input-box'>
    <label className='label-white'>{clientData.attach1}</label>
      <input name="contract" className="light-input-file" value={rentUser.contract} type="file" onChange={e => handleChange(e, 'contract', 'file', true, false, 3)} accept="pdf"  required={true}/>
      {errors['contract'] && <p className='error-white'>{errors['contract']}</p>}
    </div>
    <div className='input-box'>
    <p className='rent-label'>{clientData.attach2}</p>
      <input name="paycheck" className="light-input-file" value={rentUser.paycheck} type="file" onChange={e => handleChange(e, 'paycheck', 'file', true, false, 3)} accept="pdf"  required={true}/>
      {errors['paycheck'] && <p className='error-white'>{errors['paycheck']}</p>}
    </div>
    <div className='rent-result-box'>
    <button type="button" className="rent-button-secondary" onClick={handleCancel}>{clientData.cancel}</button>
    <button type="submit" className={isMobile ? "contact-dark-button":"rent-button"}>{clientData.send}</button>
    </div>
    </form>
    )
}

export default CotizadorAlquilerCliente

