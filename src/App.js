import React from 'react';
import logo from './logo.svg';
import './App.css';

import Starships from './entities/Starships'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header stars">
        <h1 className="Title">Title</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Link to="/starships"> Click me to show the starships component</Link>

      </header>

      <Switch>
        <Route path="/starships">
          <Starships />
        </Route>
        <Route path="/persons">
          <Persons />
        </Route>
        <Route path="/assets">
          <Assets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
