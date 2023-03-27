import React from 'react'
import BigButton from "../utils/BigButton/BigButton";
import { isMobile } from 'react-device-detect';

const CotizadorDirectiresResponse = ({ result, amount, handleCancel, handleClick }) => {
  return (
    
      <form className={isMobile? "bill-first-form":"rent-form"}>
        <p className="rent-label">Cotización</p>
        <div className="amount-result">
          $ {result}
        </div>
        <p>
          Correspondiente a un monto de ${amount.clientAmount}.- 
          Valor final (IVA incluído) para un
          contrato anual.
        </p>
        <div className="rent-result-box">
          <BigButton
            type="submit"
            name="COTIZÁ VEZ"
            className="rent-button-secondary"
            onClick={handleCancel}
          />
          <button type="button" onClick={handleClick} className={ isMobile? "contact-dark-button" :"rent-button"}>
            CONTRATÁ
          </button>
        </div>
      </form>
    
  );
}

export default CotizadorDirectiresResponse