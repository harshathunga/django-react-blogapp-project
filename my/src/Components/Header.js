import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap';
const Header = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">blog app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/add">add</Nav.Link>
                
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header