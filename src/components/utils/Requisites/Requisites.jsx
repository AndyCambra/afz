import React from 'react'

const Requisites = ({requisitesText1, requisitesText2, requisitesText3}) => {


  return (
    <div className='requisites'>
    <div className='requisites-box'>
    <h6 className='requisites-subtitle'>Información sobre la obligación a garantizar</h6>
      <p className='requisites-text'>{requisitesText1}</p>
      </div>
      <div className={requisitesText2 === "" ? 'display-none': 'requisites-box' }>
      <h6 className='requisites-subtitle'>Información sobre el contratante</h6>
      <p className='requisites-text'>{requisitesText2}</p>
      </div>
      <div className='requisites-box'>
      <h6 className='requisites-subtitle'>Información adicional</h6>
      <p className='requisites-text'>{requisitesText3}</p>
      </div>
  </div> 
  )
}

export default Requisites