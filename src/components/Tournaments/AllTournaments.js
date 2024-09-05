import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Error from "../Utilities/Error";

const AllTournaments = () => {
  // Retrieve user details from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // State for storing tournament data and tracking registration status
  const [tournaments, setTournaments] = useState(null);
  const [registration, setRegistration] = useState(false);
  const [showError, setShowError] = useState(false); // State for showing error

  // Fetch all tournaments when the component loads or registration changes
  useEffect(() => {
    const getAllTournaments = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/get-all-tournaments`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          setTournaments(data); // Store tournament data
        } else {
          throw new Error("Error fetching tournaments");
        }
      } catch (error) {
        toast.error("Error fetching tournaments");
      }
    };

    getAllTournaments();

    // Display error if no tournaments are fetched after a delay
    const errorTimeout = setTimeout(() => {
      if (!tournaments) setShowError(true);
    }, 500);

    return () => clearTimeout(errorTimeout);
  }, [registration]);

  // Function to register a team for a tournament
  const register = async (team, tournamentId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/${tournamentId}/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(team), // Send team data
        }
      );

      if (response.ok) {
        toast.success("Registered Successfully");
        setRegistration(!registration); // Update registration status
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error during registration");
    }
  };

  // Get team data by user ID and register the team
  const getTeam = async (tournamentId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}engine-service/list-teams-summary/${user.userId}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      const teamData = await response.json();
      if (teamData) register(teamData, tournamentId); // Register the team
    } catch (error) {
      toast.error("Error fetching teams");
    }
  };

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[90%] px-[2rem] flex flex-col gap-[1rem] scrollable-content overflow-y-scroll custom-scrollbar">
      {tournaments &&
        tournaments.map((tournament) => (
          <div key={tournament.tournamentDTOId} className="w-[100%] h-[12vh] mt-[1.5rem] rounded-[10px] flex justify-between items-center p-[0.5rem] border-b-[0.5px]">
            <Link to={`/tournament/${tournament.tournamentDTOId}`} className="w-[49%] h-[100%] flex flex-col justify-between">
              <div className="w-[100%] h-[20%] flex items-center gap-[0.5rem]">
                <span className={`${tournament.status === "ONGOING" ? "text-[#14FF72] animate-pulse" : "text-white"} font-semibold text-[18px]`}>
                  {tournament.status}
                </span>
                <span className="text-white font-medium text-[14px]">T20</span>
              </div>
              <div className="w-[100%] h-[75%] flex flex-col justify-between">
                <span className="truncate text-[24px] text-white font-medium">{tournament.name}</span>
                <span className="text-[14px] text-white font-light">{tournament.location}</span>
              </div>
            </Link>
            <div className="w-[20%] h-[100%] text-white flex items-end justify-center flex-col gap-[0.8rem]">
              <span className="font-extralight">Already Registered Teams - {tournament.registeredTeamsCount}</span>
              <button className="border w-[8rem] p-[0.5rem] rounded-[10px] z-[1000]" onClick={() => getTeam(tournament.tournamentDTOId)}>Register</button>
            </div>
            <div className="w-[0.1%] h-[90%] bg-[#434343]"></div>
          </div>
        ))}
      {!tournaments && showError && <Error />} {/* Show error if no tournaments */}
    </div>
  );
};

export default AllTournaments;
