import React from 'react'
import './balances.css'
import { Link } from 'react-router-dom'

const Balances = () => {
  return (
    <section className='balance-backgound' >
        <div className='balance-grid'>
          <div className="balance-block">
            <div className='sub-menu-balance'>
                <div className='items'>
             <h5 className="item-balance">BALANCES</h5>
            <Link to="">
              <h5 className='item'>CERTIFICACIONES</h5>
            </Link>
            </div>
            <div>
            <Link to="/">
              <h5 className='item-home'>HOME</h5>
            </Link>
            </div> 
            </div>
            <h5 className='horizontalTitle'>MEMORIA Y BALANCES</h5>
          </div>
          
        </div>
       
      </section>
  )
}

export default Balances