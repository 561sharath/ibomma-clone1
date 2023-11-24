import React from "react";
import { IMAGE_URL } from "./constants";

const WacthPageConatiner1 = ({ MovieDetails }) => {
  //console.log(MovieDetails);

  return (
    <div className="bg-[#0f0f0f] w-screen">
      <div className="flex md:p-20 ml-2 p-3">
        <img
          className="md:w-52 md:h-80 rounded-md border border-white w-36 h-48"
          src={IMAGE_URL + MovieDetails?.poster_path}
          alt="posterlogo"
        />
        <div className="md:ml-20 ml-6 mt-4">
          <p className="text-white md:text-[45px] md:font-bold">
            {MovieDetails?.title}
          </p>
          <p className="text-white md:mt-5 mt-3">Date : {MovieDetails?.release_date}</p>
          <p className="text-white">Time : {MovieDetails?.runtime}min</p>
          <div className="flex md:gap-6 md:mt-32">
          <button className="hidden md:inline-block py-4 px-8  rounded-lg bg-[#272727] text-white font-medium">TRAILER</button>
            <button className="hidden md:inline-block py-4 px-8  rounded-lg bg-[#5ca73b] text-white font-medium">SUPPORT SECTION</button>
          </div>
        </div>

        
      </div>
      <div className="flex md:mt-0  p-2 gap-3 ">
          <button className=" md:hidden py-2 px-12  rounded-lg bg-[#272727] text-white font-medium">TRAILER</button>
            <button className=" md:hidden py-2 px-8  rounded-lg bg-[#5ca73b] text-white font-medium">SUPPORT SECTION</button>
          </div>
    </div>
  );
};

export default WacthPageConatiner1;
