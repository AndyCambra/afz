import React from 'react'
import BigButton from "../utils/BigButton/BigButton";
import { isMobile } from 'react-device-detect';
import { useLangContext } from '../../Context/LangContext'
const CotizadorDirectiresResponse = ({ result, amount, handleCancel, handleClick, responseData, formatter, legal }) => {
  const {selectedLanguage} = useLangContext()
  console.log(selectedLanguage)
  return (
    
      <form className={isMobile? "bill-first-form":"rent-form"}>
        <p className="rent-label">{responseData.label}</p>
        <div className="amount-result">
          {formatter.format(result)}
        </div>
        <p>
         {responseData.directorResultMessage1}{formatter.format(amount.clientAmount)}{responseData.directorResultMessage2}
        </p>
        <div className="rent-result-box">
          <BigButton
            type="submit"
            name={responseData.againButton}
            className={selectedLanguage==="EN"? "rent-button-secondary-en":"rent-button-secondary"}
            onClick={handleCancel}
          />
          <button type="button" onClick={handleClick} className={ isMobile? "contact-dark-button" :"director-button"}>
           {responseData.contractButton}
          </button>
        </div>
        <p className="legal-bond">{legal}</p>
      </form>
    
  );
}

export default CotizadorDirectiresResponse