import React from 'react'

const ContactoTitleAndText = ({title, text}) => {
  return (
    <div className="contact-block">
        <h5 className='horizontal-title'>{title}</h5>
        <p className='horizontal-text'>{text}</p>
        </div>
  )
}

export default ContactoTitleAndText