import React from 'react';
import {  Avatar } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../utils/cryptoNewsApi';
import 'antd/dist/antd.css';


const demoImage = 'https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png';

const News = ({ simplified }) => {
    const { data : cryptoNews } = useGetCryptoNewsQuery ({ newsCategory: 'ethereum', count: simplified ? 8 : 12})



    if( !cryptoNews?.value) return 'Loading'
    
  return (
    <div id='News' className=" flex flex-col  justify-center  items-center m-5 p-5 md:p-12 py-12 px-4" >
     <h1 className='text-white text-5xl sm:text-1xl py-2 text-logo text-center' > News</h1>

    <div className="flex flex-wrap w-full justify-center  items-center m-5 p-5" >
        {cryptoNews.value.map((news, index) => (
          <div key={index} className="m-2">
              <div  className=" bg-blue-800 bg-opacity-40 w-[23rem] h-[18rem] max-w-sm p-6 rounded-lg shadow-md  " data-aos="fade-down" data-aos-duration="500">
            
                  <h5  className="mb-2 text-xl md:text-xl font-bold tracking-tight text-white">{news.name.length > 50 ? `${news.name.substring(0, 60)}...` : news.name}</h5>
           
                  <p   className="mb-1 font-normal text-gray-400 ">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div  className="py-2 flex flex-row  items-center justify-between">
          <div  className=" flex flex-row  items-center  ">
              <Avatar   src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
              <p   style={{color: 'white' }} className="p-2">{news.provider[0]?.name}</p>          
        </div>
        <div  className="justify-end items-end">
              <p  style={{color: 'white', margintop: 2, }}>{moment(news.datePublished).startOf('ss').fromNow()}</p>
         </div>
         </div>
          
          <a   href={news.url} target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-none bg-gray-500 bg-opacity-40  rounded  hover:bg-blue-600 hover:text-white active:bg-green-700">
            Read more
          </a>
      </div>
        

        
          
    </div>
          
            ))}
          </div> 
        </div>
  )
}


export default News