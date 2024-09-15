import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Inings from "../components/Inings";
import Inings2 from "../components/Inings2";
import Table from "../components/Stats/Table";

const Match = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem] relative">
      <div
        className={`w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden`}
      >
        <div className="w-[100%] h-[15%] flex justify-between gap-[1rem] mt-[0.5rem] ">
          <div className="w-[60%] h-[100%] flex flex-col">
            <span className="text-white text-[32px] font-bold truncate ">
             
              <span className="text-[#34e8eb]">Australia</span>  VS <span className="text-[#bff23d]">India</span> 
            </span>
            <span className="font-light text-white">
              {"ICC T20 World Cup"}
            </span>
            <span className="font-light text-white fon">
              {"(PLAYOFFS)"}
            </span>
          </div>

          <div className="w-[20%] h-[100%] font-extralight text-white flex flex-col justify-end items-end">
            <button className="border w-[7rem] py-[0.5rem]">Start</button>
          </div>
        </div>

        <div className="w-[100%] h-[0.3rem] bg-[#434343] rounded-[10px]"></div>
        <div className="w-[20%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around gap-[1rem]">
          <button className={`text-[#FF730D]`}>Inings</button>

          <button className={`  `}>Score card</button>
        </div>
        <Inings2 />
      </div>
    </div>
  );
};

export default Match;
