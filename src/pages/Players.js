import React, { useState } from "react";
import { useEffect } from "react";
import rohit from "../assets/rohitSharma.svg";
import dewald from "../assets/dewald.svg";
import airplane from "../assets/airplane.svg";
import toast from "react-hot-toast";

const Players = () => {
  const [allPlayers, setAllPlayer] = useState(null);

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

        setAllPlayer(result);
      } catch (error) {
        toast.error("An error occurred: " + error.message);
      }
    };
    getAllPlayers();
  }, []);

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] flex flex-wrap -mx-2 gap-[1rem] justify-start overflow-y-scroll  scrollable-content custom-scrollbar p-[3rem]">
      {allPlayers &&
        allPlayers.map((player) => (
          <div className="w-[280px] h-[350px] bg-[#434343] justify-self-start rounded-[10px]">
            <div className="w-[100%] h-[80%] ">
              <img
                src={player.profilePicture}
                className="w-[100%] h-[100%] object-cover"
                alt="profile"
              />
            </div>
            <div className="w-[100%] h-[20%] text-white text-center flex flex-col">
              <span className="text-[22px] truncate">{player.name} </span>
              <span className="text-[#E0E0E0]">{player.specialization}</span>
            </div>
          </div>
        ))}

        {!allPlayers && <div className="text-white">Error occured</div>}
    </div>
  );
};

export default Players;
