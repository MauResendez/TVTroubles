import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavItem } from 'reactstrap';
import '../styles/Navbar.css';

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <NavItem onClick={() => loginWithRedirect()}>
      Login
    </NavItem>
  );
};

export default LogIn;