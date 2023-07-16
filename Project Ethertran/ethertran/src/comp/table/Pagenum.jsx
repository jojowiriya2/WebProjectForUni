import React,{useContext, useRef} from 'react'
import { CrytoContext } from "../../context/Crytocontext1";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Pagenum = () => {


    let {page, setpage,perpage, crytoData} = useContext(CrytoContext)

    const TotalNumber = 101;

   
    const Perpage = () =>{
        const { setperpage } = useContext(CrytoContext);
        const inputRef = useRef(null);
      
        const handleSubmitc = (e) => {
          e.preventDefault();
          let val = inputRef.current.value;
          if (val !== 0) {
            setperpage(val);
            inputRef.current.value = val;
          }
        };
        return(
            <form className="relative flex items-center mr-2" onSubmit={handleSubmitc}>
      <label htmlFor="perpage" className="relative flex justify-center items-center mr-2 font-bold">
        perpage:{" "}
      </label>
      <input type="number" name="perpage" min={1} max={250} ref={inputRef} placeholder="10" className="h-7 w-16 rounded required ourline-0 border border-transparent focus:border-blue-500 bg-green-500 bg-opacity-30"/>
    </form>
        )
    }

    const next = () => {
        if (page === TotalNumber) {
          return null;
        } else {
            setpage(page + 1);
        }
      };
    
      const prev = () => {
        if (page === 1) {
          return null;
        } else {
            setpage(page - 1);
        }
      };
    
      const multiNext = () => {
        if (page + 3 >= TotalNumber) {
            setpage(TotalNumber - 1);
        } else {
            setpage(page + 3);
        }
      };
    
      const multiPrev = () => {
        if (page === 1) {
          return null;
        } else {
            setpage(page - 3);
        }
      };
    
      if(crytoData && crytoData.length >= perpage){

        return (
    
            <div className="flex items-center">
                <Perpage />
                <ul className="items-center justify-end text-xs  hidden md:flex">
                    <li className="flex items-center">
                        <button onClick={multiPrev} className=" outline-0 hover:bg-green-400   rounded-full">
                        <IoIosArrowDropleftCircle className="w-8 h-auto fill-blue-600 " />
                            
                        </button>
                    </li>
        
                        
                        {
                            page-1 !== 0 ?
                            <li>{""}<button onClick={prev}  className="outline-0  hover:bg-blue-500 rounded-full w-7 h-7  items-center justify-center text-base bg-gray-600 mx-1.5">{page - 1}</button></li>
                        : null
                        }
                    
                    <li><button disable="true" className="outline-0 rounded-full w-7 h-7 flex items-center justify-center text-base bg-blue-500  mx-1.5">{page}</button></li>
                   
                        
                        {
                            page+1 !== TotalNumber && page !== TotalNumber ?
                            <li>{""}<button onClick={next} className="outline-0 hover:bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center text-base bg-gray-600 mx-1.5">{page + 1}</button></li>
                        : null
                        }
                        
                   
                    <li>
                    <button onClick={multiNext} className=" outline-0 hover:bg-green-400 w-8 flex  rounded-full">
                            <IoIosArrowDroprightCircle className="w-8 h-auto fill-blue-600 " />
                        </button>
                    </li>
        
                </ul>
            </div>
          )
      }else{
        return null
      }

  
}

export default Pagenum