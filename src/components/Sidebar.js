import React, { useState, useEffect } from "react";
import crickstat from "../assets/crickstatLogoBlackBg.svg";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [page, setPage] = useState("");

  const location = useLocation();

  //setting up the page type.
  useEffect(() => {
    // Get the current location object
    const currentUrl = location.pathname;

    if (currentUrl.includes("matches") || currentUrl.includes("match")) {
      setPage("matches");
    }
    if (currentUrl.includes("teams")) {
      setPage("teams");
    }
    if (currentUrl.includes("tournaments")) {
      setPage("tournaments");
    }
  }, [useLocation()]);

  return (
    <div className="w-[20vw] h-[100vh] bg-black text-white p-[1rem]">
      <div className="w-[100%] h-[15vh] ">
        <Link className="w-[100%]" to={"/matches"}>
          <img src={crickstat} className="w-[100%]" alt="logo" />
        </Link>
      </div>
      <div className="w-[100%] h-[85%]  flex flex-col items-end gap-[1.2rem] text-[24px] p-[1rem]">
        <Link
          to="/matches"
          className={` ${
            page === "matches" ? "text-[#FF730D]" : "text-white"
          } `}
        >
          Matches
        </Link>
        <Link
          to="/teams"
          className={` ${page === "teams" ? "text-[#FF730D]" : "text-white"} `}
        >
          Teams
        </Link>
        <Link
          to="/tournaments"
          className={` ${
            page === "tournaments" ? "text-[#FF730D]" : "text-white"
          } `}
        >
          Tournaments
        </Link>
        <Link
          to="/rankings"
          className={` ${
            page === "rankings" ? "text-[#FF730D]" : "text-white"
          } `}
        >
          Rankings
        </Link>
        <Link
          to="/players"
          className={` ${
            page === "players" ? "text-[#FF730D]" : "text-white"
          } `}
        >
          Players
        </Link>
        <Link
          to="/news"
          className={` ${page === "news" ? "text-[#FF730D]" : "text-white"} `}
        >
          News
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
