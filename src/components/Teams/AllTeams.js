import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../Utilities/Error"; 

const AllTeams = ({createTeamModal}) => {
  const [allTeams, setAllTeams] = useState(null);
  const [showError, setShowError] = useState(false); 
  

  //get the all teams present in the app.
  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}engine-service/list-teams-summary`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          setAllTeams(result)
          
        } else {
          throw new Error("Failed to fetch player");
        }
      } catch (error) {
      }
    };

    getTeams();

   

  }, [createTeamModal]);

  return (
    <div
      className={`scrollable-content w-[100%] min-h-[20%] max-h-[90%] overflow-y-scroll custom-scrollbar`}
    >
      {allTeams !== null &&
        allTeams.map((team) => (
          <Link
            to={`/team/${team.teamID}`}
            key={team.teamID}
            className="w-[100%] h-[15vh] mt-[1.5rem] rounded-[10px] bg-[#434343] flex justify-between"
          >
            <div className="w-[60%] h-[100%] p-[1rem] flex justify-between">
              
              <div className="w-[80%] h-[100%] flex flex-col">
                <span className="text-white text-[24px] font-semibold">
                  {team.name}
                </span>
                <span className="text-white text-[14px] font-extralight">
                  Coach - {team.coach}
                </span>
                <span className="text-white text-[14px] font-extralight mt-[1.5rem]">
                  Captain - {team.teamCaptain}
                </span>
              </div>
            </div>
            <div className="w-[30%] flex flex-col p-[1rem]">
              <span className="text-white text-[16px] font-extralight">
                Total Players : 15
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

      {!allTeams && showError && <Error />}
    </div>
  );
};

export default AllTeams;
