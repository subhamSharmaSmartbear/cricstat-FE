import React, { useState } from "react";
import LiveMatches from "../components/Matches/LiveMatches";
import UpcomingMatches from "../components/Matches/UpcomingMatches";
import PastMatches from "../components/Matches/PastMatches";

const Matches = () => {
  const [type, setType] = useState("live");

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem]">
      <div className="  h-[10%] flex items-center gap-[2rem] text-[22px] text-white text-light ">
        <button
          className={`${type === "live" ? "text-[#FF730D]" : "text-white"}`}
          onClick={() => setType("live")}
        >
          Live
        </button>
        <button
          className={`${type === "upcoming" ? "text-[#FF730D]" : "text-white"}`}
          onClick={() => setType("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`${type === "past" ? "text-[#FF730D]" : "text-white"}`}
          onClick={() => setType("past")}
        >
          Past
        </button>
      </div>

      {
        type === "live" && <LiveMatches/>
      }
      {
        type === "upcoming" && <UpcomingMatches/>
      }
      {
        type === "past" && <PastMatches/>
      }
      
      
    </div>
  );
};

export default Matches;
