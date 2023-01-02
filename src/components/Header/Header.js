import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='headerBox'>
        <div className='headerIn'>
            <img src="img/logoAfz.png" alt="Logo Afz" className='logoAfz' />
            <div className='headerMenu'>
            <div className='headerItem'>
                <h4 className='headerCategory'>NOSOTROS</h4>
                </div>
            <div className='headerItem'>
                <h4 className='headerCategory'>PRODUCTOS</h4>
                </div>
            <div className='headerItem'>
            <h4 className='headerCategory'>ESCUELA DE CAUCIÓN</h4>
            </div>
            <div className='headerItem'>
                <h4 className='headerCategory'>CONTACTO</h4></div>
            <div className='headerItem'>AFZ.ONLINE</div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Header