import React,{ useContext }from 'react'
import { CrytoContext } from "../context/Crytocontext1";
import { SaveContext } from "../context/SaveContext";
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRefreshCircle } from "react-icons/io";

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







const Favcoin = () => {
  const {saved,clearrest,acoin} = useContext(SaveContext);
  const {currency,cleartrendsrch} = useContext(CrytoContext);


  return (
    <section className="w-[80%] items-center min-h-[60vh] flex flex-col mt-16 mb-24 relative" > 
    <div className="flex  flex-col mt-2 bg-gray-700 bg-opacity-50 rounded w-full md:w-[80%] xl:w-[70%] 2xl:w-[50%]">
      
      {
      saved && acoin.length > 0 ? 
        
      (<table className="w-full table-auto">
      <thead  className="capitalize text-base text-blue-400 font-medium border-b border-slate-500">
          <tr>
              <th className=""></th>
              <th className="py-1 ">name</th>
              <th className="py-1">Price</th>
              <th className="py-1 lg:table-cell hidden">market cap </th>
              <th className="py-1 lg:table-cell hidden" >1H</th>
              <th className="py-1 lg:table-cell hidden">24H</th>
              <th className="py-1 lg:table-cell hidden">7D</th>
  
          </tr>
   </thead>
  <tbody >
     {
         saved.map(data => {
              return (
              <tr key={data.id} className="text-center text-base hover:bg-gray-500 hover:bg-opacity-20">
                 <td className="border-r">
                                <Savebutton data={data}/>
                                </td>

                                <td className=" py-4 rounded hover:bg-blue-500 hover:bg-opacity-20 active:bg-green-300  flex items-center justify-center uppercase">
                                <Link to={`${data.id}`} className="cursor-pointer capitalize hover:text-white  active:text-blue-600">
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
        
        (<h1 className="min-h-[40vh] text-white text-center items-center justify-center flex">No coin added .....</h1>)
      
      }
    


    </div>
    <button className="w-[2rem] mr-4 hover:scale-110  absolute -top-10" onClick={clearrest}>
          <IoIosRefreshCircle className="w-full h-full hover:fill-blue-400 fill-red-400 active:fill-green-400 " >
							
					</IoIosRefreshCircle>
      </button>
    <Outlet/>
    </section>
  )
}

export default Favcoin