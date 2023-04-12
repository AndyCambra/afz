import React from 'react'
import { Link } from 'react-router-dom'
import BigButton from '../utils/BigButton/BigButton'
import { isMobile } from 'react-device-detect'

const directorsAmounts=[
  {id:1, amount:"300000", number: "$300.000"},
  {id:2, amount:"400000", number: "$400.000"},
  {id:3, amount:"500000", number: "$500.000"},
  {id:4, amount:"600000", number: "$600.000"},
  {id:5, amount:"700000", number: "$700.000"},
  {id:6, amount:"800000", number: "$800.000"},
  {id:7, amount:"900000", number: "$900.000"},
  {id:8, amount:"1000000", number: "$1.000.000"}
]



const CotizadorDirectoresForm = ({handleSubmitData, amount, handleChangeDirectorData, directorsAmounts, handleClickToQuestion, formTexts}) => {

  return (
    <form onSubmit={handleSubmitData}>
                <p className='input-explain'>{formTexts.explain}</p>
                <p className='rent-label'>{formTexts.sume}</p>
                <div className='select'>
             <select value={amount.clientAmount} onChange={e => handleChangeDirectorData(e, 'clientAmount', 'number', true, 15, 5)} className="select-box">
             <option disabled value="">{formTexts.selection}</option>
             {directorsAmounts.map((item, key)=>{
                  return(
              <option className='option' value={item.amount}>{item.number}</option>
              ) })}
                </select> 
                     <Link className='question-label'onClick={handleClickToQuestion}>{formTexts.question}</Link>
                </div>
                <div className={isMobile? "button-box" :'button-send'}>
                <BigButton type="submit" name= {formTexts.quoteButton} className={ isMobile? "contact-dark-button" :"rent-button"}/>
                </div>
    </form>
  )
}

export default CotizadorDirectoresForm