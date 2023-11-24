import React, { useEffect } from 'react'
import { API_OPTIONS } from '../components/constants'
import { useDispatch } from 'react-redux'
import { ADD_SEARCH_MOVIE_DETAILS } from '../store/MovieSlice'

const useSearchPage = (name) => {

    const dispacth = useDispatch()

    const getSearchDetails=async() =>{

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+name+'&include_adult=false&language=te-IN&page=1', API_OPTIONS)
        const json = await data.json()
        dispacth(ADD_SEARCH_MOVIE_DETAILS(json.results))
    }

    useEffect(()=>{

        getSearchDetails()

        return () =>{
            dispacth(ADD_SEARCH_MOVIE_DETAILS(null))
        }

    },[name])
  
}

export default useSearchPage
