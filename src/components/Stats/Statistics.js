import React, { useState } from 'react'
import BallingStats from './BallingStats'
import BattingStats from './BattingStats'
const Statistics = () => {
    const [type,setType] = useState("batting")
  return (
    <div className='w-[100%]  h-[60%] flex flex-col  justify-between overflow-y-scroll  scrollable-content custom-scrollbar gap-[1rem] '>
      <div className='w-[16%]  h-[2rem] flex justify-between'>
        <button className={`${type === "batting" ? "text-[#FF730D]" : "text-white"}`} onClick={()=>setType("batting")}>Batting stats</button>
        <button className={`${type === "balling" ? "text-[#FF730D]" : "text-white"}`} onClick={()=>setType("balling")}>Balling stats</button>
      </div>
      {
        type === "batting" && <BattingStats/>
      }
      {
        type === "balling" && <BallingStats/>
      }
    </div>
  )
}

export default Statistics
