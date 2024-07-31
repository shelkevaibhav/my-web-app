'use client'
import React, { useState } from 'react';
import styles from './Count.module.css'
import { useSelector } from 'react-redux';

export const Count = () => {
  const[count,setCount]=useState(0)
  const {photos}=useSelector((state)=>{
    return{
      photos:state.appReducer.photos
    }
  })
  const handleClick = () =>{
    setCount(count+1)
  }
  return (<div>
    <div data-testid="count" className={styles.clr}>Count</div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Increament</button>
    {
      photos.length > 0 && <ol>
        {
          photos.map(({title,thumbnailUrl},index) =>{

            return<li key={index}>
              <div>{title}</div>
              <img src={thumbnailUrl}/>
            </li>
          }
        )}
      </ol>
    }
    </div>
  )
}


