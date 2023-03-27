import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const CotizadorDirectoresForm = ({handleSubmitData, amount, handleChangeDirectorData, errors, handleClickToQuestion}) => {

  return (
    <form onSubmit={handleSubmitData}>
                <p className='input-explain'>Ingresá el monto sin puntos ni comas.</p>
                <p className='rent-label'>Monto a asegurar</p>
                <div className='input-box'>
                    <i className='i'>$</i>
                    <input name="clientAmount" className="light-input-director" value={amount.clientAmount} type="number" onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} required={true} />
                     {errors['clientAmount'] && <p className='error-white'>{errors['clientAmount']}</p>}
                     <Link className='question-label'onClick={handleClickToQuestion}>¿Cómo se define el monto?</Link>
                </div>
                <div className={isMobile? "button-box" :'inscription-send'}>
                <BigButton type="submit" name= "COTIZAR" className={ isMobile? "contact-dark-button" :"rent-button"}/>
                </div>
    </form>
  )
}

export default CotizadorDirectoresForm