import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import Inings2 from "../components/Inings2";
import Table from "../components/Stats/Table";

const Match = () => {
  const [pageType, setPageType] = useState("innings");
  const [matchResponse, setMatchResponse] = useState({ });
  const intervalRef = useRef(null); // useRef to store interval ID

  const { id } = useParams();

  useEffect(() => {
    const GetMatchResponse = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/3/innings/balls`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          setMatchResponse(data);
          console.log(data.innings); // Log for debugging purposes
        } else {
          throw new Error("Error fetching tournaments");
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Create interval on component mount and cleanup on unmount
    intervalRef.current = setInterval(GetMatchResponse, 3000); // Call every 3 seconds

    return () => {
      clearInterval(intervalRef.current); // Clear interval on unmount
    };
  }, [matchResponse]); // Empty dependency array for effect to run only once

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem] relative">
      <div className="w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden">
        <div className="w-[100%] h-[15%] flex justify-between gap-[1rem] mt-[0.5rem]">
          <div className="w-[60%] h-[100%] flex flex-col">
            <span className="text-white text-[32px] font-bold truncate">
              <span className="text-[#34e8eb]">Pakistan</span> VS{" "}
              <span className="text-[#bff23d]">West Indies</span>
            </span>
            <span className="font-light text-white">ICC T20 World Cup</span>
            <span className="font-light text-white fon">(PLAYOFFS)</span>
          </div>

          <div className="w-[20%] h-[100%] font-extralight text-white flex flex-col justify-end items-end">
            <button className="border w-[7rem] py-[0.5rem]">Start</button>
          </div>
        </div>

        <div className="w-[100%] h-[0.3rem] bg-[#434343] rounded-[10px]"></div>
        <div className="w-[20%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around gap-[1rem]">
          <button
            onClick={() => setPageType("innings")}
            className={pageType === "innings" ? "text-[#FF730D]" : ""}
          >
            Innings
          </button>

          <button
            onClick={() => setPageType("score")}
            className={pageType === "score" ? "text-[#FF730D]" : ""}
          >
            Score card
          </button>
        </div>
       
        {pageType === "innings" && <Inings2 innings={ matchResponse.innings}/>}
        {pageType === "score" && <Table innings={ matchResponse.innings}/>}
      </div>
    </div>
  );
};

export default Match;
