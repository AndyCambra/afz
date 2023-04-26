import React from 'react'
import VideoCard from './VideoCard'
import "./nosotros.css"


const Staff = ({videos, videos2}) => {
    

  return (
    <> 
          <div className="card-box">
          {videos.map((item, key)=>{
            return(
                <VideoCard key={item.id} companyPlace={item.companyPace} peopleName={item.peopleName} peoplePosition={item.peoplePosition} videoStaff={item.videoStaff} className='card' />
            )
          })}
           </div>
           <div className="card-box">
          {videos2.map((item, key)=>{
            return(
                <VideoCard key={item.id} companyPlace={item.companyPace} peopleName={item.peopleName} peoplePosition={item.peoplePosition} videoStaff={item.videoStaff} />
            )
          })}
           </div>    
      </>
  )
}

export default Staff