import React,{ useContext, useRef} from 'react'
import Search from '../table/Search';
import { CrytoContext } from "../../context/Crytocontext1";
import { IoIosRefreshCircle } from "react-icons/io";


const Filter = () => {

    let { setcurrency,setsort,clearsrch} = useContext(CrytoContext);


    
    const handleCurrency = (e) => { 
        let con = e.target.value
 
          e.preventDefault();  
          
          setcurrency(con);
    }


  return (


    <div  className="w-[100%] h-18 md:w-[80%] xl:w-[70%] 2xl:w-[50%]  xl:h-12 md:h-12  grid grid-col-3 grid-flow-col bg-slate-600 bg-opacity-30  rounded-lg md:flex  xl:flex-row md:flex-row  items-center justify-between relative">
        <Search/>

        <div className=" flex relative m-2 pl-4 md:pl-20 xl:m-0 md:w-12 xl:w-12 ">
       
          <select onClick={handleCurrency} name="sortby" className=" h-7  rounded  bg-green-600 bg-opacity-40 py-0.5" >
              <option className="bg-green-600" value="usd">USD</option>
              <option className="bg-green-600" value="thb">THB</option>
              <option className="bg-green-600" value="cad">CAD</option>
              <option className="bg-green-600" value="eur">EUR</option>
              <option className="bg-green-600" value="nzd">NZD</option>
              <option className="bg-green-600" value="php">PHP</option>
              <option className="bg-green-600" value="rub">RUB</option>
              <option className="bg-green-600" value="sgd">SGD</option>
              <option className="bg-green-600" value="zar">ZAR</option>
              <option className="bg-green-600" value="cny">CNY</option>
              <option className="bg-green-600" value="hkd">HKD</option>
              <option className="bg-green-600" value="idr">IDR</option>
              <option className="bg-green-600" value="inr">INR</option>
              <option className="bg-green-600" value="krw">KRW</option>
              <option className="bg-green-600" value="myr">MYR</option>
              <option className="bg-green-600" value="sek">SEK</option>

          </select>
        </div>
        
                <button className="w-[2rem] mr-5 hover:scale-110  relative" onClick={clearsrch}>
                     <IoIosRefreshCircle className="w-full h-full hover:fill-blue-400 fill-red-400 active:fill-green-400 ">
							
					</IoIosRefreshCircle>
                </button>

        
    </div>
  )
}

export default Filter

//<button type="submit" className="h-7 right-64 bg-slate-600 border rounded-lg w-16 hover:bg-cyan-400 absolute cursor:pointer">submit</button>