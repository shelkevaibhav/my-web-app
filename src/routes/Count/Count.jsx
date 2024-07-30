'use client'
import React, { useState } from 'react';
import styles from './Count.module.css'

export const Count = () => {
  const[count,setCount]=useState(0)
  const handleClick = () =>{
    setCount(count+1)
  }
  return (<div>
    <div data-testid="count" className={styles.clr}>Count</div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Increament</button>
    </div>
  )
}


