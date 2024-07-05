import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
<Navbar bg="white" variant="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className='logo' as={Link} to="/">Empower-Desk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto m-3">
            <Nav.Link as={Link} to="/"  >Home</Nav.Link>
            <Nav.Link as={Link} to="/blog"   >Blog</Nav.Link>
            <Nav.Link as={Link} to="/services"   >Services</Nav.Link>
            <Nav.Link as={Link} to="/contact"  >Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="btn btn-primary" as={Link} to="/login"  className="me-2 rounded-pill">Login</Button>
            <Button variant="outlin" className='rounded-pill' as={Link} to="/register">Start now, it's free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
