import React, {useLayoutEffect, useState, useContext} from 'react'
import { CrytoContext } from "../../context/Crytocontext1";
import { SaveContext } from "../../context/SaveContext";
import Pagenum from '../table/Pagenum';
import {Link} from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";










const Savebutton = ({data}) => {
    const {savecoin, acoin,removecoin} = useContext(SaveContext);

    const handleClick =(e) =>{
        e.preventDefault();
        savecoin(data.id)
        if(acoin.includes(data.id)){
            removecoin(data.id)
        }else{
            savecoin(data.id)
        }
    }



    return(
        <button onClick={(e) => handleClick(e)} className="outline-0 border-0 bg-none ml-1 cursor-pointer">
            <IoIosAddCircle className={`w-[2rem] h-[2rem] m-1  rounded-full ${acoin.includes(data.id)? 'fill-green-500': 'fill-white'} hover:fill-blue-500`} width="30" height="30">
             </IoIosAddCircle>
         </button>
    )

    
} 




const Tablecomp = () => {
 
    let {crytoData,currency,setsort} = useContext(CrytoContext)


    const [chart, setchart] = useState()
  
    const [type, settype] = useState("prices")
    const [day, setday] = useState(7)

   
 

    const handleSort = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setsort(val)
    }

   
        
    
   
  return (
    <>
    <div className="flex flex-col mt-2 bg-gray-700 bg-opacity-50 rounded w-full md:w-[80%] xl:w-[70%] 2xl:w-[50%]">

        {
            crytoData ? (
                <table className=" table-auto">
                    <thead  className="capitalize text-base text-blue-400 font-medium border-b border-slate-500">
                        <tr>
                            <th className="py-1"></th>

                            <th className="py-1 ">name</th>
                            <th className="py-1 ">Price</th>
                            <th className="py-1 lg:table-cell hidden">market cap </th>
                            <th className="py-1 lg:table-cell hidden" >1H</th>
                            <th className="py-1 lg:table-cell hidden">24H</th>
                            <th className="py-1 lg:table-cell hidden">7D</th>
                        </tr>
                 </thead>
                <tbody >
                   {
                        crytoData.map(data => {
                            return (
                            <tr key={data.id} className=" text-center text-base hover:bg-gray-500 hover:bg-opacity-20 ">
                            
                                <td className="border-r border-slate-500 ">
                                <Savebutton data={data}/>
                                </td>

                              
                                <td className=" py-4 rounded hover:bg-blue-500 hover:bg-opacity-20 active:bg-green-300  flex items-center justify-center uppercase">
                                <Link to={`/${data.id}`} className="cursor-pointer capitalize hover:text-white  active:text-blue-600">
                                <button className="flex items-center justify-center cursor-pointer">
                                    <img className='w-[1.5rem] h-[1.5rem] mx-1 items-center justify-center ' src={data.image} alt={data.name}/>
                                    {data.name}
                                    </button>
                                </Link>
                                </td>
                   

                                <td className="">{new Intl.NumberFormat("en-US",{ style: "currency", currency: currency}).format(data.current_price)}</td>
                                <td className={data.market_cap_change_percentage_24h>0 ? 'text-blue-500 py-4 lg:table-cell hidden ' : 'text-red-500 py-4 lg:table-cell hidden '}>{Number(data.market_cap_change_percentage_24h).toFixed(2)}%</td>
                                <td className={data.price_change_percentage_1h_in_currency>0 ? 'text-blue-500 py-4 lg:table-cell hidden' : 'text-red-500 py-4 lg:table-cell hidden'}>{Number(data.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                                <td className={data.price_change_percentage_24h_in_currency>0 ? 'text-blue-500 py-4 lg:table-cell hidden ' : 'text-red-500 py-4 lg:table-cell hidden '}>{Number(data.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                                <td className={data.price_change_percentage_7d_in_currency>0 ? 'text-blue-500 py-4 lg:table-cell hidden ' : 'text-red-500 py-4 lg:table-cell hidden '}>{Number(data.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                            </tr>
                            )
                        })
                   }
                </tbody>
            </table>) : 
            <div className="w-full min-h-[50vh] flex justify-center items-center">
                    <div role="status" className=" animate-spin w-8 h-8 border-4 rounded-full border-blue-500 border-b-gray-500"/>
            </div>
        }
      
    </div>
    <div className="relative   mt-3 xlmt-3 pl-9">
            <label className="relative flex items-center justify-center font-bold">Sort by:
                <select onClick={handleSort} name="sortby" className=" h-7  rounded  ml-2 bg-green-600 bg-opacity-40 py-0.5" >
                    <option className="bg-green-600" value="market_cap_desc">Market cap desc</option>
                    <option className="bg-green-600" value="gecko_desc">Gecko desc</option>
                    <option className="bg-green-600" value="gecko_asc">Gecko asc</option>
                    <option className="bg-green-600" value="market_cap_asc">Market cap asc</option>
                    <option className="bg-green-600" value="volume_asc">Volume asc</option>
                    <option className="bg-green-600" value="volume_desc">Volume des</option>
                    <option className="bg-green-600" value="id_asc">Id asc</option>
                    <option className="bg-green-600" value="id_desc">Id desc</option>
                </select>
                </label> 
        </div>
        

       
            <div className="flex items-center justify-between mt-4 capitalize h-[2rem] flex-col">
            <span className="mb-2">by <a className="text-blue" href="https://www.coingecko.com" rel="noreferrer" target={"_blank"}>coingecko </a></span>
                  <Pagenum/>
                
            </div>
     
        
   
    </>
  )
}

export default Tablecomp

