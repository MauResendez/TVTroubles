import './App.css';
import LandingPage from './views/LandingPage';
import Swipe from "./views/Swipe";
import NotFound from './views/NotFound';
import NavBar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import ProtectedRoute from './auth/protected-route';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function App() 
{
  const { user } = useAuth0();

  useEffect(() => // Same as ComponentDidMount
  {
      let id;

      if(user)
      {
        id = user.sub.split('|')[1];
        console.log(id);

        axios.get(`/user?id=${id}`);

        // Create a new user if ID doesn't exist in database

      }

  }, [user]);
  
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <ProtectedRoute exact path="/swipe" component={Swipe}/>
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
