import React from "react";

import { useState } from "react";
import AllTeams from "../components/Teams/AllTeams";
import CreateTeamModal from "../components/Modal/CreateTeamModal";


const Teams = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  const [type, setType] = useState("all");
  const [createTeamModal, setCreateTeamModal] = useState("false");
  
  

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] p-[2rem] flex flex-col gap-[1rem]">
      <div className="w-[100%] h-[10%]  flex items-center justify-between text-white">
        <div className="  text-white flex gap-[2rem] text-[22px]">
          <button
            onClick={() => setType("all")}
            className={`${type === "all" && "text-[#FF730D]"}`}
          >
            All teams
          </button>
        </div>
        {type === "all" && 
          user && user.role === "COACH" && <button
            className=" p-[0.8rem] font-bold rounded-[10px] bg-[#434343]"
            onClick={() => setCreateTeamModal("true")}
          >
            Create Team
          </button>}
        
      </div>
      {type === "all" && <AllTeams createTeamModal={createTeamModal}/>}
     
      {createTeamModal === "true" && (
        <CreateTeamModal setCreateTeamModal={setCreateTeamModal}/>
      )}
      
    </div>
  );
};

export default Teams;
