import { useState, useLayoutEffect,useContext, useEffect } from 'react';
import { createContext} from 'react'
import { CrytoContext } from "./Crytocontext1";

export const SaveContext = createContext({});

//prodiver
export const SaveProv = ({ children}) => {
  

    const [acoin, setacoin] = useState([])
    const [saved, setsaved] = useState()

    let {currency, sortby} = useContext(CrytoContext)

    const savecoin = (coinId) => {        
        let oldcoin = JSON.parse(localStorage.getItem("coins"));
        if(oldcoin.includes(coinId)){
            return null;
        }else{
            let newcoin = [...oldcoin, coinId];
            setacoin(newcoin);
            localStorage.setItem("coins", JSON.stringify(newcoin));
        }
      
    }

    const removecoin = (coinId) =>{
        let oldcoin = JSON.parse(localStorage.getItem("coins"));
        let newcoin = oldcoin.filter((coin) => coin !== coinId);
        setacoin(newcoin)
        localStorage.setItem("coins", JSON.stringify(newcoin));


    }

    const getsavedata = async (tocoin = acoin) => {

            const data = await fetch(
              `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${tocoin.join(
                ","
              )}&order=${sortby}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
            )
              .then((res) => res.json())
              .then((json) => json);

            setsaved(data);

    }

    const clearrest = async () => {
        getsavedata();
    }


    useEffect(() => {
        if (acoin.length > 0) {
            getsavedata(acoin);
          } else {
            getsavedata();
          }
    }, [acoin])
    
    


    useLayoutEffect(() => {
        let iscoin = JSON.parse(localStorage.getItem("coins")) || false;
        if(!iscoin){
            localStorage.setItem("coins", JSON.stringify([]));

        }else{
            let tocoin = JSON.parse(localStorage.getItem("coins"));
            setacoin(tocoin);

      if (tocoin.length > 0) {
        getsavedata(tocoin);
      }
        }
    }, [])

    return(
        <SaveContext.Provider value={{savecoin,acoin,removecoin, saved, clearrest}}>
            {children}
        </SaveContext.Provider>
    )
}