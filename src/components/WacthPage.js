import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, API_OPTIONS, IMAGE_URL } from './constants'
import useGetDetails from '../Hooks/useGetDetails'
import { useSelector } from 'react-redux'
import Header from './Header'
import WacthPageConatiner1 from './WacthPageConatiner1'
import WacthPageContainer2 from './WacthPageContainer2'
import UseWacthTrailerVideo from '../Hooks/useWacthTrailerVideo'

const WacthPage = () => {

    const params=useParams()
    const {id} =params
    const [ids]=id
    const [idea,setIdea]=useState()
    

    useGetDetails(id)
    UseWacthTrailerVideo(id)
    

    const MovieDetails=useSelector((store) => store?.movies?.tmdbdetails)

    

    

    
  return (
    <div>
      <Header />
      <WacthPageConatiner1 MovieDetails={MovieDetails} />

      <WacthPageContainer2 />
      
    </div>
  )
}

export default WacthPage
