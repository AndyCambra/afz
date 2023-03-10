import React from 'react'
import { Icon } from '@iconify/react'

const PressCard = ({prensaData}) => {
  return (
    <div className='card-note'> 
                <div className='head-note'>
                    <h5>{prensaData.media}</h5>
                    <h5 className='head-date'>{prensaData.publicationDate}</h5>
                </div>
                <div className='card-note-content'>
                    <h3>{prensaData.title}</h3>
                    <p className='card-text'>{prensaData.text.substring(0, 130)}...</p>
                    <Icon icon="ic:baseline-plus" className='card-icon' />
                    <img src={prensaData.img} alt={prensaData.alt} className="card-note-img" />
                </div>
            </div>   
  )
}

export default PressCard