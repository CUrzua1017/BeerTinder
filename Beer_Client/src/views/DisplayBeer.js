import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

function DisplayBeer(props){
    const [beerToDisplay, setBeerToDisplay]=useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/beers/'+ props.id)
        .then(response => setBeerToDisplay(response.data))
    },[props.id]);


    // const adoptPet = (beerId) => {
    //     console.log('delete this petId'+ petId)
    //     axios.delete('http://localhost:8000/api/pets/' + petId)
    //         .then(() => navigate('/pets'))
    //         }

    if(beerToDisplay === null) return 'Loading...';

    return(
        <div>

            <header>
                <div>
                    <h1>Beer Tinder</h1>
                    {/* <h3>Details about: {beerToDisplay.name} </h3> */}
                </div>
                <div>
                    <Link to="/beers/list">Browse Beers</Link><br></br>
                    {/* <button onClick = {() => adoptPet(petToDisplay._id)}> Adopt {petToDisplay.name} </button> */}
                </div>
            </header>
            
            <div className = "display">
            <img src = {beerToDisplay.image} alt = {beerToDisplay.name} width="150"/>
				<h3> Beer Name: {beerToDisplay.name}</h3>
                <p> Brewery: {beerToDisplay.brewery}</p>
                <p> Beer Type: {beerToDisplay.beerType}</p>
                <p> Description: {beerToDisplay.description}</p>
                <p> ABV: {beerToDisplay.abv}</p>
                <p> IBU: {beerToDisplay.ibu}</p>
                <p> Availability: {beerToDisplay.availability}</p>
                <p> Tastinng Notes: {beerToDisplay.tastingNotes}</p>

                
            </div>

        </div>
    ) 
}

export default DisplayBeer;