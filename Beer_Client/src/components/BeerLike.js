import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

function BeerLike() {
    const [beerList, setBeerList] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/beers',{ withCredentials:true })
            .then(response => setBeerList(response.data))
    },[]);

    function handleLike(index){
        const beerListToUpdate = beerList[index];
        axios.post('http://localhost:8000/api/beers/'+ beerListToUpdate._id+'/likes')
            .then(response => {
                const updatedBeerList = response.data;
                const clonedBeerList = beerList.slice();  // creating a copy of the array for better modification
                clonedBeerList[index] = updatedBeerList;
                setBeerList(clonedBeerList);
            })
    }

    return(
        <div className="">
            {beerList.map((beerList, idx) => (
                <button onClick = {() => handleLike(idx)}>Like</button>
            ))}
                </div>
    ) 


}
export default BeerLike;