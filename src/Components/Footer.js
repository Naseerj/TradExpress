import React from "react";
import "./Footer.css";
import Twitter from "./Img/Vector (3).svg";
import Telegram from "./Img/Vector (5).svg";
import Whatsapp from "./Img/Vector (8).svg";
import Facebook from "./Img/Vector (9).svg";

const Footer = () => {
  return (
    <div>
      <div  className="footerparent">
      <div>
        <h5>Products</h5>
        <p>Bitcoin</p>
        <p>Alt</p>
        <p>Fiat</p>
        <p>Refill</p>
        <p>P2P</p>
      </div>
      <div>
        <h5> Learn</h5>
        <p>Blog</p>
        <p>Help Center</p>
      </div>
      <div className="socials">
        <h5>Contact</h5>
        <p>hello@tradexpress.com</p>
        <p>support@tradexpress.com</p>
        <div className="icondiv"> 
        <img src={Twitter} alt="" />
        <img src={Telegram} alt="" />
        <img src={Whatsapp} alt="" />
        <img src={Facebook} alt="" />
        </div>
      </div>
      <div>
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Rates</p>
        <p>Mobile</p>
      </div>
      <div>
        <h5> Legal</h5>
        <p>Privacy Policy</p>
        <p>Anti-Money Laundering</p> 
        <p>Terms and Conditions</p>
      </div>
      </div>
     <div className="texttraddiv">
     <h5 className="texttrad">2021 TradXpress all right reserved</h5>
     </div>
    </div>
  );
};

export default Footer;
