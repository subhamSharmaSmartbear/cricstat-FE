import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Group1 from "../components/Tournament/Group1";
import Group2 from "../components/Tournament/Group2";
import Finals from "../components/Tournament/Finals";
import Semifinal from "../components/Tournament/Semifinal";

const Tournament = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [type, setType] = useState("GroupA");
  const [tournament, setTournament] = useState(null);
  const [groupMatches, setGroupMatches] = useState(null);

  //get matches details for the tournament by tournament id
  const getGroupMatches = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/${id}/matches/group-stages`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      if (response.ok) {
        const data = await response.json();
        setGroupMatches(data); // Store tournament dat
        console.log(data["Group A"]);

        console.log(data);
      } else {
        throw new Error("Error fetching tournaments");
      }
    } catch (error) {
      // toast.error("Error fetching tournaments");
    }
  };

  useEffect(() => {
    getGroupMatches();
  }, []);

  //function to start the particular tournament by tournament id
  const startTournament = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/${id}/schedule/group-stages`,
        { method: "POST", headers: { "Content-Type": "application/json" } }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        getGroupMatches();
      } else {
        throw new Error("Error fetching tournaments");
      }
    } catch (error) {
      // toast.error("Error fetching tournaments");
    }
  };

  //get tournament by tournament id
  useEffect(() => {
    const getTournament = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/get-tournament/${id}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          setTournament(data);
          console.log(data);
        } else {
          throw new Error("Error fetching tournaments");
        }
      } catch (error) {
        // toast.error("Error fetching tournaments");
      }
    };

    getTournament();
  }, []);

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      <div
        className={` w-[100%]  h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden `}
      >
        {tournament !== null && (
          <div className="w-[100%] mt-[2rem] h-[20%] flex justify-between gap-[1rem] ">
            <div className="w-[60%] h-[100%]  flex flex-col">
              <span
                className={`${tournament.status === "ONGOING" ? "text-[#14FF72] animate-pulse" : "text-white"}  font-bold  text-[22px]`}
              >
                {tournament.status}
              </span>
              <span className="text-white text-[32px] font-bold truncate">
                {tournament.tournamentName}
              </span>
              <span className="font-extralight text-white">
                {tournament.location}
              </span>
            </div>
            <div className="w-[20%] h-[100%]  font-extralight text-white flex flex-col  items-start gap-[1rem]">
              <span className="font-bold">Admin : {user.name}</span>
              {user && user.role === "ADMIN" && (
                <button
                  onClick={startTournament}
                  className={`w-[5rem] px-[1rem] py-[0.5rem] rounded-[10px] font-bold bg-[#434343] ${tournament.status === "ONGOING" && tournament.registeredTeamsCount === 6 && "discursor-not-allowed"}`}
                >
                  Start
                </button>
              )}
            </div>
          </div>
        )}
        <div className="w-[90%] h-[0.3rem]  bg-[#434343] rounded-[10px]"></div>
        <div className="w-[30%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
          <button
            onClick={() => setType("GroupA")}
            className={`${type === "GroupA" && "text-[#FF730D]"}`}
          >
            Group 1
          </button>
          <button
            onClick={() => setType("GroupB")}
            className={`${type === "GroupB" && "text-[#FF730D]"}`}
          >
            Group 2
          </button>
          <button
            onClick={() => setType("semifinals")}
            className={`${type === "semifinals" && "text-[#FF730D]"}`}
          >
            Semi-Finals
          </button>
          <button
            onClick={() => setType("finals")}
            className={`${type === "finals" && "text-[#FF730D]"}`}
          >
            Finals
          </button>
        </div>
        {type === "GroupA" && (
          <Group1 groupMatches={groupMatches && groupMatches["Group A"]} />
        )}
        {type === "GroupB" && (
          <Group2 groupMatches={groupMatches && groupMatches["Group B"]} />
        )}
        {type === "semifinals" && <Semifinal />}
        {type === "finals" && <Finals />}
      </div>
    </div>
  );
};

export default Tournament;
