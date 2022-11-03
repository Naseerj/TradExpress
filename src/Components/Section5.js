import React from "react";
import "./Section5.css";
import Bayo from "./Img/Ellipse 3.svg";
import Ireti from "./Img/Ellipse 3 (2).svg";
import Ray from "./Img/Ellipse 3 (1).svg";


const Section5 = () => {
  return (
    <div>
      <div className="firstdiv">
        <h3>Customer Reviews</h3>
        <div className="dee">
          {/* <div className="tt">
            <img src={Union} alt="" />
            <div className="color">
              <img className="movement" src={Text} alt="" />
            </div> */}
          <div className="flew">
            <div className="practicediv">
              <h6 className="h44">
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </h6>
            </div>
            <div className="flit">
              <div className="red">
                <img className="Ireti" src={Bayo} alt="" />
              </div>
              <div className="blue">
                <h5>Bayo</h5>
                <p>USA</p>
              </div>
            </div>
          </div>
          {/* <div className="tt">
            <img src={Union} alt="" />
            <img className="movement1" src={Text} alt="" />
            <div className="movediv">
              <h6 className="move">
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </h6>
            </div> */}
          <div className="flew">
            <div className="practicediv">
              <h6 className="h44">
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </h6>
            </div>
            <div className="flit">
              <div className="red">
                <img className="Ireti" src={Ray} alt="" />
              </div>
              <div className="blue">
                <h5>Olagoke</h5>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
          <div className="flew">
            <div className="practicediv">
              <h6 className="h44">
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </h6>
            </div>
            <div className="flit">
              <div className="red">
                <img className="gree" src={Ireti} alt="" />
              </div>
              <div className="blue">
                <h4>Ireti</h4>
                <p>Nigeria</p>
              </div>
            </div>
            {/* <div className="tt">
            <img src={Union} alt="" />
            <img className="movement2" src={Text} alt="" />
            
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
