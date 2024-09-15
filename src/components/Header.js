import React, { useEffect, useState } from "react";
import CurrentDateTime from "./Utilities/CurrentDateTime";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  

  return (
    <div className=" w-[100%] h-[10vh] flex justify-between items-center">
      <CurrentDateTime />
      {!user && (
        <button
          onClick={() => navigate("/register")}
          className="text-white  bg-black w-[8rem] h-[3rem] rounded-[10px]"
        >
          Register
        </button>
      )}
      {user && (
        <div className=" max-w-[10rem] flex items-center gap-[0.5rem] justify-center h-[3rem] bg-black rounded-[10px] px-[0.5rem] relative">
          <span className="text-white  bg-black h-[100%] rounded-[10px] truncate w-[100%] flex items-center px-[0.5rem]">
            {user.username}{" "}
          </span>{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
