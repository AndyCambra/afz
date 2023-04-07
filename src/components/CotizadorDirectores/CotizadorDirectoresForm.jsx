import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const CotizadorDirectoresForm = ({handleSubmitData, amount, handleChangeDirectorData, errors, handleClickToQuestion, formTexts}) => {

  return (
    <form onSubmit={handleSubmitData}>
                <p className='input-explain'>{formTexts.explain}</p>
                <p className='rent-label'>{formTexts.sume}</p>
                <div className='input-box'>
                    <i className='i'>{formTexts.$}</i>
                    <input name="clientAmount" className="light-input-director" value={amount.clientAmount} type="number" onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} required={true} />
                     {errors['clientAmount'] && <p className='error-white'>{errors['clientAmount']}</p>}
                     <Link className='question-label'onClick={handleClickToQuestion}>{formTexts.question}</Link>
                </div>
                <div className={isMobile? "button-box" :'button-send'}>
                <BigButton type="submit" name= {formTexts.quoteButton} className={ isMobile? "contact-dark-button" :"rent-button"}/>
                </div>
    </form>
  )
}

export default CotizadorDirectoresForm