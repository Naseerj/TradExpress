import React from "react";
import "./Section4.css";
import Appstore1 from "./Img/Group 119.png";
import Playstore1 from "./Img/Group 120.png";
import {Link} from 'react-router-dom'

const Section4 = () => {
  return (
    <div className="parentdivsec4">
      <div className="childivsec4">
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h2>Create your account for free and start trading today!</h2>
        <div className="sec4btndiv">
        <Link to='/individual'><button className="sec4btn">Get started</button></Link>
        </div>
      </div>
      <div className="parentdiv1store">
      <div className="Storediv">
        <div><img className="apps" src={Appstore1} alt="" /></div>
        <div><img className="plays" src={Playstore1} alt="" /></div>
      </div>
      </div>
    </div>
  );
};

export default Section4;
