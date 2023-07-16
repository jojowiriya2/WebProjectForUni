import React,{useState, useContext} from 'react'
import { CrytoContext } from "../../context/Crytocontext1";
import { IoSearchCircle } from "react-icons/io5";

const SearchInput  = ({handleSearch}) => {

    const [TextSearch, setTextSearch] = useState("")
  let{searchdata, setcoinsrch, setsearchdata} = useContext(CrytoContext)

    
    let handleInput = (e) => {
        e.preventDefault();
        let query = e.target.value
        setTextSearch(query);
        handleSearch(query);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(TextSearch);
    }


    const selectedCoin = (coin) => {
        setcoinsrch(coin);
        setTextSearch("");
        setsearchdata();

    }

    return (
        <div className="m-2 w-20 md:w-20 xl:w-20  ">
        <form className="w-60 relative flex items-cente ml-0 lg:ml-7 md:ml-5 " onSubmit={handleSubmit}>
            <input onChange={handleInput} value={TextSearch} className="w-[45%] md:w-full h-7 rounded-lg bg-green-600 bg-opacity-40 pl-2 required outline-0 border-transparent focus:border-blue-500 border" type="text" name="search" placeholder="Search here..."/>

        </form>
            {
                TextSearch.length > 0 ? 
                    <ul className="overflow-hidden absolute z-10 w-28 h-24 md:w-[250%] md:top-9 md:left-7 xl:left-9  rounded overflow-x-hidden py-0 bg-blue-700 bg-opacity-60 backdrop-blur-md">
                        {
                            searchdata ?

                            searchdata.map(coin => {return <li key={coin.id} onClick={() => selectedCoin(coin.id)} className="flex items-center ml-4 my-2 cursor-pointer">
                                <img className=" w-[0rem] h-[0rem] mx-0.5 md:w-[1rem] md:h-[1rem] md:mx-1.5" src={coin.thumb} alt={coin.name}/>
                                <span className="text-xs md:text-base">{coin.name}</span>
                                </li>})
                                
                            : <div className="w-full h-full flex justify-center items-center">
                                <div role="status" className=" animate-spin w-8 h-8 border-4 rounded-full border-cyan-500 border-b-gray-500"/>
                                seach
                            </div>
                        }
                    </ul>
            : null
             }
        </div>

    )

}

const Search = () => {
    let{getsearchdata} = useContext(CrytoContext)




  return (
  <div className="relative">
    <SearchInput handleSearch={getsearchdata}/>
    
  </div>
  )
}

export default Search