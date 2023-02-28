import React from 'react'
import { useEffect } from 'react';
import prensaData from '../utils/Texts/prensaData';
import './prensa.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import PressCard from '../utils/PressCard/PressCard';


const Prensa = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])
const lastNote=prensaData[prensaData.length - 1]


  return (
     <div className='press-background'>
      <div className='product-content'>
        <div className='press-box'>
            <div className='main-note-img'>
                <img src={lastNote.img} alt={lastNote.alt} />
            </div>
                <div className='head-note'>
                    <h5>{lastNote.media}</h5>
                    <h5 className='head-date'>{lastNote.publicationDate}</h5>
                </div>
                <div className='main-note-content'>
                    <h2>{lastNote.title}</h2>
                    <div className='box'>{lastNote.text.substring(0, 740)} ...
                        <div className="more">
                            <div className='see'>Ver mas</div><Icon icon="ic:baseline-plus" className='icon-on-grey' />  
                        </div>
                    </div>
                </div>
            <div>
                <div className='menu-note'>
                        <h5>ULTIMAS NOTICIAS</h5>
                </div>
                <div>
                    <Link to="/" className='press-menu-link'><h5>HOME</h5></Link>
                </div>
            </div>
            <div className='second-grid'>
            {prensaData.map((item, key)=>
            <PressCard key={item.id} prensaData={item} />)}
            </div>
            </div>
            
        </div>
        </div>
        
  )
}

export default Prensa