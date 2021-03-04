import React,{useState} from 'react';
import axios from 'axios';
import { Link,navigate } from '@reach/router'

export default function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [err,setErr]= useState('');


    function handleSubmit(event){
        event.preventDefault();
        
        setErr('');
        axios.post('http://localhost:8000/api/users/login',{
            email,
            password
        },{ withCredentials:true })
        .then(()=> navigate('/beers'))
        .catch(() =>setErr('Please check you credentials!'));
    }

    return(
        <div>
            <Link to={"/newuser/"}>Create Account</Link>
            <h1>Login/Reg</h1>
            {err && (<p style={{color:'red'}}>{err}</p>)}
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Email</label>
                    <input name="email" value={email} onChange={e =>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e =>setPassword(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}