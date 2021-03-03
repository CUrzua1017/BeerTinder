import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


function BeerRanking(){
    const [beerList, setBeerList] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/beers')
            .then(response => setBeerList(response.data))
    },[]);

    console.log(beerList)

    if (beerList === null) return 'Loading...';

	return(
        <div>

            {beerList.map((beerList, idx) => (           
                <div key={beerList._id}> 
                    <h4>{ beerList.name}</h4>
                    <img src = {beerList.image} alt = {beerList.name} width="150"/>
                    <p>{beerList.beerType}</p>
                    <p><b>{beerList.brewery}</b></p>
                    
                </div>
            ))}

        </div>
    )
    
}


export default BeerRanking;