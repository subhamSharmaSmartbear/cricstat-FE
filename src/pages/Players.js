import React, { useState, useEffect } from "react";
import Error from "../components/Utilities/Error";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState(null);
  const [showError, setShowError] = useState(false); // To track error display

  useEffect(() => {
    const getAllPlayers = async (values) => {
      console.log(values);

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

        console.log(result);

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
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] flex flex-wrap -mx-2 gap-[5rem] justify-start overflow-y-scroll  scrollable-content custom-scrollbar p-[3rem]">
      {allPlayers &&
        allPlayers.map((player) => (
          <Link
            key={player.id} // Adding key prop
            to={`/player/${player.id}`} // Link to dynamic player id
            className="w-[280px] h-[350px] bg-[#434343] justify-self-start rounded-[10px]"
          >
            <div className="w-[100%] h-[80%] ">
              <img
                src={player.profilePicture}
                className="w-[100%] h-[100%] object-cover"
                alt="profile"
              />
            </div>
            <div className="w-[100%] h-[20%] text-white text-center flex flex-col">
              <span className="text-[22px] truncate">{player.name}</span>
              <span className="text-[#E0E0E0]">{player.specialization}</span>
            </div>
          </Link>
        ))}

      {!allPlayers && showError && <Error />}
    </div>
  );
};

export default Players;
