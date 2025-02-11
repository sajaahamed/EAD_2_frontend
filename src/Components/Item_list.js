import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item_list.css'; 

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="#fe">Electronics</Nav.Link>
            <Nav.Link href="#pricing">Motors</Nav.Link>
            <Nav.Link href="#features">Sports</Nav.Link>
            <Nav.Link href="#pricing">Toys</Nav.Link>
            <Nav.Link href="#features">Clothes</Nav.Link>
            <Nav.Link href="#pricing">Health & beauty</Nav.Link>
            <Nav.Link href="Home_page.js">Home & garden</Nav.Link>
            <Nav.Link href="#pricing">Grocery</Nav.Link>
            <Nav.Link href="#features">Industrial & equipment</Nav.Link>
            <Nav.Link href="#pricing">Mobile phones</Nav.Link>

            <Nav.Link href="#electronics">Electronics</Nav.Link>
            <Nav.Link href="#motors">Motors</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
            <Nav.Link href="#toys">Toys</Nav.Link>
            <Nav.Link href="#clothes">Clothes</Nav.Link>
            <Nav.Link href="#health-beauty">Health & Beauty</Nav.Link>
            <Nav.Link href="#home-garden">Home & Garden</Nav.Link>
            <Nav.Link href="#grocery">Grocery</Nav.Link>
            <Nav.Link href="#industrial-equipment">Industrial & Equipment</Nav.Link>
            <Nav.Link href="#mobile-phones">Mobile Phones</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;