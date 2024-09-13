import React from "react";
import mi from "../../assets/mi.svg";
import kkr from "../../assets/kkr.svg";
import { Link } from "react-router-dom";

const LiveMatches = ({ matches }) => {
  return (
    <div
      className={`scrollable-content  w-[100%] min-h-[20%] max-h-[90%]  overflow-y-scroll custom-scrollbar`}
    >
      {matches &&
        matches.map((match) => (
          <Link to={`/match/${match.matchId}`} className="w-[100%] h-[15vh] mt-[1.5rem] rounded-[10px] bg-[#434343] flex justify-between">
            <div className="w-[40%] h-[100%]  p-[1rem]">
              <div className="w-[100%] h-[35%]  flex gap-[1rem]">
                <span className="text-white font-extralight w-[90%] truncate">
                  Wankhade Stadium{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] text-white w-[90%] truncate">
                  {match.matchType}{" "}
                </h1>
              </div>
            </div>
            <div className="w-[55%] h-[100%]  flex justify-between  p-[1rem]">
              <div className="w-[30%] h-[100%]  flex flex-col items-center justify-start">
                <div className="w-[6rem] h-[5rem] ">
                  <img src={mi} className="w-[100%] h-[100%]" alt="team" />
                </div>
                <div className="flex text-white flex-col">
                  <span className="text-[18px]">{match.teamA}</span>
                </div>
              </div>
              <div className="w-[40%] h-[100%]  text-white flex flex-col text-center justify-center">
                <span className="text-white font-medium flex flex-col">
                  <span>
                    {" "}
                    <span className="text-[#53f53b]">{match.live ? "LIVE" : "VS" }</span>
                  </span>
                </span>
              </div>
              <div className="w-[30%] h-[100%]  flex flex-col items-center justify-start">
                <div className="w-[6rem] h-[5rem] ">
                  <img src={kkr} className="w-[100%] h-[100%]" alt="team" />
                </div>
                <div className="flex text-white flex-col">
                  <span className="text-[18px]">{match.teamB}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default LiveMatches;
