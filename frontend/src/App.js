import './App.css';
import LandingPage from './views/LandingPage';
import Swipe from "./views/Swipe";
import NavBar from './components/Navbar';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/swipe">
          <Swipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
