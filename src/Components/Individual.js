import React, { useRef, useState } from "react";
import "./Individual.css";
import {Link} from 'react-router-dom'

const Individual = ({setName}) => {
  const inp2Ref = useRef()
  const indiRef = useRef()
  const busiRef = useRef()
  function handleForm (event){
    event.preventDefault()
    
  }
  function well (){
    inp2Ref.current.placeholder = 'Full name'
    if(inp2Ref.current.placeholder === 'Full name'){
      indiRef.current.style.background= 'white'
      busiRef.current.style.background= '#E4E4E4'
    }else{
      // inp2Ref.current.placeholder = 'Business name'
      indiRef.current.style.background= '#E4E4E4'
      busiRef.current.style.background= 'white'
      
    }
  }
  function well2 (){
    inp2Ref.current.placeholder = 'Business name'
    if(inp2Ref.current.placeholder === 'Business name'){
      indiRef.current.style.background = 'white'
      busiRef.current.style.background = '#E4E4E4'
    }else{
      // inp2Ref.current.placeholder = 'Business name'
      indiRef.current.style.background= '#E4E4E4'
      busiRef.current.style.background= 'white'
      
    }
  }
  // function well2 (){
  // }
  return (
    <div>
      <div className="individual">
        <div className="yoo">
          <h4>Welcome</h4>
          <button onClick={()=>{
            well()
          }} className="indibtn" ref={indiRef}>Individual</button>
         <button onClick={()=>{
          well2()
         }} className="busbtn" ref={busiRef}>Business</button>
        </div>
        <form onSubmit={(event)=>{
            handleForm(event)
        }} className="" action="">
          <div className="inp1div">
            <input onChange={(event)=>{
               console.log(event.target.value)
               setName(event.target.value)
            }} className="inp1" type="text" placeholder="Username" />
          </div>
          <div className="inp2div">
            <input ref={inp2Ref} className="inp2" type="text" placeholder="Individual" />
          </div>
          <div className="inp3div">
            <input className="inp3" type="text" placeholder="Email" />
          </div>
          <div className="inp4div">
            <input className="inp4" type="text" placeholder="Phone number" />
          </div>
          <div className="inp5div">
            <input className="inp5" type="text" placeholder="Referral code (optional)" />
          </div>
        </form>
        <p className="para1">
          By clicking the Sign Up button below, you agree to TradExpress{" "}
          <span className="tands">terms and service</span>
        </p>
        <div className="signupdiv">
         <Link to='/welcome'><button className="signupbtn">Sign up</button></Link>
        </div>
        <div>
          <p  className="para2">Already have an account ? <span className="clickbtn">Click here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Individual;
