// system imports
import React from 'react';
import { Router, Redirect } from '@reach/router';
// import axios from 'axios';

// design imports
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Carousell from './components/CarouselCards'
// import BeerCards from './components/BeerCards'
// import TinderCards from './components/TinderCards';
// import TinderCard from 'react-tinder-card';

// component imports
import Header from './components/Header'

// route imports
import Landing from './views/Landing.js';
import NewUser from './views/NewUser.jsx';
import Login from './views/Login.jsx';
import Dashboard from './views/Dashboard';
import BrowseBeers from './views/BrowseBeers';
import DisplayBeer from './views/DisplayBeer';
import InputBeer from './views/InputBeer';
import EditBeer from './views/EditBeer';



function App() {
  return (
    <div className="App">
        <Header />
        {/* <Button>Test Button</Button>  */}

        <Router>
          <Redirect from ="/" to= "/beers/welcome" noThrow/>

          <Landing path ="/beers/welcome" />
          <NewUser path="/newuser"/>
          <Login path="/login"/>
          <Dashboard path = "/beers" />
          <BrowseBeers path = "/beers/list" />
          <DisplayBeer path = "/beers/:id/details" />
          <InputBeer path = "/beers/new"/>
          <EditBeer path = "/beers/:id/edit" />

          <Carousell path = "/carousel" />
        </Router>
    </div>
  );
}
export default App;