import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBarPanel = () => {
  const cartProducts= useSelector(state=>state.cart)
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ReduxToolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
       
           
          </Nav>
          <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>MyBag{cartProducts.length}</Nav.Link>
            </Navbar.Text>
            </Navbar.Collapse>
 
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarPanel