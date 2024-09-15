import React, { useState, useEffect } from "react";
import Error from "../components/Utilities/Error";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState(null);
  const [showError, setShowError] = useState(false); // To track error display


  //function to get all players in the platform
  
  useEffect(() => {
    const getAllPlayers = async (values) => {

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_AUTH}api/players/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const result = await response.json();

        setAllPlayers(result);
      } catch (error) {
        // toast.error("An error occurred: " + error.message);
      }
    };

    getAllPlayers();

    // Set a timeout to display the error after 2 seconds if allPlayers is null
    const errorTimeout = setTimeout(() => {
      if (!allPlayers) {
        setShowError(true);
      }
    }, 500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(errorTimeout);
  }, []);

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] flex flex-wrap -mx-2 gap-[2rem] justify-start overflow-y-scroll  scrollable-content custom-scrollbar p-[3rem]">
      {allPlayers &&
        allPlayers.map((player) => (
          <div
            key={player.id} // Adding key prop
            
            className="w-[280px] h-[350px] bg-[#434343] justify-self-start rounded-[10px]"
          >
            <div className="w-[100%] h-[80%] ">
              <img
                src={"https://res.cloudinary.com/dd2nvofv0/image/upload/v1725960451/dgtxmftqcsrobcbkdxxm.png"}
                className="w-[100%] h-[100%] object-cover"
                alt="profile"
              />
            </div>
            <div className="w-[100%] h-[20%] text-white text-center flex flex-col">
              <span className="text-[22px] truncate">{player.name}</span>
              <span className="text-[#E0E0E0]">{player.specialization}</span>
            </div>
          </div>
        ))}

      {!allPlayers && showError && <Error />}
    </div>
  );
};

export default Players;
