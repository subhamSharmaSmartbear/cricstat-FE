import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ipl from "../assets/ipl.png";
import Group1 from "../components/Tournament/Group1";
import Group2 from "../components/Tournament/Group2";
import Finals from "../components/Tournament/Finals";

const Tournament = () => {
  const { id } = useParams();
  const [type, setType] = useState("Group1");
  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden `}
      >
        <div className="w-[100%] text-[18px] font-medium h-[10%] text-white flex items-center justify-between">
          <Link
            className="px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]"
            to={"/matches"}
          >
            Back
          </Link>
          <button className="px-[1rem] py-[0.5rem] rounded-[10px]  bg-[#434343]">
            Manage Team
          </button>
        </div>
        <div className="w-[100%]  h-[20%] flex justify-between gap-[1rem] ">
          <div className="w-[20%] h-[100%] ">
            <img src={ipl} className="w-[100%] h-[100%]" alt="team_logo" />
          </div>
          <div className="w-[60%] h-[100%]  flex flex-col">
            <span className=" text-green-400 font-bold animate-pulse text-[22px]">
              Live
            </span>
            <span className="text-white text-[32px] font-bold truncate">
              Indian Premier League
            </span>
            <span className="font-extralight text-white">Eden Gardens</span>
          </div>
          <div className="w-[20%] h-[100%]  font-extralight text-white flex flex-col  items-start gap-[1rem]">
            <span className="font-bold">Admin : BCCI</span>
            <button className=" w-[5rem] px-[1rem] py-[0.5rem] rounded-[10px] font-bold bg-[#434343]">
              Start
            </button>
          </div>
        </div>
        <div className="w-[90%] h-[0.3rem]  bg-[#434343] rounded-[10px]"></div>
        <div className="w-[30%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
          <button
            onClick={() => setType("Group1")}
            className={`${type === "Group1" && "text-[#FF730D]"}`}
          >
            Group 1
          </button>
          <button
            onClick={() => setType("Group2")}
            className={`${type === "Group2" && "text-[#FF730D]"}`}
          >
            Group 2
          </button>
          <button
            onClick={() => setType("finals")}
            className={`${type === "finals" && "text-[#FF730D]"}`}
          >
            Finals
          </button>
        </div>
        {type === "Group1" && <Group1 />}
        {type === "Group2" && <Group2 />}
        {type === "finals" && <Finals />}
      </div>
    </div>
  );
};

export default Tournament;
