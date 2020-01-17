import React from 'react';
import './App.css';

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Starships from './entities/Starships'

import 'react-bulma-components/dist/react-bulma-components.min.css';

import { Heading } from 'react-bulma-components';

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
          <Heading size={2} className="Title">SW-API<br/>WARS</Heading>
          <EntityNavigation/>
          
          <Switch>
            <Route path="/starships/:page">
              <Starships />
            </Route>
          </Switch>
          <p className="Credit">By Regan Iwadha/melunian</p>
        </header>
      </Router>
    </ApolloProvider>
  );
}

export default App;