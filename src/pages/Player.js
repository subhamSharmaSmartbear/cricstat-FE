import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Error from '../components/Utilities/Error'; // Assuming Error component is here
import PlayerBallingTable from '../components/Stats/PlayerBallingTable';
import PlayerBattingTable from '../components/Stats/PlayerBattingTable';

const Player = () => {
  const [type, setType] = useState("batting");
  const [player, setPlayer] = useState(null);
  const [showError, setShowError] = useState(false); // To track error display
  const { id } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_AUTH}api/players/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setPlayer(result);
        } else {
          throw new Error("Failed to fetch player");
        }
      } catch (error) {
        console.log("An error occurred: " + error.message);
      }
    };

    getPlayer();

    // Set a timeout to display the error after 2 seconds if player is null
    const errorTimeout = setTimeout(() => {
      if (!player) {
        setShowError(true);
      }
    }, 500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(errorTimeout);
  }, []);

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] px-[2rem] flex flex-col gap-[1rem]">
      {player !== null && (
        <div
          className={`w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden py-[3rem]`}
        >
          <div className="w-[100%] h-[20%] flex justify-between gap-[1rem] ">
            <div className="w-[20%] h-[100%]">
              <img
                src={player.profilePicture}
                className="w-[100%] h-[100%]"
                alt="player_profile"
              />
            </div>
            <div className="w-[60%] h-[100%] flex flex-col">
              <span className="text-white font-bold text-[22px]">
                {player.specialization.toUpperCase()}
              </span>
              <span className="text-white text-[32px] font-bold truncate">
                {player.name}
              </span>
              <span className="font-extralight text-white">
                {player.country}
              </span>
            </div>
            <div className="w-[20%] h-[100%] font-extralight text-white flex flex-col items-start gap-[1rem]">
              <span className="font-bold">{`Date of birth : ${player.dateOfBirth}`}</span>
            </div>
          </div>
          <div className="h-[0.4%] w-[90%] bg-[#434343]"></div>
          <div className="w-[30%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around">
            <button
              onClick={() => setType("batting")}
              className={`${type === "batting" && "text-[#FF730D]"}`}
            >
              Batting
            </button>
            <button
              onClick={() => setType("bowling")}
              className={`${type === "bowling" && "text-[#FF730D]"}`}
            >
              Bowling
            </button>
          </div>
          {type === "bowling" && <PlayerBallingTable />}
          {type === "batting" && <PlayerBattingTable />}
        </div>
      )}
      {!player && showError && <Error />} {/* Show Error component after delay */}
    </div>
  );
};

export default Player;
