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
        data.map(({ path, altText, title, subtitle }, index) => (
          <Carousel.Item key={index}>
            <div className="image-wrapper">
              <Image
                src={path}
                alt={altText}
                layout="fill" // Ensure the image fills the container
                objectFit="cover" // Ensure the image covers the container area
              />
            </div>
            <Carousel.Caption>
              <h5>{title}</h5>
              <p>{subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Home;
