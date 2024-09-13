import React from "react";

const Squad = ({ players }) => {
  return (
    <div className="w-[100%]  h-[70%] flex flex-wrap -mx-2 gap-[2rem] justify-center overflow-y-scroll  scrollable-content custom-scrollbar  ">
      {players != null && players.map((player) => (
        <div className="w-[280px] h-[350px] bg-[#434343] rounded-[10px] justify-self-start rounded-[10px]">
          <div className="w-[100%] h-[80%] ">
            <img
              src={"https://res.cloudinary.com/dd2nvofv0/image/upload/v1725960451/dgtxmftqcsrobcbkdxxm.png"}
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
