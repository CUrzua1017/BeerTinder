import React from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';
// import LogOutButton from '../components/LogOutButton.jsx';

import TinderCards from '../components/TinderCards.js';

function Dashboard(props){
    return(
        <div>
            <TinderCards />

            <Link to="/beers/list">
                    <Button variant="outlined" size="large"> Browse Beers </Button>
            </Link>
            <Link to="/beers/new">
                    <Button variant="outlined" size="large"> Add New Beer </Button>
            </Link>
        </div>
    )
}
export default Dashboard;







// {/* <div>
// <LogOutButton />
// <Link to="/beers/new">Add New Beer</Link>
// <TinderCards />
// {/* ReactDom.render(
//     <React.StrictMode>

//         <BeerCards/>
//     </React.StrictMode>
// ) */}
// {/* </Render> */}
// <h1>DASHBOARD </h1>
// <img src ="https://images.pexels.com/photos/3009773/pexels-photo-3009773.jpeg" alt = "social beer" width="100%"/>

// </div> */}