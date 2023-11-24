import React, { useEffect, useState } from 'react'
import UseWacthTrailerVideo from '../Hooks/useWacthTrailerVideo'
import { useSelector } from 'react-redux'

const WacthPageContainer2 = () => {

    
    

    
    const Trailer = useSelector((store) => store?.movies?.tmdbTrailer)
    
    //console.log("second")

    

    
  return Trailer ? (

    <div className='bg-black h-[135vw] md:h-screen'>
      <div className="md:w-screen w-screen aspect-auto">
        
        <iframe
          className="md:w-screen aspect-video  md:h-screen w-screen" 
          src={"https://www.youtube.com/embed/"+Trailer?.key+"?&loop=1&controls=1&mute=0"}
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    
  ):(
    <div className='bg-black h-screen'>
       <h1 className='text-7xl text-center p-5 text-red-800'>!!! Oops Video Not Found !!!</h1>
    </div>
   
  )
}

export default WacthPageContainer2
