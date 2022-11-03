import React, { useRef, useState } from "react";
import "./Section2.css";
import Amico from "./Img/amico.svg";
import Rafiki from "./Img/rafiki.png";
import cuate from "./Img/cuate.png";
import Api from './Api'

const Section2 = () => {

   const btnRef = useRef()
   const divRef = useRef()
   const [text,setText] = useState('Less')

  

  


   const handleform = ()=>{
    console.log('hello')
    // btnRef.current.style.display = 'block'
    // btnRef.current.style.text = 'green'
    // divRef.current.style.display = 'none'
    if(divRef.current.style.display === 'grid'){
      divRef.current.style.display = 'none'
      // btnRef.current.style.display = 'block'
      setText('More')
    }else{
      divRef.current.style.display = 'grid'
      setText('Less')
    }
    // divRef.current.style.display = 'flex'
   }

   
  return (
    <div className="color">
      <div  className="sec2headerdiv">
      <Api />
        <h2 className="sec2header">
          Why do people get involved in Cryptocurrencies
        </h2>
        <div className="Sec2Buttondiv">
        <button onClick={()=>{
            handleform()
        }} className="sec2button" ref={btnRef}>See {text}</button>
        <button ref={btnRef} onClick={()=>{
          // seeMore()
        }} className="btnnone">See More</button>
        </div>
      </div>
      <div ref={divRef} className="sec2cryptodiv">
        <div className="Rafikidiv">
          <img className="rafikisec2" src={Rafiki} alt="" />
          <h3 className="Rafikih3">Financial Freedom</h3>
          <p className="Rafikip">
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </p>
        </div>
        <div className="cuatediv">
          <img src={cuate} alt="" />
          <h3 className="cuateh3">Easy Mode of Payment</h3>
          <p className="cuatep">
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </p>
        </div>
        <div className="Amicodiv">
          <img src={Amico} alt="" />
          <h3 className="Amicoh3">Investments</h3>
          <p className="Amicop">
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
