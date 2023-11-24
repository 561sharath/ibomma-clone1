import React, { useEffect } from "react";
import Header from "./Header";
import Firstbar from "./Firstbar";
import Secondbar from "./Secondbar";
import useGetMovies from "../Hooks/usegetMovies";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { MOBILE_VIEW } from "../store/MovieSlice";

const Body = () => {
  useGetMovies();

  const dispacth=useDispatch()

  useEffect(()=>{
    const handleResize=()=>{
      const isWindowMobile = window.innerWidth <= 768;
      dispacth(MOBILE_VIEW(isWindowMobile))
    }
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return (
    <div>
      <Header />
      <Firstbar />
      <Secondbar />

      <Footer />
    </div>
  );
};

export default Body;
