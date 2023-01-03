import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';
import LegalFooter from '../LegalFooter/LegalFooter';

const Footer = () => {
  return (
    <>
    <div className='footerBox'>
        <div className='footerIn'>
        <img src="img/logoAfz.png" alt="Logo Afz" className='logoAfz' />
        <div className='footerMenu'>
            <div className='footerItem'>
                <NavLink to="">
                <h4 className='footerCategory'>BALANCES</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="">
                <h4 className='footerCategory'>CERFITICACIONES</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="">
                <h4 className='footerCategory'>PRENSA</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="">
                <h4 className='footerCategory'>AGENCIAS</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="">
                <h4 className='footerCategory'>PREVENCIÓN DEL FRAUDE</h4>
                </NavLink>
            </div>
        </div>
        <div className='contactBox'>
        <p>(+5411) 3986 2800</p>
        <p className='footerEmail'>info@afianzadora.com.ar</p>
        <div className='socialBox'>
            <div className='iconCircle'>
            <Icon icon="grommet-icons:instagram" className='socialIcon' />
            </div>
            <div className='iconCircle'>
            <Icon icon="eva:facebook-outline" className='socialIcon' />
            </div>
            <div className='iconCircle'>
            <Icon icon="eva:linkedin-outline" className='socialIconBig' />
            </div>
            <div className='iconCircle'>
            <Icon icon="ps:youtube" className='socialIconBig' />
            </div>
        </div>
        
        </div>
        
        </div>
    </div>
    <LegalFooter />
    </>
  )
}

export default Footer