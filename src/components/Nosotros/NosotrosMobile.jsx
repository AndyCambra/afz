import React from 'react'
import MobileSubMenu from './MobileSubMenu'
import SixLogos from './SixLogos'
import BigButton from '../utils/BigButton/BigButton'

const NosotrosMobile = ({us, usRef, teamRef, comRef, reinsurersRef, handleButtonClicked, staff, reisurance, compromise}) => {
  return (
    <div>
         <div className='top-section'title="us-backgound" id="section1"  ref={usRef}>
            <MobileSubMenu title={us.title} text={us.text} usRef={usRef} teamRef={teamRef} reinsurersRef={reinsurersRef} comRef={comRef}  onClick={handleButtonClicked}/>    
        </div>
          <img src="/img/MobileImages/EmpresaMobile.jpg" alt="Sala de reuniones Afianzadora" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{us.title}</h5>
          <p className='text-us-mobile'>{us.text}</p>
        </div>

        <div ref={teamRef}>
        <img src="img/MobileImages/StaffMobile.jpg" alt="Foto grupal del staff" className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{staff.title}</h5>
          <p className='text-us-mobile'>{staff.text}</p>
          <div className='center-button'>
          <BigButton name="CONOCENOS" className={'dark-button'} />
          </div>
        </div>
        </div>
        <div ref={reinsurersRef}>
        <img src="img/Reaseguradores.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{reisurance.title}</h5>
          <p className='text-us-mobile'>{reisurance.text}</p>
          <SixLogos />
        </div>
        </div>
        <div ref={comRef}>
        <img src="img/MobileImages/PatioMobile.jpg" alt="Imagen de la oficina " className='image-us-mobile'/>
        <div className='text-box-mobile'>
          <h5 className='subtitle-us-mobile'>{compromise.title}</h5>
          <p className='text-us-mobile'>{compromise.text}</p>
        </div>
        </div>
    </div>
  )
}

export default NosotrosMobile