import React from "react";
import out from "../../assets/out.gif"
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="fixed w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 bg-black flex flex-col items-center justify-center">
    <span className="text-white font-bold text-[42px] text-center">Oops! Error Occurred</span>
      <div className=" h-[65%] w-[40vw]  relative ml-[5rem]">
        <iframe
          src={out}
          width="100%"
          height="100%"
          className="absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
          title="njfen"
        ></iframe>
      </div>
      <Link to={"/matches"} className="text-white mt-[5rem] border px-[1rem] py-[0.5rem]">Back to Home page</Link>
    </div>
  );
};

export default Error;
