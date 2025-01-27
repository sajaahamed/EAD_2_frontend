import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Navigationbar.css'

export default function Navigationbar() {
  return (
    <div>
       <Navbar expand="lg" className="bg-custom">
      <Container fluid>
      <Navbar.Brand href="#">
          <img
            src="https://i.pinimg.com/originals/85/c8/3d/85c83d242b73d3c52b8c4c2e7df27db7.jpg"
            height="80px"
            width="80px"
            className="d-inline-block align-top"
            alt="MMM vvv logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="Home_page.js">Home</Nav.Link>
            <Nav.Link href="Login_page.js">Sign in account</Nav.Link>
            <Nav.Link href="Login_page.js">Cart</Nav.Link>
            
            </Nav>
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search" variant="outline-success">Search </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
