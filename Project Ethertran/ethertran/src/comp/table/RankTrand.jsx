import React from 'react'
import {useNavigate} from 'react-router-dom'

const RankTrand = ({data}) => {

    let nav = useNavigate();

    const getdetail = (id) => {
        nav(id)
    }

   

 

  return (
    <div onClick={() => getdetail(data.id)} className="w-[90%] md:w-[35%] bg-gray-500 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer  hover:bg-gray-600 hover:bg-opacity-60"> 
        {data?(

        <>
        <h3 className="flex  items-center my-0.5  ">
            <div className="flex flex-row justify-end items-center ">
            <span className="text-white md:text-base text-xs capitalize">Name:&nbsp; </span>
            <span className="text-blue-700 md:text-base text-xs capitalize">{data.name}</span>
          
            <img src={data.small} alt={data.name} className="hidden mx-1.5 round-full"/>
            </div>
        </h3>
        <h3 className="flex  items-center my-0.5  ">
            <span className="text-white md:text-base text-xs capitalize">Market Rank:&nbsp; </span>
            <span className="text-blue-700 md:text-base text-xs capitalize">{data.market_cap_rank}</span>
        </h3>
        <h3 className="flex xl:text-base text-xs  items-center my-0.5 ">
            <span className="text-white md:text-base text-xs capitalize">Price(btc):&nbsp; </span>
            <span className="text-blue-700 md:text-base text-xs capitalize">
            {new  Intl.NumberFormat("en-US",{  style: "currency", currency: "btc", maximumSignificantDigits: 3}).format(data.price_btc)}    
                </span>
        </h3>

        <img src={data.large} alt={data.name} className="w-[23%] h-[auto] top-2/4 -right-2   md:w-[43%] xl:w-[30%] 2xl:w-[20%]  md:h-[auto] xl:-right-10 md:-right-5 -translate-y-2/4 round-full absolute "/>
        </>
        
        ):
        <div className="w-full   min-h-[50vh] flex justify-center items-center ">
        <div role="status" className="  animate-spin w-8 h-8 border-4 rounded-full border-cyan-500 border-b-gray-500"/>
        </div>
        }
    </div>
  )
}

export default RankTrand