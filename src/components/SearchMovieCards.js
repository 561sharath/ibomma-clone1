import React from "react";
import { IMAGE_URL } from "./constants";

const SearchMovieCards = ({ posterpath, originaltitle,date}) => {
  return (
    <div>
      <div className="md:p-3 flex p-2">
        <img
          className="md:w-28 md:h-40 rounded-lg cursor-pointer w-14 h-28"
          src={IMAGE_URL + posterpath}
        />
        <div>
        <p className="text-white md:text-2xl md:mt-2 md:ml-10 md:font-bold ml-4">{originaltitle} - IBOMMA</p>
        <p className="text-[#68bc3c] md:mt-2 md:ml-10 hidden md:inline-block ml-4">http//gov.ibomma.day//+{originaltitle}+/+{date}</p>
        <p className="text-[#68bc3c] md:mt-2 md:ml-10  md:hidden ml-4">http//gov.ibomma.day//{date}</p>
        <p className="text-white md:ml-10 md:mt-3 ml-4 mt-2">Released On - {date}</p>

        </div>
        
        
      </div>

      <hr className="border border-[#424242]"/>
    </div>
  );
};

export default SearchMovieCards;
