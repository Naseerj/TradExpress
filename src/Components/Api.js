import React, { useState } from "react";
import { useEffect } from "react";
import redArrow from "./Img/Vector (10).svg";
import greenArrow from "./Img/Vector (10).svg";
import './Api.css'

const Api = () => {
  const [api, setApi] = useState("");
  const [dataGotten, setDataGotten] = useState(false);
  const url = "https://api.coinlore.net/api/tickers/?start=0&limit=5";

  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();

    // setData(result.data);
    const { data } = result;
    setApi(data);
    setDataGotten(true);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flexx1">
      {!dataGotten && <h1>Loading....</h1>}
      {dataGotten &&
        api.map((datum) => {
          const { symbol, id, price_usd, percent_change_24h } = datum;
          return (
            <div className='soft' key={id}>
              <div className="bitcoindiv">
                <div className="flag"> 
                <div className="sym">
                <h6 className="font">{symbol}/NGN </h6>
                </div>
               <div>
               <p className="font"> {price_usd}NGN </p>
               </div>
                </div>
               <div className="r">
               <p className="font">{percent_change_24h}</p>
               <img className="rrr" src={redArrow} alt="" />
               </div>
              </div>
              <hr  />
            </div>
          );
        })}
      {/* <h1>{api}</h1> */}
    </div>
  );
};

export default Api;
