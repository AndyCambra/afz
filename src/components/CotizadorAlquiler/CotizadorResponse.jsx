import React from "react";
import BigButton from "../utils/BigButton/BigButton";
import { isMobile } from "react-device-detect";

const CotizadorResponse = ({ result, handleCancel, handleClick, responseData, formatter }) => {
  return (
    <div>
      <form className="rent-form">
        <p className="rent-label">{responseData.label}</p>
        <div className="rent-result">
          {formatter.format(result)}
        </div>
        <p className="rent-label">{responseData.labelSix}</p>
        <div className="rent-result">
          {formatter.format(result/6)}
        </div>
        <p className="rent-label">{responseData.labelDiscount}</p>
        <div className="rent-result">
          {formatter.format(result*.7)}
        </div>
       
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

