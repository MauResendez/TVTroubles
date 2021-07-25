import './App.css';
import LandingPage from './views/LandingPage';
import Swipe from "./views/Swipe";
import NotFound from './views/NotFound';
import NavBar from './components/Navbar';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/swipe" component={Swipe}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
