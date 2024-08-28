import React from "react";

import { useState } from "react";
import MyTeams from "../components/MyTeams";
import AllTeams from "../components/AllTeams";

import CreateTeamModal from "../components/Modal/CreateTeamModal";

const Teams = () => {
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
          <button
            onClick={() => setType("my")}
            className={`${type === "my" && "text-[#FF730D]"}`}
          >
            My team
          </button>
        </div>
        {type === "all" && (
          <button
            className=" p-[0.8rem] font-bold rounded-[10px] bg-[#434343]"
            onClick={() => setCreateTeamModal("true")}
          >
            Create Team
          </button>
        )}
      </div>
      {type === "all" && <AllTeams />}
      {type === "my" && <MyTeams />}
      {createTeamModal === "true" && (
        <CreateTeamModal setCreateTeamModal={setCreateTeamModal}/>
      )}
      
    </div>
  );
};

export default Teams;
