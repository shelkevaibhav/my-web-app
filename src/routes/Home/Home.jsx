'use client'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import data from './Carousel.json'
import Image from 'next/image'

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      {
        data.map (({path,althText,title,subtile},index)=>{
          return <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={path}
            alt={althText}
            height='500px'
          />
          <Carousel.Caption>
            <h5>{title}</h5>
            <p>{subtile}</p>
          </Carousel.Caption>
        </Carousel.Item>
        })
      }
   
    </Carousel>
  );
}


export default Home
