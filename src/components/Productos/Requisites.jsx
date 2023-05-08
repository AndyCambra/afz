import React from 'react'
import './productos.css'


const Requisites = ({id,requisitesText1, requisitesText2, requisitesText3, requisitesSubtitle1, requisitesSubtitle2, requisitesSubtitle3, requisitesSubtitleLease}) => {
  return (
    <div key={requisitesText1} className="requisites">
    <div className='requisites-box'>
    <h6 className='requisites-subtitle'>{id===5 ? requisitesSubtitleLease:requisitesSubtitle1}</h6>
      <p className='requisites-text'>{requisitesText1}</p>
      </div>
      <div className={requisitesText2 === "" ? 'display-none': 'requisites-box' }>
      <h6 className='requisites-subtitle'>{requisitesSubtitle2}</h6>
      <p className='requisites-text'>{requisitesText2}</p>
      </div>
      <div className='requisites-box'>
      <h6 className='requisites-subtitle'>{requisitesSubtitle3}</h6>
      <p className='requisites-text'>{requisitesText3}</p>
      </div>
  </div> 
  )
}

export default Requisites