import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorAlquilerCliente = ({handleChange, handleSubmitThanks, rentUser}) => {
  return (
    <form className="inscripcion" onSubmit={handleSubmitThanks}>
    <input name="userName" className="rent-user-input" value={rentUser.userName} type="text" onChange={handleChange} placeholder="Nombre" required={true}/>
    <input name="userLastName" value={rentUser.userLastName} className='rent-user-input' type="text" onChange={handleChange} placeholder='Apellido' required={true}/> 
    <input name="email" className="rent-user-input" value={rentUser.email} type="email" onChange={handleChange} placeholder="Email" required={true}/>
    <input name="phone" className="rent-user-input" value={rentUser.phone} type="text" onChange={handleChange} placeholder="Teléfono" required={true}/>
    <input name="cuit" className="rent-user-input" value={rentUser.cuit} type="text" onChange={handleChange} placeholder="CUIT" required={true}/>
    <p className='rent-label'>Copia del contrato a firmars</p>
    <input name="contract" className="light-input-file" value={rentUser.contract} type="file" onChange={handleChange} accept="pdf"  required={true}/>
    <p className='rent-label'>Últimos tres recibos de sueldo o certificación de ingresos firmada por escribano</p>
    <input name="paycheck" className="light-input-file" value={rentUser.paycheck} type="file" onChange={handleChange} accept="pdf"  required={true}/>
    
    <div className='inscription-send'>
    <BigButton type="submit" name= "ENVIAR" className="inscription-button"/>
    </div>
    </form>
    )
}

export default CotizadorAlquilerCliente

