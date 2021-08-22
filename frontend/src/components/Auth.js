import React, { Fragment } from "react";

import SignUp from "./SignUp";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

import { useAuth0 } from "@auth0/auth0-react";
import { NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

const Auth = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated 
  ? 
  <Fragment>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/swipe">Swipe</Link>
    </NavItem>
    <LogOut />
  </Fragment> 
  : 
  <Fragment>
    <LogIn /> 
    <SignUp/>
  </Fragment>;
};

export default Auth;