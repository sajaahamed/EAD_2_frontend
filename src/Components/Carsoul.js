import React from 'react'
import './Carsol.css'
import Carousel from 'react-bootstrap/Carousel';


export default function Carsoul() {
  return (
    <div className='carsoul'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="block w-100"
          src="https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block w-100"
          src="https://img.freepik.com/premium-photo/online-fashion-shopping-with-computer_23-2150400628.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block w-100"
          src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
