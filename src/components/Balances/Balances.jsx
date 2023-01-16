import React from 'react'
import './balances.css'
import { Link } from 'react-router-dom'
import BalancesGroup from '../utils/BalancesCard/BalancesGroup'


const topCardInfo=[
  {id: 10, year:2021,catdTopImg: "img/BalancesTapas/Tapas2021.jpg", cardTopAlt: "Tapa Balance 2021"},
  {id: 11, year:2020,catdTopImg: "img/BalancesTapas/Tapas2020.jpg", cardTopAlt: "Tapa Balance 2020"},
  {id: 12, year:2019,catdTopImg: "img/BalancesTapas/Tapas2019.jpg", cardTopAlt: "Tapa Balance 2010"},]


const Balances = (props) => {
  console.log(props)
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
          <div className='card-balance-box'>
            {topCardInfo.map((itemBalance)=>{
              return(
              <BalancesGroup number={itemBalance.year} cardTopAlt={itemBalance.cardTopAlt} cardTopImg={itemBalance.cardTopImg}/>
              )
            })}
            
          </div>
        </div> 
          
      </section>
  )
}

export default Balances