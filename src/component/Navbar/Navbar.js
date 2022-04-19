import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../CustomHook/usefirebase';
import "./Navbar.css"


const Navigation = () => {

  const { user, handleSignOut } = useFirebase();
  console.log(user);

    return (
   
        <Navbar
        collapseOnSelect expand = "lg" className='navi main-width' >
  <Container>
          < Navbar.Brand className = 'logo'
            as={Link} to="/" >
        < img src ={"https://i.ibb.co/QnPjKG9/logo.png"}
        alt = "log" />
          </ Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="menu-items">
        <Nav.Link as={Link} to="/home"className='item' >HOME</Nav.Link>
        <Nav.Link as={Link} to="/about"className='item' >ABOUT ME</Nav.Link>
        <Nav.Link as={Link} to="/service"className='item' >SERVICE</Nav.Link>
        <Nav.Link as={Link} to="/appointment"className='item' >APPOINTMENT</Nav.Link>
        <Nav.Link as={Link} to="/fees"className='item' >FEES</Nav.Link>
              <Nav.Link as={Link} to="/blog" className='item' >BLOGS</Nav.Link>
          {
                user?.uid?
                <b className='sign-out' onClick={handleSignOut}>Sign Out</b>:
                < Nav.Link as={Link} to="/login"
                    className='item' > LOGIN </Nav.Link>
              }
                <span className='user-name'>{ user?.displayName && user.displayName} </span>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     
    )
};

export default Navigation;