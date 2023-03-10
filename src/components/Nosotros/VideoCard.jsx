import React from 'react'
import './videoCard.css'

const VideoCard = ({companyPlace,videoStaff,peopleName,peoplePosition}) => {
  return (
    <div className='card-container'>
        <div className='staffPositions'>
        <h5 >{companyPlace}</h5>
        </div>
    <div >
    <img src={videoStaff} alt={peopleName}/>
    <div className='card-title'>
            <p className='card-name'>{peopleName}</p>
            <p className='card-position'>{peoplePosition}</p>

        </div>
       
       
    </div>
    </div>
  )
}

export default VideoCard