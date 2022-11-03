import React, { useRef, useState } from "react";
import "./Buysell.css";
import { Link } from "react-router-dom";

const Buysell = () => {
  const [header6, setHeader6] = useState("coin to buy ==");
  const btnBuy = useRef();
  const btnSell = useRef();

  function changeSell() {
    if (header6 == "Coin to buy ==") {
      setHeader6("Coin to buy==");
      // btnBuy.current.style.background = 'white'
      // btnSell.current.style.background = '#E4E4E4'
    } else {
      setHeader6("Coin to buy==");
      // btnBuy.current.style.background = '#E4E4E4'
      // btnSell.current.style.background = 'white'
    }
  }
  function changeBuy() {
    if (header6 == "coin to buy ==") {
      setHeader6("Coin to sell==");
      // btnBuy.current.style.background = 'white'
      // btnSell.current.style.background = '#E4E4E4'
    } else {
      setHeader6("Coin to sell==");
    }
  }
  return (
    <div className="buyselldiv">
      <div className="buyselltext">
        <h3>Buy/Sell instantly</h3>
      </div>
      <div className="bo">
        <button className="buybtn"
          onClick={() => {
            changeSell();
          }}
          ref={btnBuy}
        >
          Buy{" "}
        </button>
        <button className="sellbtn"
          onClick={() => {
            changeBuy();
          }}
          ref={btnSell}
        >
          Sell
        </button>
      </div>
      <div className="buyselldiv2">
        <div className="cointext">
          <h6>{header6}</h6>
        </div>
        <form action="">
          <select name="" id="">
            <option className="opt1" value="">
              Bitcoin
            </option>
            <option value="">Ethereum</option>
          </select>
          <div className="buyselldiv3">
            <div className="cointext2">
              <h6>Currency</h6>
            </div>

            <select name="" id="">
              <option value="">Naira(NGN)</option>
              <option value="">USD</option>
            </select>
          </div>
          <div className="moneydiv">
            <div className="amtdiv">
              <h6 className="h6">Amount</h6>
            </div>
            <div className="money2div">
              <h6 className="H">NGN</h6>
              <div className="moneyinpdiv">
                <input className="moneyinp" type="text" />
              </div>
            </div>
          </div>
          <div className="btncontdiv">
            <button className="btncontinue">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Buysell;
