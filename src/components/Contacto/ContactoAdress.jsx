import React from 'react'
import { companyData } from '../utils/Texts/companyData'

const ContactoAdress = () => {
  return (
    <>
    <div className='first-column'>
            <h6 className='contact-subtitle'>{companyData.buenosAires.title}</h6>
            <p>{companyData.buenosAires.adress}</p>
            <p>{companyData.buenosAires.secondAdress}</p>
            <p>{companyData.buenosAires.country}</p>
            <p className='highlight-top'>{companyData.buenosAires.phone}</p>
            <p className='highlight'>{companyData.buenosAires.mail}</p>
        </div>  
        <div className='second-column'>
            <h6 className='contact-subtitle'>{companyData.rosario.title}</h6>
            <p>{companyData.rosario.adress}</p>
            <p>{companyData.rosario.secondAdress}</p>
            <p>{companyData.rosario.country}</p>
            <p className='highlight-top'>{companyData.rosario.phone}</p>
            <p className='highlight'>{companyData.rosario.mail}</p>
        </div> </>
  )
}

export default ContactoAdress