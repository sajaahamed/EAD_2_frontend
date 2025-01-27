import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Item_list() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#fe">Electronics</Nav.Link>
            <Nav.Link href="#pricing">Motors</Nav.Link>
            <Nav.Link href="#features">Sports</Nav.Link>
            <Nav.Link href="#pricing">Toys</Nav.Link>
            <Nav.Link href="#features">Clothes</Nav.Link>
            <Nav.Link href="#pricing">Health & beauty</Nav.Link>
            <Nav.Link href="#features">Home & garden</Nav.Link>
            <Nav.Link href="#pricing">Grocery</Nav.Link>
            <Nav.Link href="#features">Industrial & equipment</Nav.Link>
            <Nav.Link href="#pricing">Mobile phones</Nav.Link>
           
            
            
        
        </Nav>
        </Navbar>
      </Container>
    </Navbar>
    </div>
  )
}
