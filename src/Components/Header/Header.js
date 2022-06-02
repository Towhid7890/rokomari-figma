import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand style={{color:'#FF4917',fontFamily:"Assistant",fontSize:'35px'}} className="logo" href="#home">Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link className="link-style text-dark ms-5"  href="#features">Home</Nav.Link>
              <NavDropdown className="link-style text-dark"  title={ <span className="text-dark my-auto">Pages</span>} >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className="link-style text-dark"  title={ <span className="text-dark my-auto">Service</span>} >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mt-3">
              <Nav.Link className="link-style text-dark" href="">Blog</Nav.Link>
              <Nav.Link className="link-style text-dark"  href="#memes"> About Us</Nav.Link>
              <Nav.Link className="link-style text-dark"  href="">Contact US</Nav.Link>
              <Nav.Link href=""><button className="consult-btn"><span className="">Consulting</span>
              <a className="inner-btn"> now</a>
              </button></Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
