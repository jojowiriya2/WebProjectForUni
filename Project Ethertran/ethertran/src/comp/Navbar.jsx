import React, { useContext} from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../images/4bg.png";

  const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
      
    return (
      <BrowserRouter>
      <nav  className="w-full flex md:justify-center justify-between items-center navbar-bg "  >
        <div className="md:flex-[0.5] m-2 flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-9 cursor-pointer m-2 hidden md:flex " />
          <div className="flex reactive">
          {!toggleMenu && (
            <HiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <>
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(false)} />
            <ul
              className=" fixed top-12 -left-0.5 p-0 w-screen h-50 shadow-2xl  md:hidden text-3xl
              flex flex-col justify-start items-center  bg-black text-white animate-slide-in  "
            >

              {[  
                  <Link to='#Home' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5"><p onClick={() => setToggleMenu(false)}>Home</p></Link>,
                  <Link to='#Tracker' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5"><p onClick={() => setToggleMenu(false)}>Tracker</p></Link>,
                  <Link to='#transaction' smooth className="m-2 border border-none bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5" ><p onClick={() => setToggleMenu(false)}>Transaction</p></Link>, 
                  <Link to='#News' smooth className="m-2 border border-none bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5"><p onClick={() => setToggleMenu(false)}>News</p></Link>,
                  <Link to='#Tutorial' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5"><p onClick={() => setToggleMenu(false)}>Tutorial</p></Link>,
                  
                  
                ]}
              
            </ul>
            </>
          )}
        </div>
        </div>
        
        <img src={logo} alt="logo" className="w-9 cursor-pointer m-2  md:hidden " />
        <ul className=" md:flex hidden list-none flex-row justify-between items-center flex-top ">
          <li>
          <Link to='#Home' smooth  className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5">
              Home
            </Link>

            <Link to='#Tracker' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5">
            Tracker
            </Link>

            
            <Link to='#transaction' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5">
              Transaction
            </Link>

            <Link to='#News' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5">
              News
            </Link>

            <Link to='#Tutorial' smooth className="m-2 border border-none  bg-opacity-40  rounded text-white hover:bg-blue-600 hover:text-white active:bg-green-700 text-lg order mx-4 py-1 px-5">
              Tutorial
            </Link>
   
          </li>
        </ul>

        
      </nav>
      </BrowserRouter>
    );
  };
export default Navbar;