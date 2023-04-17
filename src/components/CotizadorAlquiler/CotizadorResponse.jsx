import React from "react";
import BigButton from "../utils/BigButton/BigButton";
import { isMobile } from "react-device-detect";

const CotizadorResponse = ({ result, rentData, handleCancel, handleClick, responseData, formatter }) => {
  return (
    <div>
      <form className="rent-form">
        <p className="rent-label">{responseData.label}</p>
        <div className="rent-result">
          {formatter.format(result)}
        </div>
        <p>
        {responseData.resultMessage1}{formatter.format(rentData.rent)} {responseData.resultMessage2}{formatter.format(rentData.expenses)}{responseData.resultMessage3}{rentData.years} {responseData.resultMessage4}
        </p>
        <div className="rent-result-box">
          <BigButton
            type="submit"
            name={responseData.againButton}
            className="rent-button-secondary"
            onClick={handleCancel}
          />
          <button type="button" onClick={handleClick} className={ isMobile ? "contact-dark-button": "rent-button"}>
           {responseData.contractButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CotizadorResponse;
