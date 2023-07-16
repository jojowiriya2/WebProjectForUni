import React,{ useContext }from 'react'
import { TrendContext } from "../context/TrendContext";
import RankTrand from './table/RankTrand';
import { Outlet } from 'react-router-dom'
import { IoIosRefreshCircle } from "react-icons/io";

const Trending = () => {
  const {trendData,cleartrendsrch} = useContext(TrendContext);

 



  return (
    <section className="w-[90%] md:w-[80%] items-center flex flex-col mt-16 relative" > 
    <div className="flex md:w-[100%] h-[40%] xl:w-[90%] 2xl:w-[63%]  flex-wrap justify-evenly py-2 w-full min-h-[60vh]  border-gray-400 rounded">
    <button className="w-[2rem] mr-4 hover:scale-110  absolute -top-10" onClick={cleartrendsrch}>
          <IoIosRefreshCircle className="w-full h-full hover:fill-blue-400 fill-red-400 active:fill-green-400 " >
					</IoIosRefreshCircle>
      </button>

      {trendData && trendData.map((coin => <RankTrand key={coin.item.coin_id} data={coin.item}/>))}
    


    </div>
    <Outlet/>
    </section>
  )
}

export default Trending