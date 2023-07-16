import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

 //start new contacts
const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log(transactionsContract);

  return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: "", message: "" }); // get the datafrom home
  const [currentAccount, setCurrentAccount] = useState(""); // check accounts
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [ether, setether] = useState(0)

  

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


    //pull all transactions back
  const getAllTransactions = async () => {
    
      if (ethereum) {
        const transactionsContract = createEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }

  };
      //check if user install metamask
  const checkIfuserhavemetamask = async () => {
  
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
       

        getAllTransactions();
        
        console.log(accounts);
      } else {
        console.log("No accounts found");
      }

  };


  const checkIfTransactionsExists = async () => {
   
      if (ethereum) {
        const transactionsContract = createEthereumContract();
        const currentTransactionCount = await transactionsContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);

        const provider = await new ethers.providers.Web3Provider(ethereum);
        provider.send("eth_requestAccounts");
        const signer = provider.getSigner();
        let ether;
        ether = await signer.getBalance();
        ether = ethers.utils.formatEther(ether,10);
        setether(ether);
        console.log(ether)
      }else {
        console.log("No accounts found");
      }

  };






  // connect to metamask
  const connecttoWallet = async () => {


      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      setCurrentAccount(accounts[0]);

      window.location.reload()
      
  };

  const removeStoreage = async () => {


    const rem = window.localStorage.clear("transactionCount");
    window.localStorage.setItem("transactionCount", currentTransactionCount);
    setTransactionCount(rem)
    setTransactions([])


    
};

    //pass the data from home to BC
  const sendTransaction = async () => {
   
      if (ethereum) {
        const { addressTo, amount, message } = formData;
        const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount); //con to hex gwei unit

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // con to dic then to gwei
            value: parsedAmount._hex,
          }],
        });
        

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message);
        //loading call for hash
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);
     

        const transactionsCount = await transactionsContract.getTransactionCount(); //count transactions

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    
  };

  



    //call 
  useEffect(() => {
    checkIfuserhavemetamask();
    checkIfTransactionsExists();

  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{ transactionCount, connecttoWallet,removeStoreage, transactions, currentAccount, isLoading, sendTransaction, handleChange, formData, ether
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};