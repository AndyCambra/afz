import React from 'react'
import BigButton from "../utils/BigButton/BigButton";

const CotizadorDirectiresResponse = ({ result, amount, handleCancel, handleClick }) => {
  return (
    <div>
      <form className="rent-form">
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
          <button type="button" onClick={handleClick} className="rent-button">
            CONTRATÁ
          </button>
        </div>
      </form>
    </div>
  );
}

export default CotizadorDirectiresResponse