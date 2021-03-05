import React from 'react';
import './App.css';
import { Router, Redirect } from '@reach/router';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dashboard from './views/Dashboard';
import InputBeer from './views/InputBeer';
import BrowseBeers from './views/BrowseBeers';
import EditBeer from './views/EditBeer';
import DisplayBeer from './views/DisplayBeer';
import Login from './views/Login.jsx';
import NewUser from './views/NewUser.jsx';
// import axios from 'axios';
// import TinderCards from './components/TinderCards';
// import TinderCard from 'react-tinder-card';

import Header from './components/Header'
// import BeerCards from './components/BeerCards'


function App() {
  return (
    <div className="App">
        <Header />
        {/* <Button>Test Button</Button>  */}

        <Router>
          <Login path="/login"/>
          <NewUser path="/newuser"/>
          <Dashboard path = "/beers" />
              {/* <TinderCard />
          </Dashboard> */}
          {/* <TinderCards path ="/beers/card" /> */}
          <Redirect from ="/" to= "/beers" noThrow/>
          <InputBeer path = "/beers/new"/>
          <BrowseBeers path = "/beers/list" />
          <EditBeer path = "/beers/:id/edit" />
          <DisplayBeer path = "/beers/:id/details" />
        </Router>
    </div>
  );
}
export default App;