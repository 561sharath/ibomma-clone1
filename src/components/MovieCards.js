import React from 'react'
import { IMAGE_URL } from './constants'

const MovieCards = ({posterpath,originaltitle}) => {
  return (
    <div className='md:p-3 p-2'>
      <img className='md:w-52 md:h-72 rounded-lg cursor-pointer w-[125px] h-52'
      src={IMAGE_URL+posterpath} />

      <p className='text-white font-light mt-2 hidden md:inline-block'>{originaltitle}</p>
      
      
    </div>
  )
}

export default MovieCards
