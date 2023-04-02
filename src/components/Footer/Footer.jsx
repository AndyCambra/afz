import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import SocialIcons from './SocialIcons';
import LegalFooter from '../LegalFooter/LegalFooter';
import { BrowserView, MobileView } from 'react-device-detect';
import { useLocation } from 'react-router-dom'
import { companyData } from '../utils/Texts/companyData';



const Footer = () => {
const location= useLocation()
 const categoriesFooter=[
   {id:1, name: "BALANCES"}, 
   {id:2, name: "CERTIFICACIONES"},
   {id:3, name: "PRENSA"},
   {id:4, name:  "PREVENCIÓN DEL FRAUDE"}
]
    
  return (
    <>
    <BrowserView>
    <div className='footerBox'>
        <div className='footer-in'>
        <img src="/img/logoAfz.png" alt="Logo Afz" />
        <div className='footerMenu'>
            {categoriesFooter.map((item,key)=>
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