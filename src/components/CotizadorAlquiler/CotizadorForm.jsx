import React from 'react'
import BigButton from '../utils/BigButton/BigButton'

const CotizadorForm = ({handleChange, handleSubmit, rentData}) => {
  return (
    <div><form className='rent-form' onSubmit={handleSubmit}>
    <p className='input-explain'>Ingresá el monto sin puntos ni comas.</p>
    <p className='rent-label'>Alquiler mensual</p>
    <i className='i'>$</i>
        <input name="rent" className="light-input-rent" value={rentData.rent} type="text" onChange={handleChange} required={true} autoComplete="off" />
    <p className='rent-label'>Expensas</p>
    <i className='i'>$</i>
        <input name="expenses" value={rentData.expenses} id="prueba" className='light-input-rent' type="text" onChange={handleChange} required={true} autoComplete="off" /> 
    <div className='radio-box'>
        <p className='rent-radio-title'>Duración:</p>
        <p className='rent-label'>2 años</p>
            <input name="years" value={"2"}  className='radio' type="radio" onChange={handleChange} required={true}/> 
        <p className='rent-label'>3 años</p>
            <input name="years" value={"3"} className='radio' type="radio" onChange={handleChange} required={true}/> 
    </div>
    <div className='inscription-send'>
        <BigButton type="submit" name= "COTIZAR" /* value="Submit"  */className="rent-button"/>
        </div>
  </form>
   </div>
  )
}

export default CotizadorForm