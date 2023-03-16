import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons';
import LegalFooter from '../LegalFooter/LegalFooter';

const Footer = () => {
    
  return (
    <>
    <div className='footerBox'>
        <div className='footer-in'>
        <img src="/img/logoAfz.png" alt="Logo Afz" />
        <div className='footerMenu'>
            <div className='footerItem'>
                <NavLink to="/balances">
                <h4 className='footerCategory'>BALANCES</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="/certificaciones">
                <h4 className='footerCategory'>CERFITICACIONES</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="/prensa">
                <h4 className='footerCategory'>PRENSA</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="/prevencion-fraude">
                <h4 className='footerCategory'>PREVENCIÓN DEL FRAUDE</h4>
                </NavLink>
            </div>
            <div className='footerItem'>
                <NavLink to="/">
                <h4 className='footerCategory'>HOME</h4>
                </NavLink>
            </div>
        </div>
        <div className='contactBox'>
        <p>(+5411) 3986 2800</p>
        <p className='footerEmail'>info@afianzadora.com.ar</p>
        <SocialIcons className="social-box" classCircle="icon-circle" classIcon="social-icon" classIconBig="social-icon-big"/>
        </div>
        </div>    
        <LegalFooter />

    </div>
    </>
  )
}

export default Footer