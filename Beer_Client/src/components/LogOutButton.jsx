import {navigate} from '@reach/router';
import axios from 'axios';


const LogOutButton=()=>{
    function handleClick(){
        axios.delete('http://localhost:8000/api/users/logout',{ withCredentials:true })
        .then(()=>navigate('/login'))
        .catch(console.log);
    }
    return(
        <button onClick={handleClick}>Log Out</button>
    );
}
export default LogOutButton;