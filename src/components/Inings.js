import React, { useState } from "react";
import mi from "../assets/mi.svg";
import kkr from "../assets/kkr.svg";

import wicket from "../assets/wicket.png";
import wideBall from "../assets/wideBall.png";
import noBall from "../assets/noBall.png";
import BallScoreModal from "./Modal/BallScoreModal";

const Inings = () => {
    const [ballScore, setBallScore] = useState("false")
  return (
    <div className="w-[100%]  h-[60%] flex flex-col   overflow-y-scroll  scrollable-content custom-scrollbar  ">
      <div className="w-[100%] h-[20%]  flex justify-between">
        <div className="w-[48%] h-[100%]  flex gap-[0.5rem]">
          <div className="w-[6rem]  h-[100%]">
            <img
              src={mi}
              className="w-[100%] h-[100%] object-contain"
              alt="logo"
            />
          </div>
          <div className="w-[90%] h-[100%]  flex">
            <div className="w-[70%] h-[100%]  flex flex-col">
              <span className="text-white font-bold text-[22px] w-[100%] truncate">
                Mumbai Indians
              </span>
              <span className="text-white font-light text-[16px]">
                (Balling)
              </span>
            </div>
            <div className="w-[30%] h-[100%]  text-white text-end">
              Yet to bat
            </div>
          </div>
        </div>
        <div className="w-[48%] h-[100%]  flex gap-[0.5rem]">
          <div className="w-[6rem]  h-[100%]">
            <img src={kkr} className="w-[100%] h-[100%] object-contain" />
          </div>
          <div className="w-[90%] h-[100%]  flex">
            <div className="w-[70%] h-[100%]  flex flex-col">
              <span className="text-white font-bold text-[22px] w-[100%] truncate">
                Kolkata Knight Riders
              </span>
              <span className="text-white font-light text-[16px]">
                (Batting)
              </span>
            </div>
            <div className="w-[30%] h-[100%]  text-white text-end">
              185/5 (20)
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[20%]  flex justify-between items-center">
        <div className=" min-w-[50%] h-[100%]  flex flex-col">
          <div className="w-[100%] h-[30%] ">
            <span className="text-white">Over : 12 | Ball : 1</span>
          </div>
          <div className="w-[100%] h-[90%]  flex  py-[0.3rem]">
            <div className="min-w-[10rem] border bg-white rounded-[10px] flex justify-around items-center gap-[1rem] px-[0.5rem]">
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                1
              </div>
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                2
              </div>
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                3
              </div>
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                4
              </div>
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                6
              </div>
              <div className="h-[70%] w-[2rem] border rounded-[100%] border-black border-[2px] flex items-center justify-center">
                1
              </div>

              <div className="h-[70%] w-[2rem] ">
                <img src={noBall} className="w-[100%] h-[100%]" />
              </div>
              <div className="h-[70%] w-[2rem] ">
                <img src={wideBall} className="w-[100%] h-[100%]" />
              </div>
              <div className="h-[70%] w-[2rem] ">
                <img src={wicket} className="w-[100%] h-[100%]" />
              </div>
            </div>
          </div>
        </div>
        <button className="text-white  w-[12rem] h-[3rem] font-bold rounded-[10px] bg-[#434343]" onClick={()=>setBallScore("true")}>
          Enter for ball 1.1
        </button>
      </div>
      {ballScore === "true" && <BallScoreModal setBallScore={setBallScore}/>}
    </div>
  );
};

export default Inings;
