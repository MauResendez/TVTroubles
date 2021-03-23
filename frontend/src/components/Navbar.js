import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MyNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/"><h3 className="linkTextColor">TV Troubles</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><h5 className="linkTextColor">Home</h5></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><h5 className="linkTextColor">Swipe</h5></NavLink>
              </NavItem>          
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}

export default MyNavBar;
