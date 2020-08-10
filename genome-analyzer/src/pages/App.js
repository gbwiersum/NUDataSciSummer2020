import React from 'react';
import '../scss/App.scss';
import logo from '../design/logo.png';
import Home from './Home.js';
import Explore from './Explore.js';
import Team from './Team.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link className="logo" to="/"><img src={logo}/></Link>
          <ul className="Menu">
            <li className="MenuItem"><Link className="Link" to="/">Classify</Link></li>
            <li className="MenuItem"><Link className="Link" to="/explore">Explore</Link></li>
            <li className="MenuItem"><Link className="Link" to="/team">Team</Link></li>
          </ul>
        </div>

        <Switch>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

        </Switch>

      </Router>
    </div>

  );
}

export default App;
