import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import mi from "../assets/mi.svg";
import ipl from "../assets/ipl.png";
import Inings from "../components/Inings";
const Match = () => {
  const [type, setType] = useState("1st");
  const [manageTeamModal, setManageTeamModal] = useState("false");
  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%]  flex flex-col items-center gap-[1rem] overflow-y-hidden`}
      >
        <div className="w-[100%] text-[18px] font-medium h-[10%] text-white flex items-center justify-between">
          <Link
            className="px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]"
            to={"/matches"}
          >
            Back
          </Link>
          <span
            className="px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]"
           
          >
            Admin : BCCI
          </span>
        </div>
        <div className="w-[100%]  h-[20%] flex justify-between gap-[1rem] ">
          <div className="w-[20%] h-[100%] ">
            <img src={ipl} className="w-[100%] h-[100%]" alt="team_logo" />
          </div>
          <div className="w-[60%] h-[100%]  flex flex-col">
            <span className="text-white text-[32px] font-bold truncate">
             Indian Premier League
            </span>
            <span className="font-extralight text-white">
              Mumbai Indians VS Kolkata Knight Riders
            </span>
            <span className="font-extralight text-white">
              (Play offs)
            </span>
          </div>
          <div className="w-[20%] h-[100%]  font-extralight text-white flex flex-col  justify-end items-end">
            <button className="border w-[7rem] py-[0.5rem] ">Start</button>
          </div>
        </div>
        <div className="w-[90%] h-[0.3rem]  bg-[#434343] rounded-[10px]"></div>
        <div className="w-[10%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
          <button
            
            className={`text-[#FF730D]`}
          >
            1st Inings
          </button>

        </div>
        <Inings/>
      </div>
     
    </div>
  );
};

export default Match;
