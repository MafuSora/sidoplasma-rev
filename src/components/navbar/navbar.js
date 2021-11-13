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
          <Nav.Link href="/" className = "textnavbar">Home</Nav.Link>
          <Nav.Link href="/menu1" className = "textnavbar">GERBONG</Nav.Link>
          <Nav.Link href="/menu2" className = "textnavbar">BERITA</Nav.Link>
          <Nav.Link href="/menu4" className = "textnavbar">BERITA</Nav.Link>
        </Nav>
        <div className="ms-auto">
          <Form className="d-flex">
                {/* <FormControl
                  type="search"
                  placeholder="Search"
                  className="m-2"
                  aria-label="Search"
                  
                /> */}
                {/* <div class = "button">
                  <Button variant="outline-danger" className="SignIn" >Sign In </Button>
                  <Button variant="outline-danger" size = "sm">Sign Up </Button>
                </div> */}
                <div class="navbar-collapse collapse" id="mobile_menu">
                  <ul class="nav navbar-nav navbar-right">
                  <li><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span> Login / Sign Up <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Sign Up</a></li>
                    </ul>
                  </li>

                  </ul>
                </div>
          </Form>
        </div>
       
          
      </Navbar.Collapse>
     
  </Navbar>
  )
};

export default Navibar;