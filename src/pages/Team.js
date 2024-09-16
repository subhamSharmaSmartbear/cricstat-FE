import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Utilities/Error";

const Team = () => {
  const [type, setType] = useState("squad");
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState(null);

  //get the team details by id
  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}engine-service/team/${id}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          setTeam(data); // Store team data
          setPlayers(data.players);
        } else {
          throw new Error("Error fetching team");
        }
      } catch (error) {}
    };

    getTeam();
  }, []);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden bg-black rounded-[10px] p-[2rem]">
      {team !== null && (
        <div className="w-[100%] h-[20%] flex justify-between gap-[1rem]">
          <div className="w-[60%] h-[100%] flex flex-col">
            <span className="text-white text-[32px] font-bold truncate">
              {team.name}
            </span>
            <span className="font-extralight text-white">
              Total Matches Played: {team.matchesPlayed}
            </span>
            <span className="font-extralight text-white">
              Total Matches Won: {team.matchesWon}
            </span>
          </div>
          <div className="w-[20%] h-[100%] font-extralight text-white flex flex-col">
            <span>Coach: {team.coach}</span>
            <span>Captain: {team.teamCaptain}</span>
          </div>
        </div>
      )}
      <div className="w-[90%] h-[0.3rem] bg-[#434343] rounded-[10px]"></div>
      <div className="w-[20%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
        <button
          onClick={() => setType("squad")}
          className={`${type === "squad" && "text-[#FF730D]"}`}
        >
          Squad
        </button>
      </div>

      {/* {players && <Squad players={players} />} */}
    </div>
  );
};

export default Team;
