import React from 'react';
import { Link } from '@reach/router';
import LogOutButton from '../components/LogOutButton.jsx';
// import axios from 'axios';

function Dashboard(props){
    return(
        <div>
            <LogOutButton />
            <Link to="/beers/new">Add New Beer</Link>
            <h1>DASHBOARD </h1>
            {/* <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img> */}
            <img src ="https://images.pexels.com/photos/3009773/pexels-photo-3009773.jpeg" alt = "social beer" width="100%"/>

        </div>
    )
}
export default Dashboard;


