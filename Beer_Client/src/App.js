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
// import NoMatch from './components/NoMatch';
// import Layout from './components/Layout';
import Login from './views/Login.jsx';
import NewUser from './views/NewUser.jsx';
// import axios from 'axios';

// // Add a response interceptor
// axios.interceptors.response.use(
//   response=>response,
//   err => { 
//     navigate('/login');
//     return err
//   }//if this callback has an err, will redirect to the login
// );


function App() {
  return (
    <div className="App">
      {/* <React.Fragment> */}

        <Button>Test Button</Button> 

        <Router>
          <Login path="/login"/>
          <NewUser path="/newuser"/>
          <Dashboard path = "/beers"/>
          <Redirect from ="/" to= "/beers" noThrow/>
          <InputBeer path = "/beers/new"/>
          <BrowseBeers path = "/beers/list" />
          <EditBeer path = "/beers/:id/edit" />
          <DisplayBeer path = "/beers/:id/details" />
          {/* <NoMatch path = {NoMatch} /> */}
        </Router>
      {/* </React.Fragment> */}
    </div>
  );
}
export default App;