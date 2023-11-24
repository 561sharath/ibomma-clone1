import React from "react";
import MovieCards from "./MovieCards";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  
  return (
    <div className="w-screen  bg-[#0f0f0f]">
      <div className="grid grid-cols-3 md:ml-14 md:mr-10 md:flex md:flex-wrap">
        {movies?.map((movie) => (
          <Link to={"/wacthpage/" + movie.id} key={movie.id}>
            <MovieCards
              posterpath={movie.poster_path}
              originaltitle={movie.original_title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
