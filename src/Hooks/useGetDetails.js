import React, { useEffect } from 'react'
import { API_OPTIONS } from '../components/constants'
import { useDispatch } from 'react-redux'
import { ADD_DETAILS } from '../store/MovieSlice'

const useGetDetails = (id) => {

    const dispacth=useDispatch()

    const GetDetails=async(id)=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=te-IN', API_OPTIONS)
        const json=await data.json()
        //console.log(json)
        dispacth(ADD_DETAILS(json))
        

    }

    useEffect(()=>{
        GetDetails(id)
        return () =>{
            dispacth(ADD_DETAILS(null))
        }
    },[id])
  
}

export default useGetDetails
