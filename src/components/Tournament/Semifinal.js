import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Semifinal = () => {

const [semiFinalMatches,setSemiFinalMatches] = useState(null);
const {id} = useParams();


    const getSemiFinalMatches = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL_GAME_ENGINE}api/admin/tournaments/semifinal/schedule-matches/${id}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );

        if (response.ok) {
          const data = await response.json();
          
          setSemiFinalMatches(data); // Store tournament dat
         
          
        } else {
          throw new Error("Error fetching tournaments");
        }
      } catch (error) {
        // toast.error("Error fetching tournaments");
      }
    };

 

  return (
    <div className="w-[100%]  h-[60%] flex flex-col  gap-[2rem] overflow-y-scroll items-center scrollable-content custom-scrollbar  ">
        {/* <button onClick={getGroupMatches} className='text-white border w-[10rem] p-[1rem] rounded-[10px]'>Start Semi-final</button> */}
      {semiFinalMatches && semiFinalMatches.map((match) => (
          <Link to={`/match/${match.matchId}`} className="w-[100%] h-[12vh] mt-[1.5rem] rounded-[10px]  flex justify-between items-center p-[0.5rem] border-b-[0.5px]">
            <div className="w-[49%] h-[100%] flex flex-col justify-between">
              <div className="w-[100%] h-[20%]  flex items-center gap-[0.5rem]">
                {match.live === true && <span className="text-[#14FF72] font-semibold text-[18px]">
                  LIVE
                </span>}
                <span className="text-white font-medium text-[14px]">{match.matchStage}</span>
                
              </div>
              <div className="w-[100%] h-[75%]  flex flex-col justify-between">
                <span className="truncate text-[24px] text-white font-medium">
                 {match.matchType} -{" "}
                  <span className="text-[18px] font-light">Match -{match.matchId}</span>
                </span>
                <span className="text-[14px] text-white font-light">
                  {match.location}
                </span>
              </div>
            </div>
            <div className="w-[0.1%] h-[90%]  bg-[#434343] "></div>
            <div className="w-[49%] h-[100%]  flex justify-between flex-col items-center">
              <div className="w-[100%] h-[49%]  flex justify-between items-center">
                <div className="w-[80%] h-[100%] flex gap-[0.5rem]">

                  <span className="text-white text-[20px]">Team A - {match.teamA}</span>
                </div>
                
              </div>

              <div className="w-[100%] h-[1%] bg-white"></div>

              <div className="w-[100%] h-[49%]  flex justify-between items-center">
                <div className="w-[80%] h-[100%] flex gap-[0.5rem]">
                  
                  <span className="text-white text-[20px]">
                  Team B - {match.teamB}
                  </span>
                </div>
                
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Semifinal
