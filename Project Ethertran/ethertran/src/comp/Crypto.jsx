import React from 'react'
import Tablecomp from './table/Tablecomp';
import Filter from './table/Filter';
import { Outlet } from 'react-router-dom'

const Cryto = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-8 mb-8 relative items-center " > 
 
    <Filter/>
    <Tablecomp/>
    <Outlet/>
    </section>
  )
}

export default Cryto