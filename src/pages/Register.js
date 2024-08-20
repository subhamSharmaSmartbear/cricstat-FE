import React, { useState } from "react";
import crickstat from "../assets/crickstatLogoBlackBg.svg";
import crickstatBigLogo from "../assets/crickstatLogoBig.svg";
import Login from "../components/Login";
import Signup from "../components/Signup";


const Register = () => {
  const [page, setPage] = useState("login");


  return (
    <div className="w-[100%] border h-[100vh] bg-black text-white flex items-start flex-col ">
      <img src={crickstat} className="w-[15rem] mt-[2rem] ml-[2rem]" alt="logo"/>
      <img
        src={crickstatBigLogo}
        alt="logo"
        className="absolute top-[30vh] w-[60vw] left-[15vw]"
      />

      {page === "login" ? <Login setPage={setPage}/> : <Signup setPage={setPage}/>}
    </div>
  );
};

export default Register;
