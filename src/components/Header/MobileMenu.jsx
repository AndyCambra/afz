import React from 'react'
import HamButton from './HamButton'
import { NavLink } from 'react-router-dom'
import { useLangContext } from '../../Context/LangContext';
import headerTexts from '.././utils/Texts/headerTexts.json'


const MobileMenu = ({open, location, handleClick}) => {
  const {handleLanguage, selectedLanguage} = useLangContext()
  const text = headerTexts[selectedLanguage];

  
  return (
   
    <div className={open===true ?'headerMobileBox' :'hidden'}>  
    <NavLink to="/"> 
            {location.pathname.startsWith('/productos/') || location.pathname.startsWith('/escuela') || location.pathname === '/landing' || location.pathname === '/contacto' || location.pathname === '/nosotros' || location.pathname === '/cotizador-alquiler' || location.pathname === '/cotizador-directores' || location.pathname === '/carrousel' ? (
                <img src="/img/LogoAFZwbg.png" alt="Logo Afz" className='logoAfz-mobile' />
            ):(             
            <img src="/img/logoAfz.png" alt="Logo Afz" className='logoAfz-mobile' />)}
            </NavLink>  
          <div className= {open===true ? "navbar-open" : "out"}>
                <NavLink to="/nosotros" className='mobile-item' onClick={handleClick}>
              {text.categorie1}
                </NavLink>
                <NavLink to="/landing" className='mobile-item' onClick={handleClick}>
                {text.categorie2}
                </NavLink>
                <NavLink to="/escuela" className='mobile-item' onClick={handleClick}>
                {text.categorie3}
                </NavLink>
                <NavLink to="/contacto" className='mobile-item' onClick={handleClick}>
                {text.categorie4}
                </NavLink>    
          </div>
          <div className="ham-button">
          <HamButton open={open} handleClick={handleClick} handleLanguage={handleLanguage} selectedLanguage={selectedLanguage}/>
          </div>    
        </div>
       
  )
}

export default MobileMenu