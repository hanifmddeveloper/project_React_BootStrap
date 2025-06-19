import React from 'react'
import "./menu.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from "../../assets/logo.png";


const Menu = ()=>{
  return (
    <div>
    <section className='menu_bg'>
    <Container>
     <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logo} alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Sermon</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
        <button className='btn1'><a href='#'>Contact us</a></button>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    </section>
    </div>
  
   
  )
}

export default Menu
