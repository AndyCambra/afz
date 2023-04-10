import React from 'react'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const CotizadorDirectoresQuestion = ({handleSubmitData, amount, handleChangeDirectorData, errors, formText }) => {
  return (
    <form className='rent-form' onSubmit={handleSubmitData}>
    <p className='input-explain'>{formText.explain}</p>
    <p className='rent-label'>{formText.socialCapitalLabel}</p>
    <div className='input-box'>
        <i className='i'>$</i>
        <input name="clientAmount" className="light-input-rent" value={amount.clientAmount} type="number" onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} required={true} />
         {errors['clientAmount'] && <p className='error-white'>{errors['clientAmount']}</p>}
    </div>
    <p className='rent-label'>{formText.directorQuantityLabel}</p>
    <div className='input-box'>
        <input name="quantity" className="light-input-rent" value={amount.quantity} type="number" onChange={e => handleChangeDirectorData(e, 'quantity', 'number', true, 2, 0)} required={true} />
         {errors['quantity'] && <p className='error-white'>{errors['quantity']}</p>}
    </div>
    <div className='button-send'>
    <BigButton type="submit" name= {formText.quoteButton} className={ isMobile? "contact-dark-button" :"rent-button"}/>
    </div>
</form>
  )
}

export default CotizadorDirectoresQuestion