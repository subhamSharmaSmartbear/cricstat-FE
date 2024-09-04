import React, { useState } from 'react'
import mi from "../assets/mi.svg"
import Squad from '../components/Teams/Squad';
import Matches from '../components/Matches/Matches';
import Statistics from '../components/Stats/Statistics';
import Tournaments from '../components/Tournaments/Tournaments';
import ManageTeamModal from '../components/Modal/ManageTeamModal';

import { Link } from 'react-router-dom';
const Team = () => {

  const [type,setType] = useState("squad");
  const [manageTeamModal, setManageTeamModal] = useState("false");

  return (
    <div
      className={` w-[100%]  h-[100%]  flex flex-col items-center gap-[1rem] overflow-y-hidden bg-black rounded-[10px] p-[2rem]`}
    >
      {/* <div className='w-[100%] text-[18px] font-medium h-[10%] text-white flex items-center justify-between'>
        <Link className='px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]' to={"/matches"}>Back</Link>
        <button className='px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]' onClick={()=>setManageTeamModal("true")}>Manage Team</button>
      </div> */}
      <div className='w-[100%]  h-[20%] flex justify-between gap-[1rem]'>
        <div className='w-[20%] h-[100%] '>
          <img src={mi} className='w-[100%] h-[100%]' alt='team_logo'/>
        </div>
        <div className='w-[60%] h-[100%]  flex flex-col'>
          <span className='text-white text-[32px] font-bold truncate'>Mumbai Indians</span>
          <span className='font-extralight text-white'>Total Matches Played : 23</span>
          <span className='font-extralight text-white'>Total Matches Won : 20</span>
        </div>
        <div className='w-[20%] h-[100%]  font-extralight text-white flex flex-col'>
         <span>Coach : Mark Boucher</span>
         <span>Captain : Hardik Pandya</span>
        </div>
      </div>
      <div className='w-[90%] h-[0.3rem]  bg-[#434343] rounded-[10px]'></div>
      <div className='w-[60%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around'>
        <button onClick={()=>setType("squad")} className={`${type === "squad" && "text-[#FF730D]"}`}>Squad</button>
        <button onClick={()=>setType("matches")} className={`${type === "matches" && "text-[#FF730D]"}`}>Matches</button>
        <button onClick={()=>setType("tournaments")} className={`${type === "tournaments" && "text-[#FF730D]"}`}>Tournaments</button>
        <button onClick={()=>setType("statistics")} className={`${type === "statistics" && "text-[#FF730D]"}`}>Statistics</button>
      </div>
      {
        type === "squad" && <Squad/>
      }
      {
        type === "matches" && <Matches/>
      }
      {
        type === "tournaments" && <Tournaments/>
      }
      {
        type === "statistics" && <Statistics/>
      }
      {manageTeamModal === "true" && (
        <ManageTeamModal setManageTeamModal={setManageTeamModal}/>
      )}
    </div>
  )
}

export default Team
