import React from 'react';
import './App.css';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Starships from './entities/Starships'

import 'react-bulma-components/dist/react-bulma-components.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EntityNavigation from './EntityNavigation';

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router className="App">
        <header className="App-header stars">
          <h1 className="Title">SW-API<br/>WARS</h1>
          <EntityNavigation/>
          <Switch>
            <Route path="/starships/:page">
              <Starships />
            </Route>
          </Switch>
        </header>
      </Router>
    </ApolloProvider>
  );
}

export default App;