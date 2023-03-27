import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons';
import LegalFooter from '../LegalFooter/LegalFooter';
import Mailto from '../utils/Mailto';
import { BrowserView, MobileView } from 'react-device-detect';
import { useLocation } from 'react-router-dom'


const Footer = () => {
const location= useLocation()
    
  return (
    <>
    <BrowserView>
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
        <Mailto email="andycambra.com.ar" subject='Hello and welcome' body="Hello World">
        <p className='footerEmail'>info@afianzadora.com.ar</p></Mailto>
        <SocialIcons className="social-box" classCircle="icon-circle" classIcon="social-icon" classIconBig="social-icon-big"/>
        </div>
        </div>    
        <LegalFooter />
    </div>
    </BrowserView>
    <MobileView>
    <div className='footerBox'>
       
        <div className='logo-box-mobile'> <img src="/img/logoAfz.png" alt="Logo Afz" />
        </div>
        <SocialIcons className="social-box-mobile" classCircle="icon-circle" classIcon="social-icon" classIconBig="social-icon-big"/>
        <NavLink to="/">
        <h5 className={location.pathname === "/" ? "display-none" : 'home-mobile-footer'}>HOME</h5>
       </NavLink>
        </div>
        {location.pathname === '/'?
        <LegalFooter />
        : null}
    </MobileView>
    </>
  )
}

export default Footer