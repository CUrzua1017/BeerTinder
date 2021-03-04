import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

function BrowseBeers(){
    const [beerList, setBeerList] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/beers',{ withCredentials:true })
            .then(response => setBeerList(response.data))
    },[]);

    console.log(beerList)

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

    function handleDelete(id){
        axios.delete('http://localhost:8000/api/beers/'+id)
            .then(() => {
                const filtered = beerList.filter(beerList => beerList._id !== id);
                setBeerList(filtered);
                alert('Successfully deleted');
            })
    }

    if (beerList === null) return 'Loading...';

	return(
        <div>
            <Link to="/beers/new"> Add New </Link>
            {beerList.map((beerList, idx) => (           
                <div key={beerList._id}> 
                    <h4>{ beerList.name}</h4>
                    <img src = {beerList.image} alt = {beerList.name} width="150"/>
                    <p>{beerList.beerType}</p>
                    <p><b>{beerList.brewery}</b></p>
                    <p>{beerList.likes} Likes</p>
                    <button onClick ={() => navigate('/beers/' + beerList._id + '/edit')}>Edit</button>
                    <button onClick = {() => handleLike(idx)}>Like</button>
                    <button onClick = {() => handleDelete(beerList._id)}>Delete</button>
                    <button onClick ={() => navigate('/beers/' + beerList._id + '/details')}> Details </button>
                </div>
            ))}

        </div>
    )
    
}


export default BrowseBeers;

