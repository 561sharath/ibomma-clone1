import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { API_KEY } from './constants'
import useGetMovies from '../Hooks/usegetMovies'
import { useSelector } from 'react-redux'

const Secondbar = () => {

  const AllMovies=useSelector((store) => store.movies)

  return (
    <div className='w-screen  bg-[#0f0f0f]'>
      <MovieList movies={AllMovies.tmdbMoviesList}/>
    </div>
  )
}

export default Secondbar
