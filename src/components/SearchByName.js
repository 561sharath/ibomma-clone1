import React, { useEffect } from 'react'
import { API_OPTIONS, IMAGE_URL } from './constants'
import { useParams } from 'react-router-dom'
import useSearchPage from '../Hooks/useSearchPage'
import { useSelector } from 'react-redux'
import SeachMovieList from './SeachMovieList'
import Header from './Header'


const SearchByName = () => {

    const params =  useParams()
    const {name} = params

    
    useSearchPage(name)

    const SearchData = useSelector((store) => store.movies)
    
    

  return (
    <>
    <Header />
    <div className='bg-[#1d1d1d] h-screen'>
    <div className='bg-[#1d1d1d]'>

<SeachMovieList movies={SearchData?.tmdbSearchMoviesList} />


</div>

    </div>
    
    </>
    
  )
}

export default SearchByName
