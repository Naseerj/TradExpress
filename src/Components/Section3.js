import React from "react";
import "./Section3.css";
import emoji1 from "./Img/emojione-monotone_keycap-1.svg";
import cuate1 from "./Img/cuate1.png";
import rafiki1 from "./Img/rafiki1.png";
import Amico1 from "./Img/cuate2.png";
import emoji2 from "./Img/emojione-monotone_keycap-2.svg";
import emoji3 from "./Img/emojione-monotone_keycap-3.svg";

const Section3 = () => {
  return (
    <div>
      <div className="sec3textdiv">
        <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          autem voluptate praesentium velit quae hic impedit perspiciatis sequi
          maiores? Commodi numquam magni distinctio, eum id architecto corporis
          amet. Vero, odit.
        </p>
      </div>
      <div className="emoji1div">
        <div className="childivsec3">
          <div className="emojidiv">
            <img src={emoji1} alt="" />
          </div>
          <div className="cuate1text">
            <h2 className="headerchange">Create a free Account</h2>
            <p className="fontp"> 
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
        </div>
        <div>
          <img className="cuateimg" src={cuate1} alt="" />
        </div>
      </div>
      <div className="rafikiparent">
        <div>
          <img className="rafiki1" src={rafiki1} alt="" />
        </div>
        <div>
          <div className="flexx">
            <div className="emo2div">
              <img className="emo2" src={emoji2} alt="" />
            </div>
            <div className="cuatetext">
              <h3 className="headerchange">Deposits</h3>
              <p>
                Choose your preferred deposit option like bank transfer,
                credit/debit card or send digital asset directly to your wallet
                for easy funding/withdrawal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="emoji1div">
        <div className="childivsec3">
          <div className="emojidiv">
            <img src={emoji3} alt="" />
          </div>
          <div className="cuate1text">
            <h2 className="headerchange">Create a free Account</h2>
            <p className="fontp">
              Sign up for your free TradExpress Wallet on web, iOS, or Android
              devices and follow our easy process to set up your profile.
            </p>
          </div>
        </div>
        <div>
          <img className="Amicoimg" src={Amico1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
