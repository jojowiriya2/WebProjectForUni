import React from 'react'
import {NavLink} from 'react-router-dom'

const Chidnavi = () => {
  return (
    
    <nav className="w-[85%] xl:w-[57%] 2xl:w-[41%]  md:w-[65%] mt-16 flex justify-around align-middle border-none rounded-lg">
       
        <NavLink to="/" end className={({ isActive }) => {
          return `w-full text-base text-center m-2.5 ${
          isActive ? "bg-blue-500 text-white hover:text-red-500 shadow-xl shadow-green-400/50 " : "bg-red-400  text-white hover:bg-blue-500 hover:text-red-500 active:bg-green-300 active:text-blue-600"
          }
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}>
            Coin
        </NavLink>
        <NavLink to="/Trending" className={({ isActive }) => {
          return `w-full text-base text-center m-2.5  ${
          isActive ? "bg-blue-500 text-white hover:text-red-500 shadow-xl shadow-green-400/50 " : "bg-red-400 text-white hover:bg-blue-500 hover:text-red-500 active:bg-green-300 active:text-blue-600"
          }
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}>
            Trending
        </NavLink>
        <NavLink to="/Favcoin" className={({ isActive }) => {
          return `w-full text-base text-center m-2.5 ${
          isActive ? "bg-blue-500 text-white hover:text-red-500 shadow-xl shadow-green-400/50 " : "bg-red-400 text-white hover:bg-blue-500 hover:text-red-500 active:bg-green-300 active:text-blue-600"
          }
            border-0 cursor-pointer rounded capitalize font-semibold`;
        }}>
            Favorite
        </NavLink>
    </nav>
    
  )
}

export default Chidnavi