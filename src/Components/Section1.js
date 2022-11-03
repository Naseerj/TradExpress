import React from 'react'
import './Section1.css'
import Ellipses from './Img/Group 127 (1).png'
import Appstore from './Img/Group 68@2x.svg'
import Playstore from './Img/Group 69.svg'
import {Link} from 'react-router-dom'

const Section1 = () => {
  return (
    <div className='section1'>
        <div>
        <img className='Ellipses' src={Ellipses} alt="" />
        </div>
        <div className='header1div'>
          <h1 className='header1'>Buy, sell and manage your Crypto on TradExpress</h1>
         <div className='para1div'>
         <p className='para'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</p>
         </div>
         <div>
          <Link to='/individual'><button className='button1'>Get Started</button></Link>
         </div>
         <div className='storediv'>
          <img className='App' src={Appstore} alt="" />
          <img className='Play' src={Playstore} alt="" />
         </div>
        </div>
    </div>
    
  )
}

export default Section1