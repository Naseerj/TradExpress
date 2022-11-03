import React from "react";
import "./Welcome.css";
import message from "./Img/Rectangle 26.svg";

const Welcome = ({name}) => {

  return (
    <div className="welcomediv">
      <h6>You are almost in</h6>
      <h4>Welcome {name}</h4>
      <img className="img1" src={message} alt="" />
      <div className="pdiv">
        <p>
          An activation link has been sent to Ireti4tech@gmail.com Please click
          on the link to verify your email and activate your TradExpress
          account.
        </p>
      </div>
     <div className="signupbtn2">
     <button className="welcomebtn">Signup</button>
     </div>
      <p>
        Already have an account ? <span>Click here</span>
      </p>
    </div>
  );
};

export default Welcome;
