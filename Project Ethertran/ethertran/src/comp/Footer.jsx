import React from "react";

import logo from "../../images/4bg.png";

const companyCommonStyles = "min-h-[x] sm:px-0 px-1 sm:min-w-[120px] flex justify-center items-center  text-sm font-light text-white";

const Footer = () => (

  
 
 <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 ">
       <div className="sm:w-[100%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">API provider by </p>
      <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-1 items-center">
                        <div >
                        <span className={companyCommonStyles}><a className="text-blue" href="https://www.coingecko.com" rel="noreferrer" target={"_blank"}>CoingeckoAPI </a></span>
                        </div>
                       
                        <div>
                        <span className={companyCommonStyles}><a className="text-blue" href="https://rapidapi.com/hub" rel="noreferrer" target={"_blank"}>RapidAPI </a></span>
                        </div>
                       
                        <div >
                        <span className={companyCommonStyles}><a className="text-blue" href="https://www.alchemy.com" rel="noreferrer" target={"_blank"}>AlchemyAPI </a></span>
                        </div>
                    </div>
      <p className="text-white text-sm text-center font-medium mt-2">www.EtherTran.online</p>
    </div>

    <div className="sm:w-[100%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[100%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@EtherTran2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;