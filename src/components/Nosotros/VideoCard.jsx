import React from 'react'
import './videoCard.css'
import { Icon } from '@iconify/react'

const VideoCard = ({companyPlace,videoStaff,peopleName,peoplePosition}) => {
  return (
    <div className='card-container-staff'>
        <div className='staffPositions'>
        <h5 >{companyPlace}</h5>
        </div>
    <div className='video-container'>
    <video  className='video'
             controls
             playsInline
             muted={false}>
              <source src={videoStaff} alt={peopleName}/>
    </video> 
   
    <div className='card-title'>
            <p className='card-name'>{peopleName}</p>
            <p className='card-position'>{peoplePosition}</p>

        </div>
       
       
    </div>
    </div>
  )
}

export default VideoCard