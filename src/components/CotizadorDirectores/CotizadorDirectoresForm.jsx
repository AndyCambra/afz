import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'




const CotizadorDirectoresForm = ({handleSubmitData, amount, handleChangeDirectorData, directorsAmounts, handleClickToQuestion, formTexts, formatter}) => {

  return (
    <form onSubmit={handleSubmitData}>
                <p className='input-explain'>{formTexts.explain}</p>
                <p className='rent-label'>{formTexts.sume}</p>
                <div className='select'>
             <select value={amount.clientAmount} onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} className="select-box">
             <option disabled value="">{formTexts.selection}</option>
             {directorsAmounts.map((item, key)=>{
             
                  return(
              <option className='option' key={item.id} value={item.amount}>{formatter.format(item.amount)}</option>
              ) })}
                </select> 
                     <Link className='question-label'onClick={handleClickToQuestion}>{formTexts.question}</Link>
                </div>
                <div className={isMobile? "button-box" :'button-send'}>
                <BigButton type="submit" name= {formTexts.quoteButton} className={ isMobile? "contact-dark-button" :"director-button"}/>
                </div>
    </form>
  )
}

export default CotizadorDirectoresForm