import React from 'react'
import Button from '../utils/BigButton/Button'
import HorizontalSubMenu from '../utils/HorizontalSubmenu/HorizontalSubMenu'
import VideoCard from '../utils/VideoCards/VideoCard'
import "./nosotros.css"

const staff=
 {title: "EL EQUIPO",
    text: "Contamos con un grupo directivo conformado por reconocidos referentes del mercado internacional. Nuestro equipo está integrado por profesionales de diferentes disciplinas, cada uno con la más alta capacitación en su especialidad. "
  }
const videos=[
{
    id: 10,
    companyPace: 'SOCIOS',
    videoStaff: "img/Gustavo.jpg",
peopleName:"Gustavo",
peoplePosition:"Presidente"
},
{
    id: 11,
    companyPace: '',
    videoStaff: "img/Gustavo.jpg",
peopleName:"Juan José",
peoplePosition:"Vicepresidente"
},
{
    id: 12,
    companyPace: 'DIRECTOR',
    videoStaff: "img/Gustavo.jpg",
peopleName:"Mariano Nimo",
peoplePosition:"Gerente general"
},
]
const videos2=[
    {
        id: 10,
        companyPace: 'GERENTES',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Gustavo",
    peoplePosition:"Presidente"
    },
    {
        id: 11,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Juan José",
    peoplePosition:"Vicepresidente"
    },
    {
        id: 12,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    
    {
        id: 13,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 14,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 15,
        companyPace: 'RESPONSABLES',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    
    {
        id: 16,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },
    {
        id: 17,
        companyPace: '',
        videoStaff: "img/Gustavo.jpg",
    peopleName:"Mariano Nimo",
    peoplePosition:"Gerente general"
    },

 
    ]
const Staff = () => {
  return (
    <div className='staffBackgound'>
        <div className='staffHero'>
        <div className="staffBlock">
       <HorizontalSubMenu title={staff.title} text={staff.text} />
        </div>
          <div className="card-box">
          {videos.map((item)=>{
            return(
                <VideoCard companyPlace={item.companyPace} peopleName={item.peopleName} peoplePosition={item.peoplePosition} videoStaff={item.videoStaff} className='card' />
            )
          })}
           </div>
           <div className="card-box">
          {videos2.map((item)=>{
            return(
                <VideoCard companyPlace={item.companyPace} peopleName={item.peopleName} peoplePosition={item.peoplePosition} videoStaff={item.videoStaff} />
            )
          })}
           </div>     
        </div>
        <img src="img/GrupoAfz.jpg" alt="Foto grupal" className='group-photo'/>
        <div className="work-button">
        <Button name={"TRABAJÁ CON NOSOTROS"} />
        </div>
      
        
        
    
        

      </div>
  )
}

export default Staff