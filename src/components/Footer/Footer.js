import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
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
        <p>(+5411) 3986 2800</p>
        <p>info@afianzadora.com.ar</p>
        </div>
    </div>
  )
}

export default Footer