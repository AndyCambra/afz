import React from 'react'
import './balances.css'
import { Link } from 'react-router-dom'
import BalancesGroup from './BalancesGroup'
import BalancesGroupBottom from './BalancesGroupBottom'
import { useEffect } from 'react'
import { topCardInfo, bottomCardInfo } from './cardInfo'
import  balancesTexts  from '../utils/Texts/balancesTexts.json'
import { useLangContext } from '../../Context/LangContext'


const Balances = (props) => {
  const {selectedLanguage} = useLangContext()
  const text = balancesTexts[selectedLanguage];
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <section className='balance-backgound' >
        <div className='balance-grid'>
          <div className="balance-block">
            <div className='sub-menu-balance'>
                <div className='items'>
                    <h5 className="item-balance">{text.balanceMenu}</h5>
                    <Link to="/certificaciones">
                      <h5 className='item'>{text.certificationMenu}</h5>
                    </Link>
                </div>
                <div>
                  <Link to="/" className='home-link'>
                    <h5>HOME</h5>
                  </Link>
                </div> 
              </div>
                <h5 className={selectedLanguage === "EN" ? "horizontal-title-en":'horizontal-title-b'}>{text.title}</h5>
          </div>
          </div> 
        {  <div className='card-balance-box'>
            {topCardInfo.map((itemBalance)=>{
              return(
              <BalancesGroup number={itemBalance.year} cardTopAlt={itemBalance.cardTopAlt} cardTopImg={itemBalance.cardTopImg} fileDownload={itemBalance.fileDownload}/>
              )
            })}
             {bottomCardInfo.map((itemBalance)=>{
              return(
              <BalancesGroupBottom number={itemBalance.year} cardTopAlt={itemBalance.cardTopAlt} cardTopImg={itemBalance.cardTopImg} fileDownload={itemBalance.fileDownload}/>
              )
            })}
          </div>}  
      </section>
  )
}

export default Balances