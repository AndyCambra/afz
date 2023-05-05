import React from 'react'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const CotizadorForm = ({handleChangeRentData, handleSubmitRentData, rentData, errors, formTexts}) => {
  
  return (
    <div>
    <form className='rent-form' onSubmit={handleSubmitRentData}>
    <p className='input-explain'>{formTexts.explain}</p>
    <p className='rent-label'>{formTexts.leaseLabel}</p>
    <div className='input-box'>
    <i className='i'>$</i>
        <input name="rent" className="light-input-rent" value={rentData.rent} type="number" onChange={e => handleChangeRentData(e, 'rent', 'number', true, 15, 5)} required={true} />
        {errors['rent'] && <p className='error-white'>{errors['rent']}</p>}
    </div>
    <p className='rent-label'>{formTexts.expensesLabel}</p>
    <div className='input-box'>
    <i className='i'>$</i>
        <input name="expenses" value={rentData.expenses} className='light-input-rent' type="number" onChange={e => handleChangeRentData(e, 'expenses', 'number', true, 15, 5)} required={true}  /> 
        {errors['expenses'] && <p className='error-white'>{errors['expenses']}</p>}
    </div>
    <div className='rent-send'>
        <BigButton type="submit" name= {formTexts.quoteButton} className={isMobile ? "contact-dark-button":"rent-button"}/>
        </div>
  </form>
   </div>
  )
}

export default CotizadorForm