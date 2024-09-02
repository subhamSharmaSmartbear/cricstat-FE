import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import rohit from "../assets/rohitSharma.svg"
import PlayerBallingTable from '../components/Stats/PlayerBallingTable';
import PlayerBattingTable from '../components/Stats/PlayerBattingTable';
const Player = () => {
  const [type, setType] = useState("bowling");
  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden py-[3rem]`}
      >
        
        <div className="w-[100%]  h-[20%] flex justify-between gap-[1rem] ">
          <div className="w-[20%] h-[100%] ">
            <img src={rohit} className="w-[100%] h-[100%]" alt="team_logo" />
          </div>
          <div className="w-[60%] h-[100%]  flex flex-col">
            <span className=" text-white font-bold  text-[22px]">
              Batter
            </span>
            <span className="text-white text-[32px] font-bold truncate">
              Rohit Sharma
            </span>
            <span className="font-extralight text-white">Team : Mumbai Indians</span>
          </div>
          <div className="w-[20%] h-[100%]  font-extralight text-white flex flex-col  items-start gap-[1rem]">
            <span className="font-bold">Total Matches Played : 20</span>
            
          </div>
        </div>
        <div className="h-[0.4%] w-[90%]  bg-[#434343] "></div>
        <div className="w-[30%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
          <button
            onClick={() => setType("batting")}
            className={`${type === "batting" && "text-[#FF730D]"}`}
          >
            Batting
          </button>
          <button
            onClick={() => setType("bowling")}
            className={`${type === "bowling" && "text-[#FF730D]"}`}
          >
            Bowling
          </button>
          
        </div>
        {type === "bowling" && <PlayerBallingTable />}
        {type === "batting" && <PlayerBattingTable />}
       
      </div>
    </div>
  );
}

export default Player
