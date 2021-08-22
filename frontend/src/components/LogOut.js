import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavItem } from 'reactstrap';
import '../styles/Navbar.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  return (
    <NavItem onClick={() => logout({returnTo: window.location.origin})}>
      Log Out
    </NavItem>
  );
};

export default LogoutButton;