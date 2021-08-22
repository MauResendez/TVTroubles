import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import '../styles/Navbar.css';
import Auth from "./Auth";

function NavBar() 
{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand href="/" className="link">TV Troubles</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Auth/>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;