import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Inings from "../components/Inings";
import Table from "../components/Stats/Table";

const Match = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  const [matchResult, setMatchResult] = useState(
    "Match Result: Not yet decided"
  );
  const [firstInningsEnd, setFirstInningsEnd] = useState(
    "First Innings: Not yet ended"
  );
  const [secondInningsEnd, setSecondInningsEnd] = useState(
    "Second Innings: Not yet ended"
  );
  const [innings, setInnings] = useState(1);
  const [wickets, setWickets] = useState({
    innings1: 0,
    innings2: 0,
  });
  const [isInningsEnded, setIsInningsEnded] = useState(false);
  const [isMatchEnded, setIsMatchEnded] = useState(false);


  const [scorecard, setScorecard] = useState({
    striker: "",
    nonStriker: "",
    bowler: "",
    runs: 0,
    wickets: 0,
    overs: 0,
    balls: 0,
    ballscore: 0,
    battingTeam: "",
    bowlingTeam: "",
    players: {}, 
  });



  //get the match  by id
  useEffect(() => {
    const getMatchDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/matches/${id}`,
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
          setMatch(result);
        } else {
          throw new Error("Failed to fetch player");
        }
      } catch (error) {
        console.log("An error occurred: " + error.message);
      }
    };

    getMatchDetails();

    // Set a timeout to display the error after 2 seconds if player is null
  }, [matchResult,isMatchEnded]);
  

 
  
  //socket io connection
  useEffect(() => {
    const socket = new WebSocket("ws://10.34.20.35:8080/cricket");

    socket.onopen = () => {
      console.log("Connected to WebSocket server.");
      setIsConnected(true);
    };

    socket.onmessage = (event) => {
      const message = event.data;

      if (message.startsWith("Striker:")) {
        const striker = message.replace("Striker: ", "");
        setScorecard((prev) => ({ ...prev, striker }));
      }
      if (message.startsWith("Non-Striker:")) {
        const nonStriker = message.replace("Non-Striker: ", "");
        setScorecard((prev) => ({ ...prev, nonStriker }));
      }
      if (message.startsWith("Bowler:")) {
        const bowler = message.replace("Bowler: ", "");
        setScorecard((prev) => ({ ...prev, bowler }));
      }
      if (message.startsWith("batting Team")) {
        const battingTeam = message.replace("batting Team: ", "");
        setScorecard((prev) => ({ ...prev, battingTeam }));
      }
      if (message.startsWith("bowling Team")) {
        const bowlingTeam = message.replace("bowling Team: ", "");
        setScorecard((prev) => ({ ...prev, bowlingTeam }));
      }
      if (message.startsWith("Ball Details: Runs Scored:")) {
        const runs = parseInt(
          message.replace("Ball Details: Runs Scored: ", ""),
          10
        );
        setScorecard((prev) => ({
          ...prev,
          runs: prev.runs + runs,
          ballscore: runs,
        }));
      }
      if (message.startsWith("Over")) {
        const parts = message.split(" ");
        const over = parseInt(parts[1], 10);
        const balls = parseInt(parts[3], 10);
        setScorecard((prev) => ({ ...prev, overs: over, balls }));
      }
      if (message.startsWith("Match Result:")) {
        setMatchResult(message);
        setIsMatchEnded(true);
      }
      if (message.startsWith("Innings End:")) {
        const inningsEnd = message.replace("Innings End: ", "");
        if (innings === 1) {
          setFirstInningsEnd(`First Innings: ${inningsEnd}`);
          setWickets((prev) => ({ ...prev, innings1: prev.innings1 })); // Keep wickets for innings 1
          setInnings(2); // Move to second innings
          setIsInningsEnded(true);
          setScorecard((prev) => ({
            ...prev,
            runs: 0,
            wickets: 0,
            ballscore: 0, // Reset ball score for new innings
          }));
        } else if (innings === 2) {
          setSecondInningsEnd(`Second Innings: ${inningsEnd}`);
          setIsInningsEnded(true);
          setScorecard((prev) => ({
            ...prev,
            runs: 0,
            ballscore: 0, // Reset ball score for second innings
          }));
        }
      }

      if (message.includes("Wicket")) {
        if (!isInningsEnded && !isMatchEnded) {
          setScorecard((prev) => ({
            ...prev,
            wickets: prev.wickets + 1,
          }));
          setWickets((prev) => ({
            ...prev,
            [`innings${innings}`]: prev[`innings${innings}`] + 1,
          }));
        }
      }
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server.");
      setIsConnected(false);
    };

    setWs(socket);
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [innings, isInningsEnded, isMatchEnded]);


  //function when we click the start match button
  const startMatch = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
     
      const matchPayload = match;
      delete matchPayload.matchDateTime;
      const payloadString = JSON.stringify(matchPayload);

      ws.send(payloadString);
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem] relative">
      <div
        className={`w-[100%] h-[100%] flex flex-col items-center gap-[1rem] overflow-y-hidden`}
      >
        
        {match && (
          <div className="w-[100%] h-[20%] flex justify-between gap-[1rem] mt-[2rem]">
            <div className="w-[60%] h-[100%] flex flex-col">
              <span className="text-white text-[32px] font-bold truncate">
                {match.matchType}
              </span>
              <span className="font-extralight text-white">
                {match.teamA} VS {match.teamB}
              </span>
              <span className="font-extralight text-white fon">
                ({match.matchStage})
              </span>
            </div>
            {user && user.role === "ADMIN" && match && match.matchStatus != null && match.matchStatus.toLowerCase() === "planned" && (
              <div className="w-[20%] h-[100%] font-extralight text-white flex flex-col justify-end items-end">
                <button
                  className="border w-[7rem] py-[0.5rem]"
                  onClick={startMatch}
                  disabled={!isConnected}
                >
                  Start
                </button>
              </div>
            )}
          </div>
        )}
        <div className="w-[90%] h-[0.3rem] bg-[#434343] rounded-[10px]"></div>
        <div className="w-[20%] h-[6%] rounded-[10px] bg-[#434343] text-white font-bold flex items-center justify-around gap-[1rem]">
          {match && match.matchStatus.toLowerCase() === "planned" && <button
            className={`text-[#FF730D]`}

          >
            {innings}
            {innings === 1 ? "st" : "nd"} Inings
          </button>}
          { match && match.matchStatus.toLowerCase() === "completed" && 
            <button
              className={` text-[#FF730D] `}
            >
              Score card
            </button>
          }
        </div>
        {match && match.matchStatus.toLowerCase() === "completed" ?  <Table  /> : <Inings
            scorecard={scorecard}
            matchResult={matchResult}
            firstInningsEnd={firstInningsEnd}
            secondInningsEnd={secondInningsEnd}
            innings={innings}
            isMatchEnded={isMatchEnded}
            wickets={wickets}
          />}
      </div>
    </div>
  );
};

export default Match;
