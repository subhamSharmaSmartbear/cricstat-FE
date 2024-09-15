import React, { useState,useEffect } from "react";
import LiveMatches from "../components/Matches/LiveMatches";


const Matches = () => {
  const [type, setType] = useState("matches");
  
  const [matches,setMatches] = useState(null);
 

  //get all the matches in the platform

  useEffect(() => {
    const getMatches = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/get-all-matches`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();

          setMatches(result)
          
         
        } else {
          throw new Error("Failed to fetch player");
        }
      } catch (error) {
      }
    };

    getMatches();

    
  }, []);

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem]">
      <div className="  h-[10%] flex items-center gap-[2rem] text-[22px] text-white text-light ">
        <button
          className={`${type === "matches" ? "text-[#FF730D]" : "text-white"}`}
          onClick={() => setType("matches")}
        >
          Matches
        </button>
       
      </div>
      {
        type === "matches" && <LiveMatches matches={matches}/>
      }
    </div>
  );
};

export default Matches;
