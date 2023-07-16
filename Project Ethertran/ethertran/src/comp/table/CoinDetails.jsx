import React from 'react'
import { useContext, useLayoutEffect, useState,useEffect } from 'react';
import  ReactDOM  from 'react-dom'
import {useParams,useNavigate }  from 'react-router-dom'
import { CrytoContext } from "../../context/Crytocontext1";
import { Coinchart } from '../index';


const Indicator = ({currentPrice, high, low }) => {

    const [green, setGreen] = useState();

  useEffect(() => {
    let total = high - low;
    let greenZone = ((high - currentPrice) * 100) / total;
    setGreen(Math.ceil(greenZone));
  }, [currentPrice, high, low]);

    


    return (
        <>
      <span className="bg-red-500 h-1.5 rounded-l-lg " style={{ width: `${100 + green}%` }}>
        &nbsp;
      </span>
      <span className="bg-blue-500 h-1.5 rounded-r-lg " style={{ width: `${green}%` }}>
        &nbsp;
      </span>
    </>
    )

}



const CoinDetails = () => {

    let {coinId} = useParams();
    let navi = useNavigate();
    let {getcoindata,coindetails,currency} = useContext(CrytoContext);

    useLayoutEffect(() => {
        getcoindata(coinId)
    }, [coinId])

    const closede = () =>{
        navi("..")
    }


  return ReactDOM.createPortal(
    <div className="fixed top-0 w-full h-full bg-gray-800 bg-opacity-50 first-letter:
    backdrop-blur-sm flex items-center justify-center" onClick={closede}>
        <div onClick={(e) => e.stopPropagation()} className="w-[65%]  h-auto bg-black bg-opacity-30 rounded-lg text-white relative ">
        {
            coindetails ? (
                <div className="flex-row md:flex  items-center justify-between h-full w-full p-4">
                    <div className="flex flex-col w-[45%] h-full pr-2 ">
                    <div className="flex w-full items-center">
                        <img className="w-[3rem] h-[3rem] mx-1.5 " src={coindetails.image.large} alt={coindetails.id}/>
                        <h1 className="text-white text-xl capitalize font-medium">{coindetails.name}</h1>
                        <span className="text-sm py-0.5 px-2.5 ml-2 bg-cyan-600 text-cyan-500 bg-opacity-25 rounded uppercase">{coindetails.symbol}</span>
                    </div>

                    <div className="md:flex flex w-full mt-6 ">
                        <div className="flex flex-col w-full ">
                            <div className="flex justify-between "><span className="text-sm px-1 capitalize text-gray-400 ">Price</span>
                            <div><span className={`text-sm px-1 md:ml-2 ml-32 font-medium flex items-center rounded uppercase bg-opacity-25 ${coindetails.market_data.price_change_percentage_24h > 0 ? 'bg-blue-700 text-blue-500': 'bg-red-700 text-red-500'}`}>{Number(coindetails.market_data.price_change_percentage_24h).toFixed(2)}%</span></div>
                            </div>
                            <h2 className="text-white font-bold text-lg">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, maximumSignificantDigits: 5}).format(coindetails.market_data.current_price[currency])}</h2>
                        </div>
                       
                    </div>

                    <div className=" md:flex hidden w-full mt-4 justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm px-1 capitalize text-gray-400">Market Cap</span>
                            <h2 className="text-white font-bold text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 0}).format(coindetails.market_data.market_cap[currency])}</h2>
                        </div>
                       
                    </div>

                    <div className="md:flex hidden flex-col w-full mt-4 justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm px-1 capitalize text-gray-400">Total volume</span>
                            <h2 className="text-white font-bold text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 0}).format(coindetails.market_data.total_volume[currency])}</h2>
                        </div>
                       
                    </div>

                    <div className="md:flex hidden w-full mt-4 justify-between">
                        <Indicator 
                        currentPrice={coindetails.market_data.current_price[currency]}
                        high={coindetails.market_data.high_24h[currency]}
                        low={coindetails.market_data.low_24h[currency]}
                        />
                    </div>

                    <div className="md:flex hidden w-full mt-4 justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm px-1 capitalize text-gray-400">Low 24H</span>
                            <h2 className="text-white font-bold text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 5}).format(coindetails.market_data.low_24h[currency])}</h2>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm px-1 capitalize text-gray-400">High 24H</span>
                            <h2 className="text-white font-bold text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 5}).format(coindetails.market_data.high_24h[currency])}</h2>
                        </div>
                    </div>

                    <div className="md:flex hidden w-full mt-4 justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm px-1 xl:flex hidden capitalize text-gray-400">Max supply</span>
                            <h2 className="text-white  xl:flex hidden font-bold text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 0}).format(coindetails.market_data.max_supply)}</h2>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm px-1 capitalize  xl:flex hidden text-gray-400">Circulating supply</span>
                            <h2 className="text-white font-bold  xl:flex hidden text-base">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 0}).format(coindetails.market_data.circulating_supply)}</h2>
                        </div>
                    </div>

                    <div className="xl:flex hidden w-full mt-4 justify-between">
                        <div className="flex flex-col">
                            <a target={"_blank"} rel="noreferrer" className="text-sm bg-gray-600 text-gray-300 px-1.5 py-0.5 my-0.5 rounded" href={coindetails?.links?.homepage[0]}>{coindetails?.links?.homepage[0].substring(0,30)}</a>
                            <a target={"_blank"} rel="noreferrer" className="text-sm bg-gray-600 text-gray-300 px-1.5 py-0.5 my-0.5 rounded" href={coindetails?.links?.blockchain_site[0]}>{coindetails?.links?.blockchain_site[0].substring(0,30)}</a>
                            {
                                coindetails.links.official_forum_url[0] &&
                                <a target={"_blank"} rel="noreferrer" className="text-sm bg-gray-600 text-gray-300 px-1.5 py-0.5 my-0.5 rounded" href={coindetails?.links?.official_forum_url[0]}>{coindetails?.links?.official_forum_url[0].substring(0,30)}</a>
                            }
                            
                     
                        </div>
                        <div className="xl:flex hidden flex-col content-start">
                            <span className="text-sm px-1 capitalize text-gray-400">sentiment</span>
                            <div><span className={`text-sm px-1 ml-2 my-1 font-medium flex items-center rounded uppercase bg-opacity-25 bg-blue-700 text-blue-500 `}>{Number(coindetails.sentiment_votes_up_percentage).toFixed(2)}%</span></div>
                            <div><span className={`text-sm px-1 ml-2 my-1  flex items-center rounded uppercase bg-opacity-25 bg-red-700 text-red-500 `}>{Number(coindetails.sentiment_votes_down_percentage).toFixed(2)}%</span></div>
                            
                        </div>
                        
                    </div>
                    <div ><span className={`text-sm px-1 ml-2 my-1  md:flex hidden items-start rounded uppercase `}>{coindetails.last_updated}</span></div>

                    



                    </div>
                    
                    <div className="flex-col md:flex-col md:w-[60%] w-full md:h-full md:pl-3 ">
                    <Coinchart id={coindetails.id}/>
                    <div className="xl:flex hidden mt-4 text-center items-center justify-center">
                        <h3 className="text-white font-bold text-base"><span className="text-sm px-1 capitalize  text-gray-400">Mark rank: </span>{coindetails.market_cap_rank}</h3>
                        <h3 className="text-white font-bold text-base"><span className="text-sm px-1 capitalize  text-gray-400">coinGecko rank: </span>{coindetails.coingecko_rank}</h3>
                        <h3 className="text-white font-bold text-base"><span className="text-sm px-1 capitalize text-gray-400">coinGecko score: </span>{coindetails.coingecko_score}</h3>

                        </div>
                    </div>
                </div>
            ):

            <div className="w-full min-h-[50vh] flex justify-center items-center">
                                <div role="status" className=" animate-spin w-8 h-8 border-4 rounded-full border-blue-500 border-b-gray-500"/>
                                </div>
            
            }
        </div>
 
        
        </div>,
    document.getElementById("model")
  )
}

export default CoinDetails