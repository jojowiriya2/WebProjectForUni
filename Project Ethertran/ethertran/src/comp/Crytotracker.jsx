import React from 'react'
import { Outlet } from 'react-router-dom'
import { Chidnavi } from '../comp/index'
import { CrytoProv } from "../context/Crytocontext1";
import { TrendProv } from "../context/TrendContext";
import { SaveProv } from "../context/SaveContext";
const Crytotracker = () => {
  return (
    <CrytoProv>
      <TrendProv>
        <SaveProv>
      <main id="Tracker" className=" w-full h-full flex flex-col first-letter:content-center items-center relative text-white">
      <div className="w-screen h-screen fixed -z-10"/>
      <Chidnavi/>
      <Outlet/>
      </main>
      </SaveProv>
      </TrendProv>

    </CrytoProv>

    
  )
}

export default Crytotracker