import React from "react";
import CurrentDateTime from "./CurrentDateTime";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

  return (
    <div className=" w-[100%] h-[10vh] flex justify-between items-center">
      <CurrentDateTime/>
      <button onClick={()=>navigate('/register')} className="text-white  bg-black w-[8rem] h-[3rem] rounded-[10px]">Register</button>
    </div> 
  );
};

export default Header;
