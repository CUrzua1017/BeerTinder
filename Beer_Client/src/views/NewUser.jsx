import RegistrationForm from '../components/RegistrationForm.jsx';
import { Link } from '@reach/router';


const NewUser=()=>{

    return(
        <div>
            <Link to="/beers">Dashboard</Link>
            <h1>Create Account</h1>
            <RegistrationForm/>
        </div>
    );
}
export default NewUser;