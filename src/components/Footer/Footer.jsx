import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons';
import LegalFooter from '../LegalFooter/LegalFooter';
import { BrowserView, MobileView } from 'react-device-detect';
import { useLocation } from 'react-router-dom'
import { companyData } from '../utils/Texts/companyData';
import footerTexts from '.././utils/Texts/footerTexts.json'
import { useLangContext } from '../../Context/LangContext'


const Footer = () => {
const location= useLocation()
const {selectedLanguage} = useLangContext()
const text = footerTexts[selectedLanguage];
    
  return (
    <>
    <BrowserView>
    <div className='footerBox'>
        <div className='footer-in'>
        <img src="/img/logoAfz.png" alt="Logo Afz" />
        <div className='footerMenu'>
            {text.map((item,key)=>
            <div className='footerItem'>
                <NavLink to="/balances">
                <h4 className='footerCategory'>{item.name}</h4>
                </NavLink>
            </div>
            )}
            <div className='footerItem'>
                <NavLink to="/">
                <h4 className='footerCategory'>HOME</h4>
                </NavLink>
            </div>
        </div>
        <div className='contactBox'>
        <p>{companyData.buenosAires.phone}</p>
      
        <p className='footerEmail'>{companyData.buenosAires.mail}</p>
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