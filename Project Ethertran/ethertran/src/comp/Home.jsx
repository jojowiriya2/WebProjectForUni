import React, { useContext,useEffect,useState  } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader} from './';
import Web3 from "../../images/Web3.png";
import eth from "../../images/eth.png";
import bcio from "../../images/bcio.png";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress,shortenETH, shortenUSD } from "../utils/shortenAddress";
import { GetUSDExchangeRate, GetETHExchangeRate } from "../utils/exchangeApi";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const Input = ({ placeholder, name, type, value, handleChange,maxlength}) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      maxlength = {maxlength}
      className="my-2 w-full rounded-sm p-2 outline-none border border-indigo-800 bg-transparent text-white text-sm inputholder placeholder-white focus:ring-blue-500 focus:border-blue-500"
    />
  );


  const companyCommonStyles = "min-h-[x] sm:px-0 px-1 sm:min-w-[120px] flex justify-center items-center  text-sm font-light text-white";

    const Home = () => {

        const {ether,connecttoWallet, currentAccount, formData, sendTransaction, handleChange,isLoading } = useContext(TransactionContext);

        const handleSubmit  = (e) => {
        const {addressTo, amount, message} = formData; 
            e.preventDefault();
        if(!addressTo || !amount || !message) return; // dont send
            sendTransaction();
         }

         const [usdPrice, setUsdPrice] = useState("0");
         const [usdExRate, setUsdExRate] = useState("0");
         const [ethExRate, setEthExRate] = useState("0");

    useEffect(() => {
        GetUSDExchangeRate().then((res) => {
            setUsdExRate(parseFloat(res));
        });
        GetETHExchangeRate().then((res) => {
            setEthExRate(parseFloat(res));
        });
        }, []);

    const handlePriceUSD = (event) => {
        let itemPrice = parseFloat(event.target.value);
        if (usdPrice == null){
            itemPrice = "0";
            setUsdPrice(itemPrice);
        }
        setUsdPrice(itemPrice);
      };
    return ( 
        
  
        <div  className="flex w-full justify-center items-center" id="Home">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            { !currentAccount && (
                
                <div className="flex flex-1 justify-start items-center flex-col ">

                    <h1  id="/Home" className="text-5xl sm:text-8xl text-white py-1 text-center text-logo m-4 ">
                        EtherTran 
                    </h1>

                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 text-center my-2">
                        Fast and Safe <br  />way to send ethereum
                    </h1>

                    {!currentAccount && (
                        <button
                        type="button"
                        onClick={connecttoWallet}
                        className="flex flex-row justify-center items-center my-1 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] active:bg-green-700"
                        >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white  font-semibold">
                            Connect Wallet
                        </p>
                        </button>
                    )}

                    <p className="mt-4 text-white font-2 md:w-9/12 w-11/12 text-base text-center my-5" >
                        Explore the Ethereum world. send cyptocurrencies easily on Ethertran with MetaMask
                    </p>
                   
                    <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-1 items-center">
                        <div className={companyCommonStyles}>
                            <img src={Web3} alt="web3" data-aos="zoom-out-down" data-aos-duration="1000" className="w-32  cursor-pointer p-3 items-center"  />
                        </div>
                       
                        <div className={companyCommonStyles}>
                            <img src={eth} alt="eth"  data-aos="zoom-out-down" data-aos-duration="1500"  className="w-32 cursor-pointer p-3 items-center" />
                        </div>
                       
                        <div className={companyCommonStyles}>
                            <img src={bcio} alt="bcio" data-aos="zoom-out-down" data-aos-duration="2000"  className="w-32 cursor-pointer p-3 items-center" />
                        </div>
                    </div>
                   

                    

                </div>
            )}


            { currentAccount && (
                            
                <div className="flex mf:flex-row flex-row items-center justify-center md:p-20 py-12 px-1"  >
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-80 my-5 card " >
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-center">
                                <div className="w-20 h-20 rounded-full border-2 text-logo2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={70} color="white" />
                                </div>
                                
                                
                            </div>
                            <p className="text-white font-semibold text-center text-lg mt-1">
                                    Ethereum
                                </p>

                            <div className=" text-end justify-between flex  bg-slate-600 bg-opacity-50 p-1">
                                <div className="flex text-white text-base">
                                    ID: &nbsp;
                                <p className="text-green-400  text-base">
                                     {shortenAddress(currentAccount)} 
                                </p>
                                </div>

                                <div className="flex text-white text-base">
                                    ETH: &nbsp;
                                <p className="text-green-400  text-base">
                                     {shortenETH(ether)} 
                                </p>
                                </div>

                                <div className="flex text-white text-base">
                                    USD: &nbsp;
                                <p className="text-green-400  text-base">
                                {shortenUSD(ether * usdExRate)} 
                                </p>
                                </div>


                                

                            </div>

                            <div className="bg-blue-800 bg-opacity-60 rounded p-2 m-2 flex justify-between flex-col ">
                               <div className=" justify-between items-center text-center flex   " >
                               
                               <div className="text-start ">
                               <input className="min-h-[15%] w-[80%] bg-green-50 border border-green-500 
                               text-green-400 placeholder-green-700  text-sm 
                               rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5
                               dark:bg-gray-700  placeholder:text-xs " placeholder="USD TO ETH" name="amount" type="number" onChange={handlePriceUSD} />
                               </div>

                               <p className=" text-xl text-white justify-start items-start text-start italic ml-"> {shortenETH(ethExRate * usdPrice)}ETH </p>
                               
                               </div>
                               <span className=" text-xs text-white text-center ">by <a className="text-blue" href="https://www.coingecko.com" rel="noreferrer" target={"_blank"}>coingecko </a></span>

                               </div>
                          
                        </div>

                        
                        
                    </div>


                    
                </div>

                

                
            )}

            { currentAccount && (

                
                <div className="flex  flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10" >
                   
                   

                   <div className="sm:w-96 m-2 input-glassmorphism" data-aos="fade-right" data-aos-duration="2000" data-aos-offset="100">
                       <div className="form sm:w-100 grid grid-cols-1 gap-1 m-3  p-5 items-center" >
                           
                               
                           
                               <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                               <Input  placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                           <div className="col-span-1 text-end">
                           <p className=" text-xs text-red-500 italic">fee = 21,000 Gwei or around 0.000021Eth </p>
                       </div>
                       
                       <Input placeholder="Enter Message" maxlength="30" name="message" type="text" handleChange={handleChange} />
               
                       <div className="h-[1px] w-full bg-gray-400 my-2" />
                       

                           {currentAccount && (<div className="w-full">
                               {isLoading ? (<Loader/>) : (
                         
                                   <button
                                       type="button"
                                       onClick={handleSubmit}
                                       className="text-white w-full mt-2 border-[1px] p-2 border-[#fbfcff] hover:bg-[#7815bb] rounded-full cursor-pointer">
                                       Send now
                                   </button>
                               )}
                           </div>)}
                  
                       </div>

                    
                       
                   </div>

               </div>
            )} 
            </div>
        
        
            
        </div>



        );
    };

export default Home;