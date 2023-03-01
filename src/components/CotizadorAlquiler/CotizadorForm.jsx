import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorForm = ({handleChangeRentData, handleSubmitRentData, rentData, errors}) => {
  return (
    <div><form className='rent-form' onSubmit={handleSubmitRentData}>
    <p className='input-explain'>Ingresá el monto sin puntos ni comas.</p>
    <p className='rent-label'>Alquiler mensual</p>
    <div className='input-box'>
    <i className='i'>$</i>
        <input name="rent" className="light-input-rent" value={rentData.rent} type="number" onChange={e => handleChangeRentData(e, 'rent', 'number', true, 15, 5)} required={true} />
        {errors['rent'] && <p className='error-white'>{errors['rent']}</p>}
    </div>
    <p className='rent-label'>Expensas</p>
    <div className='input-box'>
    <i className='i'>$</i>
        <input name="expenses" value={rentData.expenses} /* id="prueba" */ className='light-input-rent' type="number" onChange={e => handleChangeRentData(e, 'expenses', 'number', true, 15, 5)} required={true}  /> 
        {errors['expenses'] && <p className='error-white'>{errors['expenses']}</p>}
    </div>
    <div className='radio-box'>
        <p className='rent-radio-title'>Duración:</p>
        <p className='rent-label'>2 años</p>
            <input name="years" value={"2"}  className='radio' type="radio" onChange={handleChangeRentData} required={true}/> 
        <p className='rent-label'>3 años</p>
            <input name="years" value={"3"} className='radio' type="radio" onChange={handleChangeRentData} required={true}/> 
    </div>
    <div className='inscription-send'>
        <BigButton type="submit" name= "COTIZAR" className="rent-button"/>
        </div>
  </form>
   </div>
  )
}

export default CotizadorForm