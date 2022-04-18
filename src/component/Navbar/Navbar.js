import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container navbar">
    <div className='logo'><Link to="/">Dr.Abdullah</Link>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="">
        <li className="nav-item">
          <Link className="menu-item" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          < Link className = " menu-item"
          to = "/aboutme" > ABOUT </Link>
        </li>
        <li className="nav-item">
          < Link className = "menu-item"
          to = "/service" > SERVICES </Link>
        </li>
        <li className="nav-item">
          <Link className="menu-item" to="/appointment">APPOINTMENT</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-item" to="/blog">BLOGS</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-item" to="/fees">FEES</Link>
        </li>
        <li className="nav-item">
          <Link className="menu-item" to="/login">LOGIN</Link>
        </li>
      </ul>
         </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    )
};

export default Navbar;