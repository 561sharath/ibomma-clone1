import React from "react";
import SearchMovieCards from "./SearchMovieCards";
import { Link } from "react-router-dom";

const SeachMovieList = ({ movies }) => {
    //console.log(movies)
  return (
    <div className=" md:px-20 md:py-10 px-5 py-2">
    <div className="bg-[#252525]">
      <div className="border border-[#424242]">
        {movies?.map((movie) => (
          <Link to={"/wacthpage/" + movie.id} key={movie.id}>
            <SearchMovieCards
            
            posterpath={movie?.poster_path}
            originaltitle={movie?.original_title}
            date={movie?.release_date}
          />
          </Link>
        
          
        ))}
      </div>
    </div>
    </div>
  );
};

export default SeachMovieList;
