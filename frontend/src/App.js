import './App.css';
import LandingPage from './views/LandingPage';
import Swipe from "./views/Swipe";
import NavBar from './components/Navbar';
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/swipe">
            <Swipe />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
