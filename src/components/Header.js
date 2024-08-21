import React from "react";
import CurrentDateTime from "./CurrentDateTime";

const Header = () => {

  return (
    <div className=" w-[100%] h-[10vh] flex flex-col ">
      <CurrentDateTime/>
    </div>
  );
};

export default Header;
