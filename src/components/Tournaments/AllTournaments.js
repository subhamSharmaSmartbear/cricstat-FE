import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Error from "../Utilities/Error";

const AllTournaments = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [tournaments, setTournaments] = useState(null);
  const [registration,setRegistration] = useState(false);
  const [showError, setShowError] = useState(false); // To track error display

  useEffect(() => {
    const getAllTournaments = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/get-all-tournaments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);

        if (response.ok) {
          const tournaments = await response.json();
          setTournaments(tournaments);
        } else {
          throw new Error("Failed to fetch tournaments");
        }
      } catch (error) {
        toast.error("Error fetching tournaments");
      }
    };

    getAllTournaments();

    // Set a timeout to display the error after 2 seconds if tournaments is null
    const errorTimeout = setTimeout(() => {
      if (!tournaments) {
        setShowError(true);
      }
    }, 500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(errorTimeout);
  }, [registration]);

  const register = async (team, tournamentId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/${tournamentId}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(team),
        }
      );

      console.log(response);

      if (response.ok) {
        toast.success("Registered Successfully");
        setRegistration(!registration)
      } else {
        toast.error("Not Registered!");
      }
    } catch (error) {
      toast.error("Not Registered!");
    }
  };

  const getTeam = async (tournamentId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL_GAME_ENGINE}engine-service/list-teams-summary/${user.userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const teamByCoachId = await response.json();
      console.log(teamByCoachId);
      if (teamByCoachId) {
        register(teamByCoachId, tournamentId);
      } else {
        toast.error("Error in registration");
      }
    } catch (error) {
      toast.error("Error fetching teams");
    }
  };

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[90%] px-[2rem] flex flex-col gap-[1rem] scrollable-content overflow-y-scroll custom-scrollbar">
      {tournaments != null &&
        tournaments.map((tournament) => (
          <div
            key={tournament.tournamentDTOId} // Adding key prop for mapped items
            className="w-[100%] h-[12vh] mt-[1.5rem] rounded-[10px] flex justify-between items-center p-[0.5rem] border-b-[0.5px]"
          >
            <Link
              to={`/tournament/${tournament.tournamentDTOId}`}
              className="w-[49%] h-[100%] flex flex-col justify-between"
            >
              <div className="w-[100%] h-[20%] flex items-center gap-[0.5rem]">
                <span
                  className={`${
                    tournament.status === "ONGOING"
                      ? "text-[#14FF72] animate-pulse"
                      : "text-white"
                  } font-semibold text-[18px]`}
                >
                  {tournament.status}
                </span>
                <span className="text-white font-medium text-[14px]">T20</span>
              </div>
              <div className="w-[100%] h-[75%] flex flex-col justify-between">
                <span className="truncate text-[24px] text-white font-medium">
                  {tournament.name}
                </span>
                <span className="text-[14px] text-white font-light">
                  {tournament.location}
                </span>
              </div>
            </Link>
            <div className="w-[20%] h-[100%] text-white flex items-end justify-center flex-col gap-[0.8rem]">
              <span className="font-extralight">
                Already Registered Teams - {tournament.registeredTeamsCount}
              </span>
              <button
                className="border w-[8rem] p-[0.5rem] rounded-[10px] z-[1000]"
                onClick={() => getTeam(tournament.tournamentDTOId)}
              >
                Register
              </button>
            </div>
            <div className="w-[0.1%] h-[90%] bg-[#434343]"></div>
          </div>
        ))}

      {!tournaments && showError && <Error />}
    </div>
  );
};

export default AllTournaments;
