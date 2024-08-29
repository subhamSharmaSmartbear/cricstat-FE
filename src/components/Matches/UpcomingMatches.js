import React from "react";
import mi from "../../assets/mi.svg";
import kkr from "../../assets/kkr.svg";

const UpcomingMatches = () => {
  return (
    <div
      className={`scrollable-content  w-[100%] min-h-[20%] max-h-[90%]  overflow-y-scroll custom-scrollbar`}
    >
      <div className="w-[100%] h-[15vh] mt-[1.5rem] rounded-[10px] bg-[#434343] flex justify-between">
        <div className="w-[40%] h-[100%]  p-[1rem]">
          <div className="w-[100%] h-[35%]  flex gap-[1rem]">
            <span className="text-white font-extralight w-[90%] truncate">
              Wankhade Stadium{" "}
            </span>
          </div>
          <div>
            <h1 className="text-[32px] text-white w-[90%] truncate">
              Indian Premier League{" "}
            </h1>
          </div>
        </div>
        <div className="w-[55%] h-[100%]  flex justify-between  p-[1rem]">
          <div className="w-[30%] h-[100%]  flex flex-col items-center justify-start">
            <div className="w-[6rem] h-[5rem] ">
              <img src={mi} className="w-[100%] h-[100%]" alt="team" />
            </div>
            <div className="flex text-white flex-col">
              <span className="text-[18px]">Mumbai Indians</span>
              
            </div>
          </div>
          <div className="w-[40%] h-[100%]  text-white flex flex-col text-center justify-center">
            <span className="text-white font-medium flex flex-col">
              <span>On  <span className="text-[#FF730D]">10/09/2024</span></span>
              <span className="font-light">at 10:00 AM</span>
            </span>
          </div>
          <div className="w-[30%] h-[100%]  flex flex-col items-center justify-start">
            <div className="w-[6rem] h-[5rem] ">
              <img src={kkr} className="w-[100%] h-[100%]" alt="team" />
            </div>
            <div className="flex text-white flex-col">
              <span className="text-[18px]">Kolkata Knight riders</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;
