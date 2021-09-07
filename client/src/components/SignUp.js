import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavItem } from 'reactstrap';
import '../styles/Navbar.css';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <NavItem onClick={() => loginWithRedirect({screen_hint: "signup"})}>
      Sign Up
    </NavItem>
  );
};

export default SignUp;