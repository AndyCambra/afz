import React from 'react'
import './balances.css'
import { Link } from 'react-router-dom'
import BalancesGroup from '../utils/BalancesCard/BalancesGroup'
import BalancesGroupBottom from '../utils/BalancesCard/BalancesGroupBottom'


const topCardInfo=[
  {id: 10, year:2021,cardTopImg: "img/BalancesTapas/Tapas2021.jpg", cardTopAlt: "Tapa Balance 2021"},
  {id: 11, year:2020,cardTopImg: "img/BalancesTapas/Tapas2020.jpg", cardTopAlt: "Tapa Balance 2020"},
  {id: 12, year:2019,cardTopImg: "img/BalancesTapas/Tapas2019.jpg", cardTopAlt: "Tapa Balance 2019"},
  {id: 13, year:2018,cardTopImg: "img/BalancesTapas/Tapas2018.jpg", cardTopAlt: "Tapa Balance 2018"},
  {id: 14, year:2017,cardTopImg: "img/BalancesTapas/Tapas2017.jpg", cardTopAlt: "Tapa Balance 2017"},
  {id: 15, year:2016,cardTopImg: "img/BalancesTapas/Tapas2016.jpg", cardTopAlt: "Tapa Balance 2016"},
  {id: 16, year:2015,cardTopImg: "img/BalancesTapas/Tapas2015.jpg", cardTopAlt: "Tapa Balance 2015"},
  ]
  const bottomCardInfo=[
    {id: 10, year:2014,cardTopImg: "img/BalancesTapas/Tapas2014.jpg", cardTopAlt: "Tapa Balance 2014"},
    {id: 11, year:2013,cardTopImg: "img/BalancesTapas/Tapas2013.jpg", cardTopAlt: "Tapa Balance 2013"},
    {id: 12, year:2012,cardTopImg: "img/BalancesTapas/Tapas2012.jpg", cardTopAlt: "Tapa Balance 2012"},
    {id: 13, year:2011,cardTopImg: "img/BalancesTapas/Tapas2011.jpg", cardTopAlt: "Tapa Balance 2011"},
    {id: 14, year:2010,cardTopImg: "img/BalancesTapas/Tapas2010.jpg", cardTopAlt: "Tapa Balance 2010"},
    {id: 15, year:2009,cardTopImg: "img/BalancesTapas/Tapas2009.jpg", cardTopAlt: "Tapa Balance 2009"},
    {id: 16, year:2008,cardTopImg: "img/BalancesTapas/Tapas2008.jpg", cardTopAlt: "Tapa Balance 2008"},
    ]


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
             {bottomCardInfo.map((itemBalance)=>{
              return(
              <BalancesGroupBottom number={itemBalance.year} cardTopAlt={itemBalance.cardTopAlt} cardTopImg={itemBalance.cardTopImg}/>
              )
            })}

          </div>
          
        </div> 
          
      </section>
  )
}

export default Balances