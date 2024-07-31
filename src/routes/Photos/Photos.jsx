"use client"
import React from 'react'
import './Photos.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const Photos = () => {
  const dispatch = useDispatch();
  const fnClick = async()=>{
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
      dispatch({type:"UPDATE_PHOTOS",payload:res.data})
    }catch(ex){

    }finally{

    }
  }
  return (
    <div>
    <div className='Photos'>Photos</div>
    <button onClick={fnClick}>get Photos</button>
    </div>
  )
}
