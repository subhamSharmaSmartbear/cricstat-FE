import React, { useState, useEffect } from "react";
import sixRuns from "../assets/sixRuns.svg";
import fourRuns from "../assets/fourRuns.svg";
import AnimatedText from "./Utilities/AnimatedText";

const Inings = ({
  scorecard,
  messages,
  matchResult,
  firstInningsEnd,
  secondInningsEnd,
  wickets
}) => {
  const [sixRun, setSixRun] = useState(false);
  const [fourRun, setFourRun] = useState(false);
  const [resultAnnounced, setResultAnnounced] = useState(false);

  // Effect to handle the display of the sixRuns SVG
  useEffect(() => {
    if (scorecard.ballscore === 6) {
      setSixRun(true);
      const timer = setTimeout(() => {
        setSixRun(false);
      }, 1500);

      // Cleanup timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }
    if (scorecard.ballscore === 4) {
      setFourRun(true);
      const timer = setTimeout(() => {
        setFourRun(false);
      }, 1500);

      // Cleanup timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }

    if (matchResult !== "Match Result: Not yet decided") {
      setResultAnnounced(true);

      const timer = setTimeout(() => {
        setResultAnnounced(false);
      }, 2000);

      // Cleanup timer on component unmount or before re-running effect
      return () => clearTimeout(timer);
    }
  }, [scorecard.ballscore, matchResult]); // Dependency array to re-run effect on ballscore change

  console.log(scorecard);
  


  return (
    <div className="w-[100%] h-[50%] flex flex-col">
      <div className="w-[100%] h-[100%] flex justify-center flex-col gap-[0.5rem] text-white">
        <p className="text-[32px]">Live updates</p>
        <div className="text-[18px] w-[100%] font-bold h-[30%] flex items-center justify-center text-white justify-between bg-[#a04504]  p-[1rem] gap-[1rem] rounded-[10px] ">
          <div className="w-[25%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate">
              {scorecard.battingTeam === "" && "batting team:"}
              <span className=""> {scorecard.battingTeam}</span>
            </p>
            <p className=" w-[100%] truncate ">
              bowling team:{" "}
              <span className=""> {scorecard.bowlingTeam}</span>
            </p>
          </div>
          <div className="w-[25%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate">
              striker: <span className="font-bold text-[22px]">{scorecard.striker}</span>
            </p>
            <p className=" w-[100%] truncate">
              non-striker:{" "}
              <span className="font-bold text-[22px]">{scorecard.nonStriker}</span>
            </p>
          </div>
          <div className="w-[25%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate ">
              runs:{" "}
              <span className="font-bold w-[100%] text-[22px]">
                {scorecard.runs} 
              </span>
             
            </p>
            <p className=" w-[100%] truncate">
              overs: <span className="font-bold text-[22px]">{scorecard.overs} . {scorecard.balls}</span>
            </p>
          </div>
          <div className="w-[25%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate ">
              bowler:{" "}
              <span className="font-bold w-[100%] text-[22px]">{scorecard.bowler} </span>
            </p>
          </div>
        </div>
        <p className="text-[32px]">Results</p>
        <div className="w-[100%] h-[20%] flex items-center justify-center text-white justify-between border-[2px] p-[1rem] gap-[1rem] rounded-[10px] border-[#434343]">
          <div className="w-[30%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate">
              <span className="font-bold">{matchResult}</span>
            </p>
          </div>
          <div className="w-[30%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate">
              <span className="font-bold">{firstInningsEnd}</span>
            </p>
          </div>
          <div className="w-[30%] h-[100%]  flex flex-col justify-between ">
            <p className=" w-[100%] truncate">
              <span className="font-bold">{secondInningsEnd}</span>
            </p>
          </div>
        </div>

      </div>
      {sixRun && (
        <img
          src={sixRuns}
          className="w-[30rem] h-[40rem] absolute top-0 left-[25vw]"
          alt="Six Runs"
        />
      )}
      {fourRun && (
        <img
          src={fourRuns}
          className="w-[30rem] h-[40rem] absolute top-0 left-[25vw]"
          alt="Six Runs"
        />
      )}
    </div>
  );
};

export default Inings;
