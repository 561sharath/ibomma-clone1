
import React, { useEffect } from 'react'
import { API_KEY } from '../components/constants'
import { useDispatch } from 'react-redux'
import { ADD_MOVIES } from '../store/MovieSlice'

const useGetMovies = () => {

    const dispacth = useDispatch()

    useEffect(()=>{
        getMoviesdata()
    },[])

    const getMoviesdata=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&with_original_language=te")
        const json=await data.json()
        //console.log(json.results)
        dispacth(ADD_MOVIES(json.results.slice(0,18).reverse()))
    }

  
}

export default useGetMovies
