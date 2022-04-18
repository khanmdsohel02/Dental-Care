import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../CustomHook/usefirebase';
 import "./Navbar.css"

const Navigation = () => {

  const { user, handleSignOut } = useFirebase();
    return (
   
        <Navbar
        collapseOnSelect expand = "lg" className='navi' >
  <Container>
  <Navbar.Brand href="/" className='logo'>DR.  ABDULLAH</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="menu-items">
        <Nav.Link href="/home"className='item' >HOME</Nav.Link>
        <Nav.Link href="/about"className='item' >ABOUT ME</Nav.Link>
        <Nav.Link href="/service"className='item' >SERVICE</Nav.Link>
        <Nav.Link href="/appointment"className='item' >APPOINTMENT</Nav.Link>
        <Nav.Link href="/fees"className='item' >FEES</Nav.Link>
              <Nav.Link href="/blog" className='item' >BLOGS</Nav.Link>
              <span className='color-info'>{ user?.displayName && user.DisplayName} </span>
              {
                user?.uid?
                <b className='sign-out' onClick={handleSignOut}>Sign Out</b>:
                < Nav.Link href="/login"
                className = 'item' > LOGIN </Nav.Link>
        }

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     
    )
};

export default Navigation;