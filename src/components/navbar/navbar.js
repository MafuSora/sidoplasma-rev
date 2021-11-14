import React from 'react';
import logo from '../img/LOGO SIDOPLASMA.png';
import { Navbar,Nav,Form,FormControl,Button,Image } from 'react-bootstrap'
import './navbar.css'
// import kai from '../img/KAI.png';
// import {Navbar}  from 'reeact-bootstrap/Navbar';

// console.log(logo);
const Navibar = () => {
  return (
    
 
    <Navbar className="uwu" variant="dark" expand="lg" sticky="top">
      
      <Navbar.Brand href="/" ><Image   src="" className="imagelogo m-1" fluid ></Image></Navbar.Brand>
      <Image className="sidoplasma" src={logo} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          
        <Nav className="me-auto ">
          <Nav.Link href="/" className = "textnavbar" activeClassName="activetextnavbar" exact={true}>Home</Nav.Link>
          <Nav.Link href="/menu1" className = "textnavbar" >PMI</Nav.Link>
          <Nav.Link href="/menu2" className = "textnavbar">RS</Nav.Link>
          <Nav.Link href="/menu4" className = "textnavbar">Laporan</Nav.Link>
        </Nav>
        <div className="ms-auto">
          <Form className="d-flex">
              <div class = "button">
                <Button variant="outline-danger" className="profile" >Profile </Button>
                {/* <Button variant="outline-danger" size = "sm">Sign Up </Button> */}
              </div>
          </Form>
        </div>  
      </Navbar.Collapse>
     
    </Navbar>
  )
};

export default Navibar;