import React from 'react'


const CotizadorDirectoresClientForm = ({handleChange, clientData, errors, handleSubmitThanks, goToBillData, goToBill, billTo}) => {
    return (
        <>
        <div className='rent-form' > 
        <form className="inscripcion" onSubmit={handleSubmitThanks}>
        <p className='director-subtitle-form'>Datos del Director</p>
        <div className='input-box'>
        <label className='label-white'>Nombre</label>
          <input name="name" className="light-input-client" value={clientData.name} type="onlyletters" onChange={e => handleChange(e, 'name', 'onlyletters', true, 75, 3)} placeholder="Ingresá tu nombre" required={true}/>
          {errors['name'] && <p className='error-white'>{errors['name']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>Apellido</label>
          <input name="lastName" value={clientData.lastName} className='light-input-client' type="onlyletters" onChange={e => handleChange(e, 'lastName', 'onlyletters', true, 75, 3)} placeholder='Ingresá tu apellido' required={true}/> 
          {errors['lastName'] && <p className='error-white'>{errors['lastName']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>Email</label>
          <input name="email" className="light-input-client" value={clientData.email} type="email" onChange={e => handleChange(e, 'email', 'email', true, 75, 3)} placeholder="Ingresá tu mail" required={true}/>
          {errors['email'] && <p className='error-white'>{errors['email']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>CUIT/CUIL</label>
          <input name="cuit" className="light-input-client" value={clientData.cuit} type="number" onChange={e => handleChange(e, 'cuit', 'number', true, 15, 7)} placeholder="'Ingresá tu número sin guiones'" required={true}/>
          {errors['cuit'] && <p className='error-white'>{errors['cuit']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>Dirección</label>
          <input name="adress" value={clientData.adress} className='light-input-client' type="text" onChange={e => handleChange(e, 'adress', 'text', true, 100, 10)} placeholder='Ingresá tu apellido'required={true}/> 
          {errors['adress'] && <p className='error-white'>{errors['adress']}</p>}
        </div>
        <p className='second-director-subtitle-form'>Datos del Asegurado</p>
        <div className='input-box'>
        <label className='label-white'>Empresa</label>
          <input name="companyName" className="light-input-client" value={clientData.companyName} type="text" onChange={e => handleChange(e, 'companyName', 'text', true, 75, 3)} placeholder="Razón Social" required={true}/>
          {errors['companyName'] && <p className='error-white'>{errors['companyName']}</p>}
        </div>
        <div className='input-box'>
        <label className='label-white'>Dirección</label>
          <input name="companyAdress" value={clientData.companyAdress} className='light-input-client' type="text" onChange={e => handleChange(e, 'companyAdress', 'text', true, 75, 3)} placeholder='Ingresá tu apellido' required={true}/> 
          {errors['companyAdress'] && <p className='error-white'>{errors['companyAdress']}</p>}
        </div>
        <div className='inscription-send'>
        <button name="DATOS DE FACTURACIÓN" type="button" className={goToBill=== false?"small-button":"display-none"} onClick={goToBillData}>DATOS DE FACTURACIÓN</button>
        </div>
        </form>
        </div>
       
        </>
       
  )
}

export default CotizadorDirectoresClientForm