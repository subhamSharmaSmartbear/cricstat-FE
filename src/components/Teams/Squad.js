import React from "react";
import rohit from "../../assets/rohitSharma.svg";
import dewald from "../../assets/dewald.svg";
import airplane from "../../assets/airplane.svg";
const Squad = ({ players }) => {
  return (
    <div className="w-[100%]  h-[70%] flex flex-wrap -mx-2 gap-[2rem] justify-start overflow-y-scroll  scrollable-content custom-scrollbar  ">
      {players != null && players.map((player) => (
        <div className="w-[280px] h-[350px] bg-[#434343] rounded-[10px] justify-self-start rounded-[10px]">
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
    </div>
  );
};

export default Squad;
