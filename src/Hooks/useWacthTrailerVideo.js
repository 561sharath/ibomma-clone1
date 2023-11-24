import { useDispatch } from "react-redux";
import { ADD_TRAILER, REMOVE_VIDEO } from "../store/MovieSlice";
import { API_OPTIONS } from "../components/constants";
import { useEffect, useState } from "react";

const UseWacthTrailerVideo = (id) => {
    const dispacth = useDispatch();
   

    
    
    
  
    useEffect(() => {
      getMovieVideos();

      return () =>{
        dispacth(ADD_TRAILER(null))
      }

      
    }, [id]);

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=te-IN',API_OPTIONS)
        const json = await data.json();
    
        //console.log(json.results);
    
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        
        dispacth(ADD_TRAILER(trailer));
      };
  };
  
  export default UseWacthTrailerVideo
  