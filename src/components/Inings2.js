import React, { useState, useEffect } from "react";
import sixRuns from "../assets/sixRuns.svg";
import fourRuns from "../assets/fourRuns.svg";
import AnimatedText from "./Utilities/AnimatedText";

const Inings = () => {
  return (
    <div className="w-[100%] h-[70%] flex flex-col">
      <div className="w-[100%] h-[100%] flex justify-between flex-col gap-[0.5rem] text-white ">
        <div className="w-[100%] h-[48%]  flex flex-col">
          <span className="text-[26px] font-bold ">Inings 1</span>
          <div className="w-[100%] h-[105%] border rounded-[10px] flex flex-col justify-between p-[0.5rem] border-[#434343]">
            <div className="w-[100%] h-[48%] flex justify-between">
              <div className="w-[32%] h-[100%]  flex flex-col justify-center">
                <span>
                  Batting Team -{" "}
                  <span className="font-bold text-[22px] text-[#34e8eb]">
                    Australia
                  </span>
                </span>
                <span>
                  Bowling Team -{" "}
                  <span className="font-bold text-[22px] text-[#bff23d]">
                    India
                  </span>
                </span>
              </div>
              <div className="w-[32%] h-[100%]  flex flex-col items-center justify-center">
                <span>
                  Striker - <span className="font-bold text-[22px]">Kohli</span>
                </span>
                <span>
                  Non-Striker -{" "}
                  <span className="font-bold text-[22px]">Rohit</span>
                </span>
              </div>
              <div className="w-[32%] h-[100%]  flex flex-col items-end justify-center">
                <span>
                  Bowler -{" "}
                  <span className="font-bold text-[22px]">Rashid Khan</span>
                </span>
                <span>
                  Runs - <span className="font-bold text-[22px]">20 - 1</span>
                </span>
              </div>
            </div>
            <div className="w-[100%] h-[48%] border bg-white rounded-[10px] text-black flex overflow-x-scroll scrollable-content custom-scrollbar p-[0.5rem] gap-[1rem]">
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[48%]  flex flex-col">
          <span className="text-[26px] font-bold ">Inings 2</span>
          <div className="w-[100%] h-[105%] border rounded-[10px] flex flex-col justify-between p-[0.5rem] border-[#434343]">
            <div className="w-[100%] h-[48%] flex justify-between">
              <div className="w-[32%] h-[100%]  flex flex-col justify-center">
                <span>
                  Batting Team -{" "}
                  <span className="font-bold text-[22px] text-[#34e8eb]">
                    Australia
                  </span>
                </span>
                <span>
                  Bowling Team -{" "}
                  <span className="font-bold text-[22px] text-[#bff23d]">
                    India
                  </span>
                </span>
              </div>
              <div className="w-[32%] h-[100%]  flex flex-col items-center justify-center">
                <span>
                  Striker - <span className="font-bold text-[22px]">Kohli</span>
                </span>
                <span>
                  Non-Striker -{" "}
                  <span className="font-bold text-[22px]">Rohit</span>
                </span>
              </div>
              <div className="w-[32%] h-[100%]  flex flex-col items-end justify-center">
                <span>
                  Bowler -{" "}
                  <span className="font-bold text-[22px]">Rashid Khan</span>
                </span>
                <span>
                  Runs - <span className="font-bold text-[22px]">20 - 1</span>
                </span>
              </div>
            </div>
            <div className="w-[100%] h-[48%] border bg-white rounded-[10px] text-black flex overflow-x-scroll scrollable-content custom-scrollbar p-[0.5rem] gap-[1rem]">
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              <div className="w-auto h-[100%] flex-shrink-0">
                <span className="font-bold">Over 8</span>
                <div className="w-[100%] h-[70%] bg-[#D9D9D9] rounded-[100px] flex items-center p-[0.4rem] justify-between gap-[0.4rem]">
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    6
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    4
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    WD
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    OUT
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    1
                  </div>
                  <div className="w-[40px] h-[100%] border rounded-[100px] bg-white flex items-center justify-center">
                    2
                  </div>
                 
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Inings;
