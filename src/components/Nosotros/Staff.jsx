import React from 'react'
import VideoCard from './VideoCard'
import "./nosotros.css"



const videos=[
{
    id: 10,
    companyPace: 'SOCIOS',
    videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
peopleName:"Gustavo Krieger",
peoplePosition:"Presidente"
},
{
    id: 11,
    companyPace: '',
    videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
peopleName:"Juan José Saldaña",
peoplePosition:"Vicepresidente"
},
{
    id: 12,
    companyPace: 'DIRECTOR',
    videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
peopleName:"Mariano Nimo",
peoplePosition:"Gerente general"
},
]
const videos2=[
    {
        id: 10,
        companyPace: 'GERENTES',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Gustavo",
    peoplePosition:"Presidente"
    },
    {
        id: 11,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
        type: "video/mp4",
    peopleName:"Juan José",
    peoplePosition:"Vicepresidente"
    },
    {
        id: 12,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    
    {
        id: 13,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 14,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 15,
        companyPace: 'RESPONSABLES',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    
    {
        id: 16,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
        type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 17,
        companyPace: '',
        videoStaff: "/img/MobileImages/PuebaVideoMobile.mp4",
    type: "video/mp4",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },

 
    ]
const Staff = () => {
    

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