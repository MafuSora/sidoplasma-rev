import React from 'react';
import logo from '../img/LOGO SIDOPLASMA.png';
import { Navbar,Nav,Form,Button,Image } from 'react-bootstrap'
import './navbar.css'

const Navibar = () => {
  return (
      <Navbar className=" uwu" variant="light" expand="lg" sticky="top">

        <Navbar.Brand href="/" ><Image   src="" className="imagelogo m-1" fluid ></Image></Navbar.Brand>
        
          <Image className="sidoplasma" src={logo} />
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="me-auto p-4 ">
            <Nav.Link href="/" className = "textnavbar" activeClassName="activetextnavbar" exact={true}>About us</Nav.Link>
            {/* <Nav.Link href="/FormPMI" className = "textnavbar" >PMI Input</Nav.Link>
            <Nav.Link href="/FormFaskes" className = "textnavbar">Faskes Input</Nav.Link>
            <Nav.Link href="/TabelPMI" className = "textnavbar">Data PMI</Nav.Link>
            <Nav.Link href="/TabelFaskes" className = "textnavbar">Data Faskes</Nav.Link> */}
            {/* <Nav.Link href="/Login" className = "textnavbar">Login</Nav.Link> */}
          </Nav>
          
            <Form className="d-flex ">
                <div class = "button p-2">
                  <a href="/login"><Button variant="outline-danger " className="profile mx-3" >Profile </Button></a>
                  {/* <Button variant="outline-danger" size = "sm">Sign Up </Button> */}
                </div>
            </Form>

        </Navbar.Collapse>
        
      </Navbar>
  )
};

export default Navibar;