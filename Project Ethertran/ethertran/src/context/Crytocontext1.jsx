import { useState, useLayoutEffect } from 'react';
import { createContext} from 'react'

export const CrytoContext = createContext({});

//prodiver
export const CrytoProv = ({ children}) => {
  
    const [crytoData, setcrytoData] = useState()
    const [searchdata, setsearchdata] = useState()
    const [coinsrch, setcoinsrch] = useState("")
    const [currency, setcurrency] = useState("usd")
    const [sortby, setsort] = useState("market_cap_desc")
    const [page, setpage] = useState(1)
    const [Tpage, setTpage] = useState(250)
    const [perpage, setperpage] = useState(10)
    const [coindetails, setcoindetails] = useState()
    




    // fetch data from coingecko
    const getdata = async () => {
   
            setcrytoData();
        const coingecko = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinsrch}&order=${sortby}&per_page=${perpage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`).then((res) => res.json()).then((json) => json);
        setcrytoData(coingecko)
            
                                       //https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinsrch}&order=${sortby}&per_page=${perpage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d
    }

    const getsearchdata = async (query) => {
        const coingeckosearch = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then((res) => res.json()).then((json) => json);
        setsearchdata(coingeckosearch.coins)
    }

    const getcoindata = async (coinid) => {
        setcoindetails()
        const coindetails = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`).then((res) => res.json()).then((json) => json);
        setcoindetails(coindetails)
    }

    const clearsrch = async () => {
        setpage(1);
        setcoinsrch("");
    }

    


    useLayoutEffect(() => {
        getdata()
  

    }, [coinsrch,currency,sortby,page,perpage])

    return(
        <CrytoContext.Provider value={{getcoindata,setcoindetails,coindetails,clearsrch,perpage, setperpage, Tpage,crytoData,sortby,page, setpage, setsort, currency, setcurrency, coinsrch,searchdata,getsearchdata,setcoinsrch,setsearchdata}}>
            {children}
        </CrytoContext.Provider>
    )
}