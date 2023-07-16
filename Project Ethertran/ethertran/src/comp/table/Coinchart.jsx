import React, {useLayoutEffect, useState, useContext} from 'react'
import { LineChart, Line,XAxis,YAxis, Tooltip,CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { CrytoContext } from "../../context/Crytocontext1";


    const RenderLineChart = ({data,currency, type}) => {
        return(
            <ResponsiveContainer height={400} >
            <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey={type} stroke="#5DA7DB" strokeWidth="2px" />
            <CartesianGrid stroke="#5DA7DB" strokeDasharray="5 5" />
            <XAxis dataKey="date" hide/>
            <YAxis dataKey={type} hide domain={["auto","auto"]}/>
            <Tooltip content={<CustomTooltip />} currency={currency} cursor={false}/>
            <Legend/>
            </LineChart>
            </ResponsiveContainer>
     
        )
        
    };

    function CustomTooltip({ payload, label, active, currency = "usd" }) {
        if (active && payload && payload.length>0) {
          return (
            <div className="custom-tooltip">
              <p className="label border rounded bg-gray-600  mx-2 px-2 text-sm text-white">{`${label} : ${new Intl.NumberFormat("en-US",{ style: "currency", currency: currency, minimumFractionDigits: 5 }).format(payload[0].value)}`}</p>
            </div>
          );
        }}




const Coinchart = ({id}) => {
    const [chart, setchart] = useState()
    let {currency} = useContext(CrytoContext)   
    const [type, settype] = useState("prices")
    const [day, setday] = useState(7)

    useLayoutEffect(() => {
        const getchart = async (id) => {
   
                const cgch = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}&interval=daily`).then((res) => res.json()).then((json) => json);
                let con = cgch[type].map(it => 
                    {return{ date: new Date(it[0]).toLocaleDateString(),
                            [type]: it[1],}})
                console.log(con);
                setchart(con)
        
        }
        getchart(id)
    }, [id,type,day])





  return (
    <div>
        <div className="w-auto md:w-[100%] h-[auto] md:h-[60%]">
                <RenderLineChart data={chart} currency={currency} type={type}/>
                <div className="flex item-center justify-center">
                    <button className={`text-sm py-0.5 px-1.5 ml-2 rounded-lg bg-opacity-25 ${type == "prices" ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => settype("prices")}>Price</button>
                    <button className={`text-sm py-0.5 px-1.5 ml-2 hidden xl:flex rounded-lg bg-opacity-25 ${type == "market_caps" ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => settype("market_caps")}>Market caps</button>
                    <button className={`text-sm py-0.5 px-1.5 ml-2 hidden xl:flex rounded-lg bg-opacity-25 ${type == "total_volumes" ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => settype("total_volumes")}>Total vol</button>

                    <button className={`text-sm py-0.5 px-1.5 ml-2 rounded-lg bg-opacity-25 ${day == 7 ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => setday(7)}>7d</button>
                    <button className={`text-sm py-0.5 px-1.5 ml-2 rounded-lg bg-opacity-25 ${day == 14 ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => setday(14)}>14d</button>
                    <button className={`text-sm py-0.5 px-1.5 ml-2 rounded-lg bg-opacity-25 ${day == 30 ? 'bg-cyan-500 text-gray-300': 'bg-gray-500 text-cyan-500' }`} onClick={() => setday(30)}>30d</button>

                </div>
                
        <div className="flex">
           
            </div>
        </div>

        </div>
     
  )
}

export default Coinchart