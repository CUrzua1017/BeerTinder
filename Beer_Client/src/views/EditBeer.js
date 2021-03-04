import { useEffect, useState } from 'react';
import axios from 'axios';
import BeerForm from '../components/BeerForm';

import { Link } from '@reach/router';

function EditBeer(props){
    const [beerToEdit, setBeerToEdit]=useState(null);

    useEffect(()=>{//Lets get the data!, to get on page load-useEffect
        axios.get('http://localhost:8000/api/beers/'+ props.id)
        .then(response => setBeerToEdit(response.data))
    },[props.id]);

    if(beerToEdit === null) return 'Loading...';

    return(
        <div>
            <Link to="/beers/list">Browse Beers</Link>
            <BeerForm
            method="put"
            url={'http://localhost:8000/api/beers/'+ props.id}
            {...beerToEdit}
            />
        </div>
    )
}

export default EditBeer;


