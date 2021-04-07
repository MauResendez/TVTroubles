import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand><h3 className="linkTextColor">TV Troubles</h3></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/"><h5 className="linkTextColor">Home</h5></Link>
            </NavItem>
            <NavItem>
              <Link to="/swipe"><h5 className="linkTextColor">Swipe</h5></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;