import { useState, useLayoutEffect } from 'react';
import { createContext} from 'react'

export const TrendContext = createContext({});

//prodiver
export const TrendProv = ({ children}) => {
  
    const [trendData, settrendData] = useState()


    const gettrendData = async () => {  
        settrendData()      
        const coing = await fetch(`https://api.coingecko.com/api/v3/search/trending`).then((res) => res.json()).then((json) => json);
        settrendData(coing.coins)

      
    }

    const cleartrendsrch = async () => {
        gettrendData();

    }

    


    useLayoutEffect(() => {
        gettrendData()
    }, [])

    return(
        <TrendContext.Provider value={{ trendData,cleartrendsrch}}>
            {children}
        </TrendContext.Provider>
    )
}