import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {shortenAddress} from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, amount}) => {
  return (
    <div  className="bg-[#3123a798] m-3 flex break-all
      2xl:max-w-[500px]
      sm:min-w-[200px]
      sm:max-w-[300px]
      min-w-max
       p-2 rounded-md hover:shadow-2xl" 
    >
      <div className="flex flex-col items-center break-all w-[100%] mt-1 " >
        <div className="display-flex justify-center w-100 mb-5 break-all p-2 text-start items-center">
          <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <p className="text-white text-sm break-all  ">Message: {message}</p>
            </>
          )}
        </div>
        
        <div className="bg-slate-800 p-3 px-5 w-100 rounded-3xl -mt-5  shadow-xl">
          <p className="text-[#67ff41] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    // bg and content and account
    <div className="flex w-100 justify-center items-center 2xl:px-20 " id="transaction">
      <div className="flex flex-col md:p-12 py-12 px-4">    
        {currentAccount ? (
          <>
          <h3 className="text-white text-5xl sm:text-1xl py-2 text-logo text-center">
            Latest Transactions
          </h3>
         
          </>
        ) : (
          <h3 className="text-white text-3xl text-center my-2 text-logo">
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10  " >
          {transactions.slice(-16).reverse().map((transaction, i) => (<TransactionsCard key={i} {...transaction} />))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
