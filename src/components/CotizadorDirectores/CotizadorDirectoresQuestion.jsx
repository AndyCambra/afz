import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorDirectoresQuestion = ({handleSubmitData, amount, handleChangeDirectorData, errors }) => {
  return (
    <form className='rent-form' onSubmit={handleSubmitData}>
    <p className='input-explain'>Ingresá el monto sin puntos ni comas.</p>
    <p className='rent-label'>Capital social de la empresa</p>
    <div className='input-box'>
        <i className='i'>$</i>
        <input name="clientAmount" className="light-input-rent" value={amount.clientAmount} type="number" onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} required={true} />
         {errors['clientAmount'] && <p className='error-white'>{errors['clientAmount']}</p>}
    </div>
    <p className='rent-label'>Cantidad de directores</p>
    <div className='input-box'>
        <input name="quantity" className="light-input-rent" value={amount.quantity} type="number" onChange={e => handleChangeDirectorData(e, 'quantity', 'number', true, 2, 0)} required={true} />
         {errors['quantity'] && <p className='error-white'>{errors['quantity']}</p>}
    </div>
    <div className='inscription-send'>
    <BigButton type="submit" name= "COTIZAR" className="rent-button"/>
    </div>
</form>
  )
}

export default CotizadorDirectoresQuestion