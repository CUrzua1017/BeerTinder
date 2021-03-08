import BeerForm from '../components/BeerForm';
import { Link } from '@reach/router';

function InputBeer() {
    return (
        <div>
            <Link to="/beers">Dashboard</Link>
            <h1>Add Beer</h1>
            <BeerForm
                name = ""
                brewery = ""
                beerType = ""
                description = ""
                abv = ""
                ibu = ""
                availability = ""
                image = ""
                tastingNotes = ""
                method="post"
                url = "http://localhost:8000/api/beers"
            />
        </div>
    )
}
export default InputBeer;