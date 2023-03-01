import React from 'react'
import BigButton from '../utils/BigButton/BigButton'


const CotizadorAlquilerCliente = ({handleChange, handleSubmitThanks, rentUser, handleCancel, errors}) => {
  return (
    <form className="inscripcion" onSubmit={handleSubmitThanks}>
    <div className='input-box'>
      <input name="userName" className="rent-user-input" value={rentUser.userName} type="text" onChange={e => handleChange(e, 'userName', 'text', true, 75, 3)} placeholder="Nombre" required={true}/>
      {errors['userName'] && <p className='error'>{errors['userName']}</p>}
    </div>
    <div className='input-box'>
      <input name="userLastName" value={rentUser.userLastName} className='rent-user-input' type="text" onChange={e => handleChange(e, 'userLastName', 'text', true, 75, 3)} placeholder='Apellido' required={true}/> 
      {errors['userLastName'] && <p className='error'>{errors['userLastName']}</p>}
    </div>
    <div className='input-box'>
      <input name="email" className="rent-user-input" value={rentUser.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 3)} placeholder="Email" required={true}/>
      {errors['email'] && <p className='error'>{errors['email']}</p>}
    </div>
    <div className='input-box'>
      <input name="phone" className="rent-user-input" value={rentUser.phone} type="number" onChange={e => handleChange(e, 'phone', 'number', true, 15, 7)} placeholder="Teléfono" required={true}/>
      {errors['phone'] && <p className='error'>{errors['phone']}</p>}
    </div>
    <div className='input-box'>
      <input name="cuit" className="rent-user-input" value={rentUser.cuit} type="number" onChange={e => handleChange(e, 'cuit', 'number', true, 15, 7)} placeholder="CUIT" required={true}/>
      {errors['cuit'] && <p className='error'>{errors['cuit']}</p>}
    </div>
    <p className='rent-label'>Copia del contrato a firmars</p>
    <div className='input-box'>
      <input name="contract" className="light-input-file" value={rentUser.contract} type="file" onChange={e => handleChange(e, 'contract', 'file', true, false, 3)} accept="pdf"  required={true}/>
      {errors['contract'] && <p className='error'>{errors['contract']}</p>}
    </div>
    <p className='rent-label'>Últimos tres recibos de sueldo o certificación de ingresos firmada por escribano</p>
    <div className='input-box'>
      <input name="paycheck" className="light-input-file" value={rentUser.paycheck} type="file" onChange={e => handleChange(e, 'paycheck', 'file', true, false, 3)} accept="pdf"  required={true}/>
      {errors['paycheck'] && <p className='error'>{errors['paycheck']}</p>}
    </div>
    <div className='rent-result-box'>
    <button type="button" className="rent-button-secondary" onClick={handleCancel}>CANCELAR</button>
    <BigButton type="submit" name= "ENVIAR" className="rent-button"/>
    </div>
    </form>
    )
}

export default CotizadorAlquilerCliente

