import React, { useState } from "react";
import AllTournaments from "../components/Tournaments/AllTournaments";
import MyTournaments from "../components/Tournaments/MyTournaments";
import CreateTournamentModal from "../components/Modal/CreateTournamentModal";

const Tournaments = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [type, setType] = useState("all");
  const [createTournamentModal, setCreateTournamentModal] = useState("false");

  return (
    <div className="rounded-[10px] w-[100%] bg-black h-[100%] flex flex-col items-center">
      <div className="w-[95%] h-[10%]  flex items-center justify-between ">
        <div className="w-[30%] h-[100%]  flex items-center justify-between text-[22px]">
          <button
            onClick={() => setType("all")}
            className={`p-[0.5rem]  ${
              type === "all" ? "text-[#FF730D]" : "text-white"
            } rounded-[10px]`}
          >
            All Tournaments
          </button>
        </div>
       {user && user.role === "ADMIN" && <button onClick={()=>setCreateTournamentModal("true")} className=" p-[0.8rem] font-bold rounded-[10px] bg-[#434343] text-white">
          Create Tournament
        </button>}
      </div>

      {type === "all" && <AllTournaments createTournamentModal={createTournamentModal}/>}
      {type === "my" && <MyTournaments />}

      {
        createTournamentModal === "true" && <CreateTournamentModal setCreateTournamentModal={setCreateTournamentModal}/>
      }
    </div>
  );
};

export default Tournaments;
