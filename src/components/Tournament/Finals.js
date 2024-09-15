import React, { useState } from "react";
import trophy from "../../assets/trophy.png";
import { Link, useParams } from "react-router-dom";

const Finals = () => {
  const { id } = useParams();
  const [finalMatches, setFinalMatches] = useState(null);

  const getGroupMatches = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/final/schedule-matches/${id}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      if (response.ok) {
        const data = await response.json();

        setFinalMatches(data); // Store tournament dat
      } else {
        throw new Error("Error fetching tournaments");
      }
    } catch (error) {
      // toast.error("Error fetching tournaments");
    }
  };

  return (
    <div className="w-[100%]  h-[60%] flex flex-col items-center justify-center gap-[2rem]  ">
      
      {finalMatches && (
        <Link to={`/match/${finalMatches.matchId}`} className="w-[55%] h-[60%]  flex justify-between  items-center border rounded-[10px] border-[#434343]">
          <div className="w-[33%] ">
            
            <div className="w-[100%] h-[30%]  flex flex-col items-center">
              <span className="text-white text-[22px] font-bold">
                {finalMatches.teamA}
              </span>
              <span className="text-white text-[18px] font-light ">
                192/4 (12.6)
              </span>
            </div>
          </div>
          <div className="w-[80%] h-[100%]  flex items-center justify-center flex flex-col items-center">
            <img className="w-[8rem] h-[8rem]" src={trophy} />
            <span className="text-white font-bold w-[100%] text-center text-[28px]">{finalMatches.location}</span>
          </div>
          <div className="w-[33%] ">
            
            <div className="w-[100%] h-[30%]  flex flex-col items-center">
              <span className="text-white text-[22px] font-bold">
                {finalMatches.teamB}
              </span>
              <span className="text-white text-[18px] font-light ">
                200/9 (20)
              </span>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Finals;
