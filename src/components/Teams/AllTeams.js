import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Error from "../Utilities/Error"; // Assuming Error component is here

const AllTeams = () => {
  const [allTeams, setAllTeams] = useState(null);
  const [showError, setShowError] = useState(false); // To track error display

  useEffect(() => {
    const getAllTeams = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_AUTH}api/teams`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setAllTeams(data); // Store teams data
        } else {
          throw new Error("Error fetching teams");
        }
      } catch (error) {
        toast.error("Error fetching teams");
      }
    };

    getAllTeams();

    // Set a timeout to display the error after 2 seconds if allTeams is still null
    const errorTimeout = setTimeout(() => {
      if (!allTeams) {
        setShowError(true);
      }
    }, 500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(errorTimeout);
  }, [allTeams]);

  return (
    <div
      className={`scrollable-content w-[100%] min-h-[20%] max-h-[90%] overflow-y-scroll custom-scrollbar`}
    >
      {allTeams !== null &&
        allTeams.map((team) => (
          <Link
            to={`/team/${team.id}`}
            key={team.id}
            className="w-[100%] h-[15vh] mt-[1.5rem] rounded-[10px] bg-[#434343] flex justify-between"
          >
            <div className="w-[60%] h-[100%] p-[1rem] flex justify-between">
              <div className="w-[20%] h-[100%]">
                <img
                  src={team.logo}
                  className="w-[100%] h-[100%]"
                  alt="logo"
                />
              </div>
              <div className="w-[80%] h-[100%] flex flex-col">
                <span className="text-white text-[24px] font-semibold">
                  {team.name}
                </span>
                <span className="text-white text-[14px] font-extralight">
                  Coach - {team.coachName}
                </span>
                <span className="text-white text-[14px] font-extralight mt-[1.5rem]">
                  Captain - {team.teamCaptain}
                </span>
              </div>
            </div>
            <div className="w-[30%] flex flex-col p-[1rem]">
              <span className="text-white text-[16px] font-extralight">
                Total Players : {team.players.length}
              </span>
              <span className="text-white text-[16px] font-extralight">
                All Rounders : 5
              </span>
              <span className="text-white text-[16px] font-extralight">
                Batters : 5
              </span>
              <span className="text-white text-[16px] font-extralight">
                Ballers : 5
              </span>
            </div>
          </Link>
        ))}

      {/* Show Error component after delay if allTeams is null */}
      {!allTeams && showError && <Error />}
    </div>
  );
};

export default AllTeams;
