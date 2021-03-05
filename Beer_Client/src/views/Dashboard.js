import React from 'react';
// import { Link } from '@reach/router';
// import LogOutButton from '../components/LogOutButton.jsx';
import TinderCards from '../components/TinderCards.js';

function Dashboard(props){
    return(
        <div>
            <h1>DASHBOARD </h1>
            <TinderCards />
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