import React from 'react'
import './Carsol.css'
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Carsoul() {
  return (
    <div>
     
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
          src="https://www.globalsign.com/application/files/2516/0498/6435/General_Banner_Online_Shopping_Blog_1_APAC_2020_09_03.jpg"
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

    <div className='cd1'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2024/12/475285308/LN/KH/BX/8852934/women-s-designer-vegan-leather-sneakers-500x500.jpg"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> 
     </div>

   </div>
  )
}
