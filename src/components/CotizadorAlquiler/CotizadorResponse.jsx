import React from "react";
import BigButton from "../utils/BigButton/BigButton";

const CotizadorResponse = ({ result, rentData, handleClick }) => {
  return (
    <div>
      <form className="rent-form">
        <p className="rent-label">Cotización</p>
        <div className="rent-result">
          $ {result}
        </div>
        <p>
          Correspondiente a un alquiler mensual de ${rentData.rent} y expensas
          iniciales de $ {rentData.expenses}. Valor final (IVA incluído) para un
          contrato de alquiler de {rentData.years} años.
        </p>
        <div className="rent-result-box">
          <BigButton
            type="button"
            name="COTIZÁ VEZ"
            className="rent-button-secondary"
            onClick={() => window.location.reload(false)}
          />
          <button type="button" onClick={handleClick} className="rent-button">
            CONTRATÁ
          </button>
        </div>
      </form>
    </div>
  );
};

export default CotizadorResponse;
